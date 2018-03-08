import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default class Service extends Component {
  constructor(props){
    super(props);
    this.state = {
      service: []
    }
  }
  componentDidMount(){
    let slug = this.props.match.params.slug;
    axios.get('/api/service/' + slug).then((response) => {
      this.setState({services: response.data});
    }).catch((error) => {
      console.log(error);
    });
  }


  render() {
    return (
      <div id="services-list">
        <h1>service : {this.props.match.params.slug}</h1>
      </div>
    );
  }
}

