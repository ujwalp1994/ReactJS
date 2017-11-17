import React, { Component } from 'react';
import './Style/style.css';
import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import MyHeader from './Components/header';
import MyContent from './Components/content';
import MyNav from './Components/nav';
import MyFooter from './Components/footer';

class App extends Component {
  render() {
    return (
<Router>
  <div id="pagewrap" className="container">
    <MyHeader/>
  
    <MyContent/>

    <MyNav/>
    
    <MyFooter/>  
  </div>
</Router>
    );
  }
}

export default App;
