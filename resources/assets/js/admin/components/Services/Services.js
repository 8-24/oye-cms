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

  ServicesList(data){
    let servicesData = data.map( (item) => {
      return <div key={item.id}><span>{item.name}</span></div>
    });
    return servicesData;
  }

  ServicesFormList(){
    let services = this.state.services.map((item) => {
      return(<div key={item.id} id={'service-blocks' + item.id}>
        Service : {item.position}
        {this.ServicesList(item.contents)}
        <Link to={'/console/services/' + item.id}>{item.id}</Link>
      </div>)
    });
    return services;
  }
  render() {
    return (
      <div className="container">
        <div id="services-list">
            <h2>Services</h2>
              <div>
                {this.ServicesFormList()}
              </div>
              <Link to="/console/services/add">Ajouter nouveau service</Link>
        </div>

      </div>
    );
  }
}

