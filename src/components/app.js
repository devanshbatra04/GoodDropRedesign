import React, { Component } from 'react';
import Header from './header';
import Estimate from './estimate';
export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Estimate />
      </div>
    );
  }
}
