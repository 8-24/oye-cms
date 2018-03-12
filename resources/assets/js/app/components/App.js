import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Service from './Services/Service';
export default class App extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount()
  {
  }
  render() {
    return (
      <Router>
        <div>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/:lang" component={Welcome} />
            <Route exact path="/:lang/services/:slug" component={Service} />
        </div>
      </Router>
    );
  }
}

if (document.getElementById('application')) {
  ReactDOM.render(<App />, document.getElementById('application'));
}