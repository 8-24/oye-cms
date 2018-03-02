import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default class Services extends Component {
  constructor(props){
    super(props);
    this.state = {
      services: []
    }
  }
  componentDidMount(){
    axios.get('/api/services').then((response) => {
      this.setState({services: response.data});
    }).catch((error) => {

    });
  }

  ServicesFormList(){
    let services = this.state.services.map((item) => {
      return(<div id={'services-form-' + item.id}>
        <input type="text" value={item.name} />
        <input type="number" value={item.position} />
        <input type="number" value={item.lang_id} />
        <input type="text" value={item.thumbnail} />
        <input type="text" value={item.illustration} />
        <input type="text" value={item.description} />
        <input type="text" value={item.arguments} />
        <input type="text" value={item.content} />
      </div>)
    });
    return services;
  }

  render() {
    return (
        <div id="services-list">
            <h2>Services</h2>
            <div>
              {this.ServicesFormList()}
            </div>
            <Link to="/console/services/add">Ajouter nouveau service</Link>
        </div>
    );
  }
}

