import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';

var editor_config = {
  path_absolute : "/",
  selector: "textarea.my-editor",
  plugins: [
    "advlist autolink lists link image charmap print preview hr anchor pagebreak",
    "searchreplace wordcount visualblocks visualchars code fullscreen",
    "insertdatetime media nonbreaking save table contextmenu directionality",
    "emoticons template paste textcolor colorpicker textpattern"
  ],
  toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media",
  relative_urls: false,
  file_browser_callback : function(field_name, url, type, win) {
    var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
    var y = window.innerHeight|| document.documentElement.clientHeight|| document.getElementsByTagName('body')[0].clientHeight;

    var cmsURL = editor_config.path_absolute + 'laravel-filemanager?field_name=' + field_name;
    if (type == 'image') {
      cmsURL = cmsURL + "&type=Images";
    } else {
      cmsURL = cmsURL + "&type=Files";
    }

    tinyMCE.activeEditor.windowManager.open({
      file : cmsURL,
      title : 'Filemanager',
      width : x * 0.8,
      height : y * 0.8,
      resizable : "yes",
      close_previous : "no"
    });
  }
};


export default class Languages extends Component {
  constructor(props){
    super(props);
    this.state = {
      languages: []
    }

  }

  componentDidMount(){
    axios.get('/api/languages')
      .then(response => {
        console.log(response.data);
        this.setState({languages: response.data})
      }).catch(error => {

    });
  }

  languagesList(){
    let items = this.state.languages.map((item) => {
      return <tr class="active title" key={item.id}><td>{item.name}</td><td>{item.slug}</td><td>{item.active}</td></tr>
    });
    return items;
  }
  render() {
    var editor_config = {
      path_absolute : "/",
      selector: "textarea.my-editor",
      plugins: [
        "advlist autolink lists link image charmap print preview hr anchor pagebreak",
        "searchreplace wordcount visualblocks visualchars code fullscreen",
        "insertdatetime media nonbreaking save table contextmenu directionality",
        "emoticons template paste textcolor colorpicker textpattern"
      ],
      toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media",
      relative_urls: false,
      file_browser_callback : function(field_name, url, type, win) {
        var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
        var y = window.innerHeight|| document.documentElement.clientHeight|| document.getElementsByTagName('body')[0].clientHeight;

        var cmsURL = editor_config.path_absolute + 'laravel-filemanager?field_name=' + field_name;
        if (type == 'image') {
          cmsURL = cmsURL + "&type=Images";
        } else {
          cmsURL = cmsURL + "&type=Files";
        }

        tinyMCE.activeEditor.windowManager.open({
          file : cmsURL,
          title : 'Filemanager',
          width : x * 0.8,
          height : y * 0.8,
          resizable : "yes",
          close_previous : "no"
        });
      }
    };

    return (
      <div className="">
        <h1>Langues</h1>
        <table class="ui celled table">
          <thead>
            <tr>
              <th>langue</th>
              <th>abrev.</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {this.languagesList()}
          </tbody>
          <tfoot>
          </tfoot>
        </table>
        <Editor
          apiKey="qtri2f49tzmlptff16epgr0rrs2f3oct0fjtrszg64hembeo"
          initialValue="<p>This is the initial content of the editor</p>"
          init={
            editor_config
          }
        />
      </div>
    );
  }
}

