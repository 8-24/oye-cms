import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default class Service extends Component {
  constructor(props){
    super(props);
    this.state = {
      languages: [], service: [], currentService: {}, currentLanguage: 'fr'
    }
  }
  componentDidMount(){
    let id = this.props.match.params.id;

    axios.get('/api/languages').then((response) => {
      this.setState({languages: response.data});
    }).catch((error) => {
      console.log(error);
    });
    axios.get('/api/services/' + id).then((response) =>
    {
      this.setState({service: response.data});
      this.setCurrentLanguage(this.state.currentLanguage);
    }).catch((error) =>
    {
      console.log(error);
    });
  }
  setCurrentLanguage(lang)
  {
    let newService = this.state.service.map( (item) =>
    {
      if(item.lang_slug === lang)
      {
        return item;
      }
    });
    let service = newService.filter( obj => obj != null);
    this.setState({currentService: service[0]});
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
  handleForm()
  {
    alert("handle form");
  }

  ServiceContentsList()
  {
    let data = this.state.service.map( (item) =>
    {
      return <div key={item.id}>
        <form action="">
          <input type="text"/>
        </form>
      </div>
    });
    return data;
  }
  handleInput(e){
    let name = e.target.name;
    let value = e.target.value;
    let clone = this.state.currentService;
    if(name == 'name'){
      clone.name = value;
    }
    if(name == 'filepath'){
      clone.thumbnail = value;
    }
    if(name == 'description'){
      clone.description = value;
    }
    if(name == 'keywords'){
      clone.keywords = value;
    }
    if(name == 'arguments'){
      clone.arguments = value;
    }
    if(name == 'content'){
      clone.content = value;
    }

    this.setState({currentService: clone});

  }
  handleSubmit(){
  }

  render() {
    return (
      <div className="container">
        <div id="services-list">
          <h1>service : {this.props.match.params.id}</h1>
        </div>
        <select name="console-languages-selector" id="console-languages-selector" onChange={this.LanguageChange.bind(this)}>
          {this.ListLanguages()}
        </select>
        <div className="" id="service-form">
          <form action="">
            <div className="row">
              <label htmlFor="">nom du service</label>
              <input className="u-full-width" type="text" name="name" value={this.state.currentService.name} ref={(name) => this.name = name} onChange={this.handleInput.bind(this)}/>
              <label htmlFor="">slug</label>
              <input className="u-full-width" type="text" value={this.state.currentService.slug}/>
              <label htmlFor="">description</label>
              <textarea className="u-full-width" name="description" id="" cols="30" rows="10" value={this.state.currentService.description} ref={(description) => this.description = description} onChange={this.handleInput.bind(this)}></textarea>
              <label htmlFor="">contenu</label>
              <textarea className="u-full-width" name="content" id="" cols="30" rows="10" value={this.state.currentService.content} ref={(content) => this.content = content} onChange={this.handleInput.bind(this)}></textarea>
              <label htmlFor="">arguments</label>
              <textarea className="u-full-width" name="argments" id="" cols="30" rows="10" value={this.state.currentService.arguments} ref={(argments) => this.argments = argments} onChange={this.handleInput.bind(this)}></textarea>
              <label htmlFor="">mots clés</label>
              <input className="u-full-width" type="text" name="keywords" value={this.state.currentService.keywords} ref={(keywords) => this.keywords = keywords} onChange={this.handleInput.bind(this)} />
              <label htmlFor="thumbnail">image</label>
              <div className="input-group">
                <span className="input-group-btn">
                  <a id="lfm" data-input="thumbnail" data-preview="holder" className="btn btn-primary">
                    <i className="fa fa-picture-o"></i> Choose
                  </a>
                </span>
                <input id="thumbnail" className="form-control u-full-width" type="text" name="filepath" value={this.state.currentService.thumbnail} />
              </div>
              <img id="holder" src={this.state.currentService.thumbnail} />
            </div>
            <button onClick={this.handleSubmit.bind(this)}>Mettre à jour</button>
          </form>
        </div>
      </div>
    );
  }
}

