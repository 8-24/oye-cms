import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {GetCurrentLang} from '../../Logic/LanguageManager';
export default class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {currentLang: 'en', langList: []};
  }
  componentDidMount()
  {
    axios.get('/api/languages').then((response) =>
    {
      this.setState({langList: response.data});
    })
    .catch((error) => {
      this.setState({currentLang: 'en', langList: ['en']});
    });
  }

  setLang(e)
  {
    let lang = e.target.value;
    console.log(lang);
    console.log(this.props);
  }

  ListLang(){
    // list availables languages
    var languages = this.state.langList.map((item) =>
    {
      (item.active === 1)
      {
        return <Link key={item.id} to={item.slug}>{item.name}</Link>
      }
    });
    return languages;
  }
  render() {
          //{this.ListLang()}
    return (
    <nav>
      <div className="ui vertical menu">
        <div id="languages-list">
          <Link to="/">home</Link>
          <button onClick={this.setLang} value="en">en</button>
          <button onClick={this.setLang} value="fr">fr</button>
        </div>
      </div>
    </nav>
    );
  }
}

