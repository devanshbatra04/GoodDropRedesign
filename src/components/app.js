import React, { Component } from 'react';
import Header from './header';
import Estimate from './estimate';
import Main from './main';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Estimate />
          <Main/>
          <Footer/>
      </div>
    );
  }
}
