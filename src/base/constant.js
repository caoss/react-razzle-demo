/**
 * @author css
 *
 */
//常量
const Constant = {
    ENV: {
        DEBUG: 'DEBUG',
        TEST: 'TEST',
        PREP: 'PREP',
        RELEASE: 'RELEASE'
    },
    SERVER_PORT: {
        DEBUG: 8088,
        TEST: 3001,
        PREP: 3001,
        RELEASE: 3001
    },
    DOMAIN: {
        DEBUG: 'http://test.neetneet.cn',
        TEST: 'http://test.neetneet.cn',
        PREP: 'http://preprod.neetneet.cn',
        RELEASE: 'https://neets.cc'
    },
    API_DOMAIN: {
        // DEBUG: 'http://testbeta.neetneet.cn/mainapi',//18080-for-main
        // DEBUG: 'http://120.55.78.231:28080',//18080-for-main
        // DEBUG: 'http://118.178.224.109:28080',//18080-for-main
        DEBUG: 'http://mainapi.neetneet.cn',
        TEST: 'http://test.neetneet.cn/api',
        PREP: 'http://114.55.172.160:28080',//预生产环境
        RELEASE: 'https://main.neets.cc',
    },
    API_DOMAIN2: {
        // DEBUG: 'http://121.43.55.26:28080',//28080-for-uc
        DEBUG: 'http://47.97.0.114:28080',//28080-for-uc
        TEST: 'http://test.neetneet.cn/api',
        PREP: 'https://uc.neets.cc',
        RELEASE: 'https://uc.neets.cc'
    },
    API_DOMAIN3: {
        DEBUG: 'http://118.31.38.136:28080',//for-运营
        // DEBUG: 'http://test.neetneet.cn:38080',//for-运营
        TEST: 'https://g.neets.cc',
        PREP: 'https://g.neets.cc',
        RELEASE: 'https://g.neets.cc'
    },
    HTTP_LOG_LEVEL: {
        DEBUG: 'debug',
        TEST: 'debug',
        PREP: 'debug',
        RELEASE: 'warn'
    },
    DEFAULT_LOG_LEVEL: {
        DEBUG: 'debug',
        TEST: 'debug',
        PREP: 'debug',
        RELEASE: 'warn'
    }
  };
  
  // 环境常量:DEBUG/TEST/PREP/RELEASE
  const ENV = Constant.ENV.RELEASE;
  const EnvConstant = {
    IS_PRODUCTION_ENV: ENV === Constant.ENV.RELEASE,
    SERVER_PORT: Constant.SERVER_PORT[ENV],
    API_DOMAIN: Constant.API_DOMAIN[ENV],
    API_DOMAIN2: Constant.API_DOMAIN2[ENV],
    API_DOMAIN3: Constant.API_DOMAIN3[ENV],
    DOMAIN: Constant.DOMAIN[ENV],
    HTTP_LOG_LEVEL: Constant.HTTP_LOG_LEVEL[ENV],
    DEFAULT_LOG_LEVEL: Constant.DEFAULT_LOG_LEVEL[ENV],
  };
  export default EnvConstant;
  
  
