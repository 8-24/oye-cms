import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddPage from './Pages/AddPage';
import Home from './Home';
import Languages from './Lang/Languages';
export default class Console extends Component {
  render() {
    return (
      <Router>
        <div className="ui grid">
          <div  class="ui vertical inverted sticky menu fixed top">
            <nav>
              <div className="ui vertical menu">
                <Link to="/console" className="item">
                  Home
                </Link>
                <Link to="/console/lang" className="item">
                  Languages
                </Link>
                <Link to="/console/pages/add" className="item">
                  Add Pages
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
          <div className="article">
            <Route exact path="/console" component={Home} />
            <Route path="/console/lang" component={Languages} />
            <Route path="/console/pages/add" component={AddPage} />
          </div>
        </div>
      </Router>
    );
  }
}

if (document.getElementById('console')) {
  ReactDOM.render(<Console />, document.getElementById('console'));
}
