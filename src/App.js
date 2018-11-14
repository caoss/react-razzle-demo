import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
  } from 'react-router-dom';
import Home from './home/Home';
import Colvideolist from './colvideolist/colvideolist';
import Detail from './detail/Detail';
import NoMatch from './noMatch';
import Topics from './topics';
import './App.css';

class App extends React.Component {//es6
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/topics" component={Topics} />
                    <Route path="/colvideolist" component={Colvideolist} />
                    <Route path="/detail/:id" component={Detail} />
                    <Route component={NoMatch}/>
                </Switch>
          </div>
        );
    }
}

export default App;
