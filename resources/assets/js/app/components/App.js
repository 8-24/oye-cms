import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';

export default class App extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){

    }

    render() {
        return (
          <Router>
              <div className="">
                  <div  className="ui vertical inverted sticky menu fixed top">
                      <nav>
                          <div className="ui vertical menu">

                          </div>
                      </nav>
                  </div>
                  <div className="article">
                      <Route exact path="" component={Welcome} />
                      <Route path="/:language" component={Welcome} />
                  </div>
              </div>
          </Router>
        );
    }
}

if (document.getElementById('application')) {
    ReactDOM.render(<App />, document.getElementById('application'));
}
