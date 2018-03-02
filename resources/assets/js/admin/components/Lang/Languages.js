import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';
export default class Languages extends Component {
  constructor(props){
    super(props);
    this.state = {
      languages: []
    }

  }
  componentDidMount()
  {
    this.updateState().bind(this);
  }

  updateState()
  {
    axios.get('/api/languages')
      .then(response => {
        this.setState({languages: response.data});
      }).catch(error => {
        //console.log(error);
    });
  }
  storeLanguage()
  {
    let self = this;
    let name = this.name.value;
    let slug = this.slug.value;
    let active = this.active.value;
    axios.post('/api/languages', {
      name: name,
      slug: slug,
      active: active
    }).then(function(response){
        self.setState({languages: response.data});
    }).catch(function(error){
        console.log("error");
    });
  }
  updateLanguage(){
    let self = this;
    let id = this.id.value;
    let name = this.name.value;
    let slug = this.slug.value;
    let active = (this.active.checked) ? true : false;
    axios.put('/api/languages/'+id, {
      id: id,
      name: name,
      slug: slug,
      active: active
      }
    ).then((response) => {
      alert("updated");
    }).catch((error) => {
      alert("not updated");
    });

  }
  destroyLanguage(e){
    if(e.target.disabled == false) {
      let self = this;
      let id = this.id.value;
      axios.delete('/api/languages/' + id).then(function (response) {
        self.setState({languages: response.data});
      }).catch(function (error) {
        console.log('error');
      });
    }
  }
  createForm()
  {
    let data = this.state.languages;
    let newLang = {name: 'langue', slug: 'ln', active: 0, id: -1};
    data.push(newLang);
    this.setState({languages: data});
  }
  renderFormButton(id)
  {
    if(id != -1){
        return(<button id={id} onClick={this.updateLanguage.bind(this)}>mettre à jour</button>);
    }else{
        return(<button id={id} onClick={this.storeLanguage.bind(this)}>créer</button>)
    }
  }
  renderFormDelete(id){
      return (<button id={'delete-'+id} onClick={this.destroyLanguage.bind(this)} disabled={id === (-1) ? true : false}>Supprimer</button>)
  }
  handleCheckBox(e){
    let thisId = e.target.getAttribute('data-id');
    let thisObject = this.state.languages.filter(item => item.id == thisId);
    let updatedObject = {
      name: thisObject[0].name,
      slug: thisObject[0].slug,
      id: thisObject[0].id,
      active: (thisObject[0].active == 0) ? 1 : 0,
      created_at: thisObject[0].created_at,
      updated_at: thisObject[0].updated_at
    };
    let newObject = this.state.languages.filter(item => item.id != thisId); // objects without this
    Object.assign(newObject, updatedObject);
    newObject.push(updatedObject);
    this.setState({languages: newObject});
  }
  handleLangInput(e){
    let thisId = e.target.getAttribute('data-id');
    let name = this.name.value;
    let slug = this.slug.value;
    alert(name);
    alert(slug);
    if(slug.length != 2){
      document.getElementById('language-form-slug-' + thisId).classList.add('warning');
    }else{
      document.getElementById('language-form-slug-' + thisId).classList.remove('warning');
    }
    if(name < 2 && name > 255){
      document.getElementById('language-form-name-' + thisId).classList.add('warning');
    }else{
      document.getElementById('language-form-name-' + thisId).classList.remove('warning');
    }
  }
  languagesList(){
    let items = this.state.languages.map((item) => {
      return <tr id={'language-form-'+item.id} className="active title" defaultValue={item.id} >
          <input type="hidden" name="id" defaultValue={item.id} ref={(id) => this.id = id} />
        <td>
          <input id={'language-form-name-'+item.id} className="u-full-width" data-id={item.id} type="text" name="name" defaultValue={item.name} ref={(name) => this.name = name}/>
        </td>
        <td>
          <input id={'language-form-slug-'+item.id} className="u-full-width" data-id={item.id} type="text" name="slug" defaultValue={item.slug} ref={(slug) => this.slug = slug} onChange={this.handleLangInput}/>
        </td>
        <td>
          <input id={'language-form-active-'+item.id} className="u-full-width" data-id={item.id} type="checkbox" name="active" defaultChecked={item.active} onChange={this.handleCheckBox.bind(this)} ref={(active) => this.active = active}/>
        </td>
        <td>
          {this.renderFormButton(item.id)}
        </td>
        <td>
          {this.renderFormDelete(item.id)}
        </td>
      </tr>
    });
    return items;
  }

  render() {
    return (
      <div className="container">
        <h1>Langues</h1>
        <table className="table twelve columns">
          <thead>
            <tr>
              <th>langue</th>
              <th>abrev.</th>
              <th>status</th>
              <th>sauvegarder</th>
              <th>supprimer</th>
            </tr>
          </thead>
          <tbody>
            {this.languagesList()}
            <button onClick={this.createForm.bind(this)}>+</button>
          </tbody>
          <tfoot>
          </tfoot>
        </table>
      </div>
    );
  }
}

