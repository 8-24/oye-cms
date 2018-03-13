import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default class Argument extends Component {
  constructor(props){
    super(props);
    this.state = {
       languages: [], argument: [], currentArgument: {}, currentLanguage: 'fr'
    }
  }
  componentDidMount(){
    let id = this.props.match.params.id;
    axios.get('/api/languages').then((response) => {
      this.setState({languages: response.data});
    }).catch((error) => {
      console.log(error);
    });
    axios.get('/api/arguments/' + id).then((response) =>
    {
      this.setState({argument: response.data});
      this.setCurrentLanguage(this.state.currentLanguage);
    }).catch((error) =>
    {
      console.log(error);
    });
  }

  setCurrentLanguage(lang)
  {
    alert(lang);
    let newArgument = this.state.argument.map( (item) =>
    {
      if(item.lang_slug === lang)
      {
        return item;
      }
    });
    let argument = newArgument.filter( obj => obj != null);
    this.setState({currentArgument: argument[0]});
  }

  ListLanguages()
  {
    let languages = this.state.languages.map((item) =>
    {
      if(item.active == true)
      {
        return <option key={item.id} id={item.slug}>{item.slug} - {item.name}</option>
      }else{}
    });
    return languages
  }
  LanguageChange(e)
  {
    let lang = e.target.value;
    let currentLang = lang.split('-');
    currentLang = currentLang[0].replace(' ', '');
    this.setCurrentLanguage(currentLang);
  }
  handleInput(e){
    let name = e.target.name;
    let value = e.target.value;
    let clone = this.state.currentArgument;
    if(name == 'name'){
      if(value.length < 3){
        e.target.classList.add('warning');
      }else{
        e.target.classList.remove('warning');
      }
      clone.name = value;
    }
    if(name == 'content'){
      clone.content = value;
    }
    this.setState({currentArgument: clone});
  }
  inputValidator(value, request, msg)
  {
    if(value < request){
      return 'warning';
    }
  }
  handleSubmit(e)
  {
    e.preventDefault();
    axios.put('/api/argumentcontents/' + this.state.currentArgument.id,
      {
        id: this.state.currentArgument.id,
        name: this.state.currentArgument.name,
        slug: this.state.currentArgument.slug,
        content: this.state.currentArgument.content,
      }
    ).then((response) =>
    {
      alert("argument content updated");
      console.log(response.data);
    }).catch((error) =>
    {
      alert("error");
      console.log(error);
    });
  }

  render() {
    return (
      <div className="container">
        <div id="arguments-list">
          <h1>argument : {this.props.match.params.id}</h1>
        </div>
        <select name="console-languages-selector" id="console-languages-selector" onChange={this.LanguageChange.bind(this)}>
          {this.ListLanguages()}
        </select>
        <div className="" id="argument-form">
          <form id="argument-form" action="">
            <div className="row">
              <input type="hidden" name="id" value={this.state.currentArgument.id} />
              <label htmlFor="">nom du argument</label>
              <input className={'u-full-width'} type="text" name="name" value={this.state.currentArgument.name} ref={(name) => this.name = name} onChange={this.handleInput.bind(this)}/>
              <label htmlFor="">slug</label>
              <input className="u-full-width" type="text" value={this.state.currentArgument.slug}/>
              <label htmlFor="">contenu</label>
              <textarea className="u-full-width" name="content" id="" cols="30" rows="10" value={this.state.currentArgument.content} ref={(content) => this.content = content} onChange={this.handleInput.bind(this)}></textarea>
            </div>
            <button onClick={this.handleSubmit.bind(this)} >Mettre à jour</button>
          </form>
        </div>
      </div>
    );
  }
}

