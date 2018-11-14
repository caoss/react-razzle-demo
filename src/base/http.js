/**
 * @author css
 *  main
 * @flow
 */
import envConstant from './constant';
const apiDomain = envConstant.API_DOMAIN;
const TIME_OUT = 1000 * 1000;

export default class Http {
    static defaultHeader = {
        'Accept': '*/*',
        'Content-Type': 'application/json;charset=UTF-8',
        'X-Neets-Authorization': "",
        // 'Authorization':'userId=QkjxYwnir3ZDjC546gFTJ8',
    };
    static defaultParams = {
        _: Date.now()
    };

    static _replaceParam(url, params) {
        let result = /\$\{(.+?)\}/.exec(url);
        while (result) {
            if (params[result[1]] !== undefined) {
                url = url.replace(/\$\{(.+?)\}/, params[result[1]]);
                delete params[result[1]];
            }
            result = /\$\{(.+?)\}/.exec(url);
        }
        return { url: /^http:\/\//.test(url) ? url : apiDomain + url, params: params };
    }
    static _toQueryString(obj) {
        return obj
            ? Object.keys(obj)
                  .sort()
                  .map(function(key) {
                      var val = obj[key];
                      if (Array.isArray(val)) {
                          return val
                              .sort()
                              .map(function(val2) {
                                  return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
                              })
                              .join('&');
                      }

                      return encodeURIComponent(key) + '=' + encodeURIComponent(val);
                  })
                  .join('&')
            : '';
    }

    static _fetch(fetch_promise, timeout) {
        var abort_fn = null;
        var abort_promise = new Promise((resolve, reject) => {
            abort_fn = function() {
                reject(new Error('fetch timeout'));
            };
        });
        var abortable_promise = Promise.race([fetch_promise, abort_promise]);
        setTimeout(function() {
            abort_fn();
        }, timeout);

        return abortable_promise;
    }

    static _get(url, params = {}, header) {
        let option = {
            method: 'get',
            headers: Http.defaultHeader
        };
        const result = Http._replaceParam(url, params);

        const queryString = Http._toQueryString(result.params);

        result.url = `${result.url}${queryString == '' ? '' : '?' + queryString}`;

        console.log('发送get请求[%s]', result.url);
        return  new Promise((r,j) => {
            fetch(result.url, option)
                .then(res => {
                    res.json().then((nRes) => {//UC/AUTH_EXPIRED
                        r(nRes);
                    });
                })
                .catch(err => {
                    console.log('网络请求失败[%s]', result.url);
                });
        })
    }

    static _post(url, params = {}, header) {
        
        const result = Http._replaceParam(url, params);
        const option = {
            method: 'post',
            headers: Object.assign({}, Http.defaultHeader, header),
            body: JSON.stringify(result.params)
        };

        console.log('发送post请求[%s]', result.url);
        return  new Promise((r,j) => {
            fetch(result.url, option)
                .then(res => {
                    res.json().then((nRes) => {//UC/AUTH_EXPIRED
                        r(nRes);
                    });
                })
                .catch(err => {
                    console.log('网络请求失败[%s]', result.url);
                });
        })
    }

    static setDefaultHeader(header: any) {
        Object.assign(Http.defaultHeader, header);
    }

    static get(url, params = {}, header) {
        return Http._fetch(Http._get(url, params, header), TIME_OUT);
    }

    static post(url: string, params = {}, header?: any) {
        return Http._fetch(Http._post(url, params, header), TIME_OUT);
    }

    
}
