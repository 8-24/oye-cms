import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Wysiwig from '../Tools/Forms/Wysiwig';
export default class AddPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: 'Hello World'
    }
  }
  componentDidMount(){

  }
  handleWysiwig(value){
    this.setState({content: value});
  }
  render() {
    return (
      <div className="container">
        <h1>Ajouter une page</h1>
        <div id="tinymce-wrap">
          <form>
            <Wysiwig GetContent={this.handleWysiwig.bind(this)} />
          </form>
        </div>

      </div>
    );
  }
}

