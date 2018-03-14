import React, { Component } from 'react';
export default class Story extends Component {

  constructor(props){
    super(props);
    this.state = {stories: [], currentLang: ''}
  }

  componentDidMount(){
    axios.get('/api/story/').then((response) => {
      this.setState({stories: response.data});
    }).catch((error) => {
      alert(error);
    });
    setTimeout(() => document.getElementById('loader').classList.remove('active'), 1000);
  }

  renderStory(){
    let nodeData = this.state.stories.map( (item) =>{
      if(item.lang_slug == this.props.lang){
        return <div className="container">
          <div className="six columns" dangerouslySetInnerHTML={{__html: item.content}}></div>
          <div className="six columns">
            <img src={item.picture} alt=""/>
          </div>
        </div>
      }
    });
    return nodeData;
  }

  render() {
    return (
      <div id="story-wrapper" className="row">
        {this.renderStory()}
      </div>
    );
  }
}

