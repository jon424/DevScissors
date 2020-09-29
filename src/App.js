import React, { Component } from 'react';
import './App.css';
import HomepageLayout from './components/HomepageLayout';
import NavBar from './components/NavBar';
import Topic from './components/Topic';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import logo from './images/DevScissors Graphics.jpg';
import $ from 'jquery';

class App extends Component {

  componentDidMount(){
  var path = window.location.pathname;

  $(window).resize(function() {
    if (path === '/' || path === '/home.html') {
      $(".ui.inverted.vertical.center.aligned.segment").addClass("home-page");
    } else {
      $(".ui.inverted.vertical.center.aligned.segment").addClass("other-page");
    }
  });

    if (path === '/' || path === '/home.html') {
     $(".ui.inverted.vertical.center.aligned.segment").addClass("home-page");
}    else {
     $(".ui.inverted.vertical.center.aligned.segment").addClass("other-page");
  }
}

componentDidUpdate(){
  var path = window.location.pathname;
  if (path === '/' || path === '/home.html') {
    $(".ui.inverted.vertical.center.aligned.segment").addClass("home-page");
  } else {
    $(".ui.inverted.vertical.center.aligned.segment").addClass("other-page");
  }
}
//change the "topic" portion of /topic/:id to be a route to a particular Big Topic (React, JavaScript, HTML, etc...)
//test comment
  render(){
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
         <Route exact path='/' component={HomepageLayout} />  
         <Route exact path='/:topic' component={Topic} />  
         <Route component={NotFound} />


       
        </Switch>
        
      </Router>
    </div>
  );
 }
}

export default App;

  {/* <SearchableDropdown />
      <Card />
      <img src={logo} alt="DevScissors logo" />
      <MarkdownExample />  */}