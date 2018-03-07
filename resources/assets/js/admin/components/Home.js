import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Languages extends Component {
  constructor(props){
    super(props);
    
  }
  componentDidMount(){
    axios.get('/api/homes').then((response) => {

    }).catch((error) => {

    });
  }


  handleForm(){
    alert("ok");
  }

  render() {
    return (
      <div className="container">
        <h1>Admin Home</h1>
        <form action="">
          <label htmlFor="">Mantra</label>
          <textarea className="u-full-width" name="mantra" id="" cols="30" rows="5"></textarea>
          <label htmlFor="">Description</label>
          <textarea className="u-full-width" name="description" id="" cols="30" rows="10"></textarea>
          <label htmlFor="keywords">mots clés</label>
          <input className="u-full-width" type="text" name="keywords"/>
          <label htmlFor="thumbnail">image</label>
          <div className="input-group">
           <span className="input-group-btn">
             <a id="lfm" data-input="thumbnail" data-preview="holder" className="btn btn-primary">
               <i className="fa fa-picture-o"></i> Choose
             </a>
           </span>
            <input id="thumbnail" className="form-control" type="text" name="filepath" />
          </div>
          <img id="holder"  />
          <button onClick={this.handleForm}>Mettre à jour</button>
        </form>
      </div>
    );
  }
}

