import React from 'react';
import './index.css';
import Code_m from './icon_default.png';
import Code_ms from './icon_anthology.png';
import HtImage from '../htImage/HtImage';
class Inventory_li extends React.Component {
    constructor(props){
        super(props);
    }
    _itemClick(videoId) {
    }
    _click(id,state) {
    }
    render() {
        return (
            <div>
            {
                this.props.data?
                    <div className='inventory_main'>
                        <div className='inventory_tit'>
                            <div className='tit'>
                                {
                                    this.props.data.title?this.props.data.title:''
                                }
                            </div>
                            <p className="tit_p">
                                {
                                    this.props.data.remark
                                    ?
                                        this.props.data.remark
                                    : 
                                        this.props.data.seriesCount
                                            ?
                                            this.props.data.seriesCount:''
                                        }
                                条内容
                            </p>
                        </div>
                        <ul>
                            {
                                this.props.data.seriesVos&&this.props.data.seriesVos.length>0?
                                    this.props.data.seriesVos.map( (item,i)=>{
                                        return(
                                            <li key={i}>
                                                <a href= {'./detail/'+item.videoId } >
                                                    <HtImage src={item.imageUrl} alt="" />
                                                    <p className="tit_vidoe">
                                                        {item.videoName?item.videoName:''}
                                                    </p>
                                                </a>
                                            </li>
                                        )
                                    })
                                :
                                null                                   
                            }
                           
                            {
                                this.props.data.seriesCount&&this.props.data.seriesCount>5?
                                    <li>
                                        <a href= {'./colvideolist?colId='+this.props.data.id } className='last-one'>
                                            <div>
                                                <p>
                                                    {
                                                        this.props.data.seriesCount?this.props.data.seriesCount:''
                                                    }
                                                    条内容
                                                </p>
                                                <p>
                                                    点击查看
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                :
                                    null
                            }

                        </ul>
                    </div>
                :
                null
            }
        </div>
    
        );
    }
}

export default Inventory_li;
