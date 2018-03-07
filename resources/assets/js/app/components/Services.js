import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {GetCurrentLang} from '../Logic/LanguageManager';
export default class Services extends Component {
  constructor(props){
    super(props);
    this.state = {currentContent: {}, data: [{title: 'services in english', lang: 'en'}, {title: 'services en français', lang: 'fr'}]};

  }
  componentDidMount(){

    let currentLang = this.props.match.params.lang;
      let currentContent = this.state.data.find((item) => {
      if(item.lang == currentLang){
          return item;
      }
    });
      this.setState({currentContent: currentContent});
  }


  render() {
    return (
      <div>
        {this.state.currentContent.title}
      </div>

    );
  }
}

