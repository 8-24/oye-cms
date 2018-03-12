import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default class Arguments extends Component {

  constructor(props){
    super(props);
    this.state = {args: [], currentLang: ''}
  }

  componentDidMount(){
    axios.get('/api/arguments/').then((response) => {
      this.setState({args: response.data});
    }).catch((error) => {
      console.log(error);
    })
  }

  componentWillReceiveProps(){

  }

  ListArguments()
  {

    let currentLang = this.props.lang;
    let args = this.state.args.map( (arg) =>
    {
        let contents = arg.contents.map((item) =>
        {
          if(item.lang_slug === this.props.lang){
            if(item.lang_slug == currentLang){
              let buttonCTA = null;
              buttonCTA = (item.button) ? <Link alt={item.CTA} to={'/' + this.props.lang + '/services/' + item.button_link}>{item.CTA}</Link> : null;
              return <div key={item.id} className="argument">
                <div dangerouslySetInnerHTML={{__html: item.content}}></div>
                {buttonCTA}
              </div>
            }else
            {

            }
          }
        });
        return contents;
    });
    return args;

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

