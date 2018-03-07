import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {GetCurrentLang} from '../Logic/LanguageManager';
import ServicesLinks from './Services/ServicesLinks';
import Arguments from './Arguments/Arguments';
export default class Welcome extends Component {
  constructor(props){
    super(props);
    this.state = {
      home: {},
      currentLang: ''
    }

  }
  componentDidMount()
  {
    let lang = window.navigator.language;
    let langAbrev = lang.split('-');
    let abreviation = langAbrev[0];
    this.props.history.push('/'+abreviation);
    axios.get('/api/homes/'+abreviation).then((response) => {
      this.setState({home: response.data, currentLang: abreviation});
    }).catch((error) => {
      alert("error");
    });
  }



  render() {
    return (
      <div>
        <div id="home-first-section">
          <div className="container">
            <h1>{this.state.home.mantra}</h1>
          </div>
        </div>
        <ServicesLinks display={"full"} lang={this.state.currentLang} hiddenHimself={false} />
        <Arguments lang={this.state.currentLang} />
        <ServicesLinks display={"mini"} lang={this.state.currentLang} hiddenHimself={false} />
      </div>

    );
  }
}

