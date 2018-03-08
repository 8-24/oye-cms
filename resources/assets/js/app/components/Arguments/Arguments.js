import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default class Arguments extends Component {

  constructor(props){
    super(props);
    this.state = {arguments: [], currentLang: ''}
  }

  componentDidMount(){
    axios.get('/api/arguments/').then((response) => {
      this.setState({arguments: response.data});
    }).catch((error) => {
      console.log(error);
    })
  }

  componentWillReceiveProps(){

  }

  ListArguments(){
    let items = this.state.arguments.map((item) => {
      let buttonCTA = null;
      buttonCTA = (item.button) ? <Link alt={item.CTA} to={'/' + this.props.lang + '/services/' + item.button_link}>{item.CTA}</Link> : null;
      return <div key={item.id} className="argument">
        <div dangerouslySetInnerHTML={{__html: item.content}}></div>
        {buttonCTA}
      </div>
    });
    return items;
  }

  render() {
    return (
      <div  className="container">
        <div id="arguments-list">
          {this.ListArguments()}
        </div>
      </div>
    );
  }
}

