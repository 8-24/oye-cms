import React, { Component } from 'react';
import Nav from '../Nav/Nav';
export default class DefaultLayout extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount()
  {
    let lang = window.navigator.language;
    let langAbrev = lang.split('-');
    let abreviation = langAbrev[0];
    this.props.history.push('/'+abreviation);
  }
  render() {
    const {main, nav} = this.props;
    return (
      <div>
        default layout
        <div>
        </div>
        <div>
          <main>
            <div className="Main">
              {main}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

