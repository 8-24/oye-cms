import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home';
import Languages from './Lang/Languages';

export default class Console extends Component {
  render() {
    return (
      <Router>
        <div className="ui grid">
          <div  class="ui three column ">
            <nav>
              <div className="ui vertical menu">
                <Link to="/console" className="item">
                  Home
                </Link>
                <Link to="/console/lang" className="item">
                  Languages
                </Link>
                <Link to="/console/lang" className="item">
                  Pages
                </Link>
                <Link to="/console/lang" className="item">
                  Contact
                </Link>
                <Link to="/console/lang" className="item">
                  Settings
                  <i class="settings icon"></i>
                </Link>
              </div>
            </nav>
          </div>
          <div className="ui container">
            <Route exact path="/console" component={Home} />
            <Route path="/console/lang" component={Languages} />
          </div>
        </div>
      </Router>
    );
  }
}

if (document.getElementById('console')) {
  ReactDOM.render(<Console />, document.getElementById('console'));
}
