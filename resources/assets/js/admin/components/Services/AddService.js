import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Wysiwig from '../Tools/Forms/Wysiwig';
export default class AddServices extends Component {
  constructor(props){
    super(props);
    this.state = {
      services: []
    }
  }
  componentDidMount(){

  }

  CreateService(){
    console.log("ok");
  }

  handleWysiwig(value){
    this.setState({content: value});
  }
  render() {
    return (
      <div className="container" id="services-list">
        <h1>Ajouter un service</h1>
        <div>
          <form action="">
            <label htmlFor="">Nom du service</label>
            <input className="u-full-width" type="text"/>
            <label htmlFor="">langue</label>
            <select className="u-full-width" name="" id="">
              <option value="">français</option>
              <option value="">english</option>
            </select>
            <label htmlFor="">arguments</label>
            <textarea className="u-full-width" name="" id="" cols="30" rows="10"></textarea>
            <Wysiwig GetContent={this.handleWysiwig.bind(this)} />
            <label htmlFor="">contenu</label>
            <textarea className="u-full-width" name="" id="" cols="30" rows="10"></textarea>
            <Wysiwig GetContent={this.handleWysiwig.bind(this)} />
            <label htmlFor="">illustration</label>
            <input className="u-full-width" type="text"/>
            <label htmlFor="">miniature</label>
            <input className="u-full-width" type="text"/>
            <label htmlFor="">mots clés</label>
            <input className="u-full-width" type="text"/>
            <label htmlFor="">description</label>
            <input className="u-full-width" type="text"/>
          </form>
        </div>
        <Link to="/console/services/add">Ajouter nouveau service</Link>
      </div>
    );
  }
}

