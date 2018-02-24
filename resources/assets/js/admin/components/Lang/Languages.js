import React, { Component } from 'react';
const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
];
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

        this.setState({languages: items})
      }).catch(error => {

    });
  }

  languagesList(){
    let items = this.state.languages.map((item) => {
      return (<span key={item.id}>{item.name}</span>)
    });

    return items;
  }

  render() {
    return (
      <div className="container">
        <h1>Langues</h1>
        {this.languagesList}
      </div>
    );
  }
}

