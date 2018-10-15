import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
  } from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import NoMatch from './noMatch';
import Topics from './topics';
import './App.css';

// const App = () => (
//     <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/about" component={About} />
//         <Route path="/topics" component={Topics} />
//         <Route component={NoMatch}/>
//     </Switch>
// );
class App2 extends React.Component {//es6
    render(){
        console.log(this.props);
        return(
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                </ul>
               {this.props.children}
          </div>
        );
    }
}
class App extends React.Component {//es6
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/topics" component={Topics} />
                    <App2>
                        <Switch>
                            <Route exact path="/about" component={About} />
                            <Route component={NoMatch}/>
                        </Switch>
                    </App2>
                </Switch>
          </div>
        );
    }
}

export default App;
