import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default class ServicesLinks extends Component {
  constructor(props){
    super(props);
    this.state = {services: [], display: '', currentLang: {}}
  }
  componentDidMount()
  {
    axios.get('/api/services/').then((response) => {
      this.setState({services: response.data});
    }).catch((error) => {
      alert(error);
    });
  }
  ListFull(){
    let currentLang = this.props.lang;
    let servicesList = this.state.services.map((service) =>
    {
      let content = service.contents.map((item) =>
      {
        if(currentLang === item.lang_slug){
          return <div className="services-preview three columns" key={item.id}>
            <div><img className="service-thumbnail" src={item.thumbnail} alt={item.name}/></div>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <Link className="service-page-link" to={'/'+currentLang+'/services/'+item.slug}>+</Link>
          </div>
        }
      });
      return content;

    });

    return servicesList;
  }

  ListMini(){
    let currentLang = this.props.lang;

    let servicesList = this.state.services.map((service) =>
    {
      let content = service.contents.map((item) => {
        if (this.props.hiddenHimself === true) {
          let mySelfSlug = this.props.currentService;
          if (mySelfSlug != item.slug && currentLang === item.lang_slug) {
            return <div className="services-preview three columns" key={item.id}>
              <h4>{item.name}</h4>
              <div><img className="service-thumbnail" src={item.thumbnail} alt=""/></div>
              <Link className="u-full-width service-page-link"
                    to={'/' + currentLang + '/services/' + item.slug}>+</Link>
            </div>
          } else {
          }
        } else {
          let mySelfSlug = this.props.currentService;
          if (mySelfSlug != item.slug && currentLang === item.lang_slug) {
            return <div className="services-preview three columns" key={item.id}>
              <h4>{item.name}</h4>
              <div><img className="service-thumbnail" src={item.thumbnail} alt=""/></div>
              <Link className="u-full-width service-page-link"
                    to={'/' + currentLang + '/services/' + item.slug}>+</Link>
            </div>
          }
        }
      });
      return content;
    });
    return servicesList;
  }

  render() {
    return (
        <div id="services-list" className="container">
          <div className="row">
            <div className="services-links twelve columns">
            {(this.props.display == 'full') ? this.ListFull() : this.ListMini() }
          </div>
          </div>
        </div>
    );
  }
}

ServicesLinks.propTypes = {
  hiddenHimself: React.PropTypes.bool.isRequired,
  display: React.PropTypes.string.isRequired,
};

