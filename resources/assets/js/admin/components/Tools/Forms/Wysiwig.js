import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';
export default class Wysiwig extends Component {
  constructor(props){
    super(props);
    this.state = {}
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }
  componentDidMount(){}

  handleEditorChange(e)
  {
    let data = e.target.getContent();
    console.log('Content was updated:', data);
    this.props.GetContent(data);
  }

  render() {
    return (
      <div className="">
        <h1>Ajouter une page</h1>
        <div id="tinymce-wrap">
          <Editor ref='wysiwig'
            onChange={this.handleEditorChange}
            apiKey="qtri2f49tzmlptff16epgr0rrs2f3oct0fjtrszg64hembeo"
            initialValue="Hello World"
            init={{
              path_absolute: "/",
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
                var y = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;

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
            }}

          />

        </div>

      </div>
    );
  }
}

