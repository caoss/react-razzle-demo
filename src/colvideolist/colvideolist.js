import React from 'react';
import Http from '../base/http';
import Api from '../base/api';
import detailImg from './large.jpg';
import HtImage from '../home/htImage/HtImage';
import './col.css';
class ColvideoList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data:{},
        }   
    }
    componentDidMount(){
       let colId = this.props.location.search;
        colId = colId.substr(7);
        Http.get(Api.COL_VIDEOS_DETAIL+'/'+colId+'?pageNo='+1+'&pageSize=100').then(result=>{
            this.setState({
                data:result
            })
        });
    }
   
    render() {
        let data = this.state.data;
        return (
            <div>
                <div className='col_header'>
                    <div>
                        <HtImage src ={ data.imageUrl } />
                    </div>
                    <div className='col_header_box2'>
                        {data.title}
                        <p>共 {data.itemCount} 条数据</p>
                        <p> 创建者:{data.insertUserName}</p>
                    </div>
                </div>    

                <div className='video_main'>   
                    { 
                        data && data.series && data.series.list && data.series.list.length>0?
                            data.series.list.map(function(item){
                                return(
                                    <a className='video_li' href= {'./detail/'+item.id } >    
                                        <div>
                                            <HtImage src ={ item.photo } />
                                        </div>
                                        <div className='col_header_box2'>
                                            { item.title }
                                            <p>{item.subtypeTxt}</p>
                                            <p>{item.stateTxt}</p>
                                        </div>
                                    </a>    
                                )
                            })
                        :
                        '无'
                    } 
                </div>    

            </div>
        );
    }
}

export default ColvideoList;
