import React from 'react';
import Http from '../base/http';
import Api from '../base/api';
import './detail.css';
import detailImg from './large.jpg';

class Detail extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            detailInfo:{},
            list:[],
        }   
    }
    componentDidMount(){
        let videoId = this.props.match.params.id;
        Http.get(Api.DETAIL_INFO+'/'+videoId).then(result=>{
            console.log(result);
            if(result&&result.item){
                this.setState({
                    detailInfo:result.item
                })
            }
        });
        Http.get(Api.VS_COMPILATION+'/'+videoId+'?pageNo='+1+'&platform=h5&pageSize=50').then(result=>{
            console.log(result);
            if(result&&result.list){
                this.setState({
                    list:result.list
                })
            }
        });

    }
    render() {
        let detailInfo = this.state.detailInfo;
        return (
            <div>
                {
                    this.state.detailInfo?
                        <div className='d_header_main'>
                            <div className='d_header22' style={{ 'background':'url({detailInfo.photo})' }}></div>
                            <div className="d_header">
                                <h3>
                                    {detailInfo.title}
                                </h3>
                                <div className='d_img'>
                                    <img src ={ detailInfo.photo } />
                                </div>
                                <div className='d_txt'>
                                    <p> 评分：{detailInfo.rating}</p>
                                    <p> 类目：{detailInfo.subtypeTxt}</p>
                                    <p> {detailInfo.countries}  {detailInfo.pubYear}</p>
                                </div>
                            </div>
                        </div>
                    :
                    ''
                }
                <div className="d_jianjie">
                    <h3>
                        简介
                    </h3>
                    <p className='d_jianjie_p'>
                        {detailInfo.briefSummary+'...'}
                    </p>
                </div>
                
                <div className="d_jianjie">
                    <h3>
                        相关链接
                    </h3>
                    <ul>
                        {
                            this.state.list&&this.state.list.length>0?
                            this.state.list.map(function(item){
                                return(
                                    <li key={item.id}>
                                        <a href={item.url}>
                                            {item.linkName}
                                        </a>
                                    </li>
                                )
                            })
                            :
                            <p style={{'color':'#666','padding':'15px 0'}}> 
                                暂无
                            </p>
                        }
                    </ul>
                </div>
                
            </div>
        );
    }
}

export default Detail;
