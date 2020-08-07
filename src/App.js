import React from 'react';
import './App.css';
import MarkdownExample from './components/MarkdownExample';
import SearchableDropdown from './components/SearchableDropdown';
import HomepageLayout from './components/HomepageLayout';
import Card from './components/Card';
import logo from './images/DevScissors Graphics.jpg';



function App() {
  return (
    <div className="App">
      <HomepageLayout />
      {/* <SearchableDropdown />
      <Card />
      <img src={logo} alt="DevScissors logo" />
      <MarkdownExample />  */}

    </div>
  );
}

export default App;
