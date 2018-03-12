import React, { Component } from 'react';
export default class Contact extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount()
  {
  }
  render() {
    return (
      <div>
        <div>
          {this.props.nav}
        </div>
        <div>
          <main>
            {this.props.ContentLayout}
          </main>
        </div>
      </div>
    );
  }
}

