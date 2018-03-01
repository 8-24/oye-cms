import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {GetCurrentLang} from '../Logic/LanguageManager';
export default class Welcome extends Component {
  constructor(props){
    super(props);


  }
  componentDidMount()
  {
    let lang = window.navigator.language;
    let langAbrev = lang.split('-');
    let abreviation = langAbrev[0];
    this.props.history.push('/'+abreviation);
  }



  render() {
    return (
      <div>Welcome every Body</div>

    );
  }
}

