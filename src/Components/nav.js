import React, { Component } from 'react';

class MyNav extends Component {
  render() {
    return (
    	<div id="sidebar" className="col">
        <h2>Navigate Through</h2>
        <ul>
          <li><a href="#first">First Post</a></li>
          <li><a href="#second">Second Post</a></li>
          <li><a href="#third">Third Post</a></li>
        </ul>
      </div>
    );
  }
}

export default MyNav;