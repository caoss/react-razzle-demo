import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
} from 'react-router-dom';

class Topic extends React.Component{
    render(){
        let match = this.props.match;
        console.log(this.props);
        return(
            <div>
              <h3>{match.params.topicId} -----------caso</h3>
            </div>
        )
    }
}

class Topics extends React.Component {//es6
    render() {
    let match = this.props.match;
    console.log(this.props);
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <NavLink activeStyle={{ color: 'blue'}} to={`${match.url}/rendering`}>
                        11
                    </NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{ color: 'blue'}} to={`${match.url}/components`}>
                        222
                    </NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{ color: 'blue'}} to={`${match.url}/props-v-state`}>
                        333
                    </NavLink>
                </li>
            </ul>
            <Route path={`${match.url}/:topicId`} component={Topic}/>
            <Route exact path={match.url} render={() => (
                <h3>Please select a topic.</h3>
            )}/>
        </div>
      );
    }
}

export default Topics;

