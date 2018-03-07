import React, { Component } from 'react';
import ServicesLinks from './ServicesLinks';
export default class Service extends Component {

  constructor(props){
    super(props);
    this.state = {service: {}, currentLang: ''}
  }

  componentDidMount(){
    let currentLang = this.props.match.params.lang;
    let slug = this.props.match.params.slug;
    axios.get('/api/services/'+slug).then((response) => {
      this.setState({service: response.data, currentLang: currentLang});
    }).catch((error) => {
      alert(error);
    });
  }

  componentWillReceiveProps(){
    let currentLang = this.props.match.params.lang;
    let slug = this.props.match.params.slug;
    axios.get('/api/services/'+slug).then((response) => {
      console.log(response.data);
      this.setState({service: response.data, currentLang: currentLang});
    }).catch((error) => {
      alert(error);
    });
  }
  render() {
    return (
      <div  className="container">
        <h1>{this.state.service.name}</h1>
        <p>{this.state.service.content}</p>
        <img src={this.state.service.illustration} alt=""/>
        <div>
          <ServicesLinks display={'mini'} lang={this.props.match.params.lang} hiddenHimself={true} currentService={this.props.match.params.slug} />
        </div>
      </div>
    );
  }
}

