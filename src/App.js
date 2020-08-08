import React from 'react';
import './App.css';
import MarkdownExample from './components/MarkdownExample';
import SearchableDropdown from './components/SearchableDropdown';
import HomepageLayout from './components/HomepageLayout';

import Post, { ReactMarkdown } from './components/Post'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './images/DevScissors Graphics.jpg';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={HomepageLayout}/>
          <Route exact path='/post/:id' component={Post}/>
     
     {/* NOT FOUND HANDLER */}
     {/* <Route component={NotFound} /> */}

      </Switch>
</Router>
    </div>
  );
}

export default App;

  {/* <SearchableDropdown />
      <Card />
      <img src={logo} alt="DevScissors logo" />
      <MarkdownExample />  */}