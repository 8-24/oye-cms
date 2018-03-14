import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default class ClientsList extends Component {

  constructor(props){
    super(props);
    this.state = {clients: [], currentLang: ''}
  }

  componentDidMount(){
    axios.get('/api/clients/').then((response) => {
      this.setState({clients: response.data});
    }).catch((error) => {
      console.log(error);
    })
  }

  componentWillReceiveProps(){

  }

  ListClients()
  {
      let currentLang = this.props.lang;
      let data = this.state.clients.map((client) => {
        let dataNode = client.contents.map( (item) => {
          if(item.lang_slug == currentLang){
            return <div className="three columns clients-logo">
              <img className="u-full-width" src={item.logo} alt=""/>
            </div>
          }
        });
        return dataNode;
      });
    return data;
  }
  render() {
    return (
      <div className="container">
        <h2>Ils nous ont fait confiance</h2>
        <div id="arguments-list">
          {this.ListClients()}
        </div>
      </div>
    );
  }
}

