import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {GetCurrentLang} from '../Logic/LanguageManager';
export default class Welcome extends Component {
  constructor(props){
    super(props);
    this.state = {pageLoading: true}
  }
  componentDidMount(){
      let lang = GetCurrentLang();
      this.props.history.push('/'+lang);
      document.getElementById('loader').classList.remove('loading');
  }

  componentWillMount(){
    document.getElementById('loader').classList.add('loading');
  }

  render() {
    return (
      <div>Welcome every Body</div>

    );
  }
}

