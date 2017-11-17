import React, { Component } from 'react';
import logo from './cover_image.jpg';
class MyHeader extends Component {
  render() {
    return (
    <div id="header">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    );
  }
}

export default MyHeader;