import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddPage from './Pages/AddPage';
import Home from './Home';
import Languages from './Lang/Languages';
import Services from './Services/Services';
import Service from './Services/Service';
import Arguments from './Arguments/Arguments';
import Argument from './Arguments/Argument';
export default class Console extends Component {
  render() {
    return (
      <Router>
        <div className="ui grid">
          <div  className="ui vertical inverted sticky menu fixed top">
            <nav>
              <div className="ui vertical menu">
                <Link to="/console" className="item">
                  Home
                </Link>
                <Link to="/console/lang" className="item">
                  Languages
                </Link>
                <Link to="/console/services" className="item">
                  Services
                </Link>
                <Link to="/console/arguments" className="item">
                  Arguments
                </Link>
                <Link to="/console/lang" className="item">
                  Contact
                </Link>
                <Link to="/console/lang" className="item">
                  Settings
                  <i className="settings icon"></i>
                </Link>
              </div>
            </nav>
          </div>
          <div className="article">
            <Route exact path="/console" component={Home} />
            <Route path="/console/lang" component={Languages} />
            <Route exact path="/console/services" component={Services} />
            <Route exact path="/console/services/:id" component={Service} />
            <Route exact path="/console/arguments" component={Arguments} />
            <Route exact path="/console/arguments/:id" component={Argument} />
          </div>
        </div>
      </Router>
    );
  }
}

if (document.getElementById('console')) {
  ReactDOM.render(<Console />, document.getElementById('console'));
}
