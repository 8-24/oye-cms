import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Editor } from '@tinymce/tinymce-react';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {homes: {}, languages: [], currentLanguage: 'fr'}
  }
  componentDidMount(){
    axios.get('/api/languages').then((response) => {
      this.setState({languages: response.data});
    }).catch((error) => {

    });
    axios.get('/api/homes/'+this.state.currentLanguage).then((response) => {
      this.setState({homes: response.data});
    }).catch((error) => {
      console.log(error);
    });
  }

  ListLanguages(){
      let languages = this.state.languages.map((item) => {
        if(item.active == true){
          return <option key={item.id} id={item.slug}>{item.slug} - {item.name}</option>
        }else{

        }
      });
    return languages
  }
  LanguageChange(e){
    let lang = e.target.value;
    let currentLang = lang.split('-');
    currentLang = currentLang[0].replace(' ', '');

    axios.get('/api/homes/'+currentLang).then((response) => {
      this.setState({homes: response.data});
    }).catch((error) => {
      console.log(error);
    });
  }
  handleHomeInput(e){
    let name = e.target.name;
    let value = e.target.value;
    let clone = this.state.homes;
    if(name == 'mantra'){
      clone.mantra = value;
    }
    if(name == 'description'){
      clone.description = value;
    }
    if(name == 'keywords'){
      clone.keywords = value;
    }
    if(name == 'filepath'){
      clone.thumbnail = value;
    }
    this.setState({homes: clone});

  }

  handleSubmit(e){
      axios.put('/api/homes/' + this.state.homes.id,
      {
          id: this.state.homes.id,
          mantra: this.state.homes.mantra,
          description: this.state.homes.description,
          keywords: this.state.homes.keywords,
          thumbnail: this.state.homes.thumbnail,
      }
      ).then((response) => {
        alert("home mise à jour");
        console.log(response.data);
      }).catch((error) => {
        alert("error");
        console.log(error);
      });
  }
  render() {
    return (
      <div className="container">
        <h1>Admin Home</h1>
        <select name="console-languages-selector" id="console-languages-selector" onChange={this.LanguageChange.bind(this)}>
          {this.ListLanguages()}
        </select>
        <form action="">
          <input type="hidden" name="id" defaultValue={this.state.homes.id} ref={(id) => this.id = id}/>
          <div className="input-group">
            <label htmlFor="">Mantra</label>
            <input className="u-full-width" name="mantra" id="" value={this.state.homes.mantra} onChange={this.handleHomeInput.bind(this)} />
          </div>
          <label htmlFor="">Description</label>
          <textarea className="u-full-width" name="description" id="" cols="30" rows="10" value={this.state.homes.description} onChange={this.handleHomeInput.bind(this)} />
          <label htmlFor="keywords">mots clés</label>
          <input className="u-full-width" type="text" name="keywords" value={this.state.homes.keywords} onChange={this.handleHomeInput.bind(this)} />
          <label htmlFor="thumbnail">image</label>
          <div className="input-group">
           <span className="input-group-btn">
             <a id="lfm" data-input="thumbnail" data-preview="holder" className="btn btn-primary">
               <i className="fa fa-picture-o"></i> Choose
             </a>
           </span>
            <input id="thumbnail" className="form-control u-full-width" type="text" name="filepath" value={this.state.homes.thumbnail} onChange={this.handleHomeInput.bind(this)} />
          </div>
          <img id="holder" src={this.state.homes.thumbnail} />
          <button onClick={this.handleSubmit.bind(this)}>Mettre à jour</button>
        </form>
      </div>
    );
  }
}

