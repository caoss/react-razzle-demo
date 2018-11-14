import React from 'react';
import Http from '../base/http';
import Api from '../base/api';
import Inventory_li from './inventory_li/Inventory_li';
import logo from './logo.png';
import './Home.css';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:{},
            isLoadingMore: false,
            noMore:false,
            pageNo:0,
        }   
    }
    componentDidMount(){
        this.getInventoryData();
        const wrapper = this.refs.wrapper;
        const loadMoreDataFn = this.loadMoreDataFn;
        const that = this; // 为解决不同context的问题
        let timeCount;
        function callback() {
            const top = wrapper.getBoundingClientRect().top;
            const windowHeight = window.screen.height;
            if (top && top <= windowHeight) {
              // 当 wrapper 已经被滚动到页面可视范围之内触发
              loadMoreDataFn(that);
            }
        }
        window.addEventListener('scroll', function () {
            if (this.state.isLoadingMore) {
                return ;
            }
            if (timeCount) {
                clearTimeout(timeCount);
            }
            timeCount = setTimeout(callback, 50);
        }.bind(this), false);
    }

    loadMoreDataFn(that){
        that.getInventoryData();
    }
    getInventoryData(){
        let pageNo = this.state.pageNo++;
        Http.get(Api.ITEM_LIST,{pageNo:pageNo,pageSize:10}).then(result=>{
            if(!result.more){
                this.setState({
                    noMore:true,
                })
            }
            if(result.list && this.state.data.list ){
                result.list = this.state.data.list.concat(result.list);
            }
            this.setState({
                data:result
            })
        });
    }
    render() {
        return (
            <div className="Home">
                <div className='header'>
                    <img src={logo} alt="logo" className='logo'/>
                </div>
                <div className='contain'>
                <div style={{ 'clear':'both','background':'#f4f4f4'}}>
                        <div style={{'clear':'both','height':'1px'}}></div>
                           {
                               this.state.data && this.state.data.list&&this.state.data.list.length>0?
                               this.state.data.list.map(function(item,i){
                                   return(
                                        <div key={i}>
                                            <Inventory_li key={item.id} data={item} />
                                        </div>
                                        )
                                    })
                                :
                                null   
                           } 
                        
                        <div style={{'clear':'both','height':'0.12rem'}}></div>
                    </div>

                    <div style={{'clear':'both','height':'1rem'}}>
                        {
                            this.state.noMore?
                                <p style={{'textAlign':'center','color':'#999','lineHeight':'1rem'}}>
                                    没有更多了
                                </p>
                            :
                                null
                        }
                    </div> 
                </div>
                {
                    this.state.noMore?
                    null
                    :
                    <div className="loadMore" style={{'color':'#fff'}} ref="wrapper" onClick={this.loadMoreDataFn.bind(this,this)}>
                    
                    </div>
                }
            </div>
        );
    }
}

export default Home;
