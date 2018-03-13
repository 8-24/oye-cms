import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default class Arguments extends Component {
  constructor(props){
    super(props);
    this.state = {
      arguments: []
    }
  }
  componentDidMount(){
    axios.get('/api/arguments').then((response) => {
      this.setState({arguments: response.data});
    }).catch((error) => {
      console.log(error);
    });
  }

  ArgumentsList(data){
    let dataReturn = data.map( (item) => {
      return <div key={item.id}><span>{item.name}</span></div>
    });
    return dataReturn;
  }

  ArgumentsFormList(){
    let data = this.state.arguments.map((item) => {
      return(<div key={item.id} id={'service-blocks' + item.id}>
        Service : {item.position}
        {this.ArgumentsList(item.contents)}
        <Link to={'/console/arguments/' + item.id}>{item.id}</Link>
      </div>)
    });
    return data;
  }
  render() {
    return (
      <div className="container">
        <div id="services-list">
          <h2>Arguments</h2>
          <div>
            {this.ArgumentsFormList()}
          </div>
          <Link to="/console/services/add">Ajouter nouvel argument</Link>
        </div>

      </div>
    );
  }
}

