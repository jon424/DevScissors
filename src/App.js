import React from 'react';
import './App.css';
import Markdown from './components/Markdown';
import SearchableDropdown from './components/SearchableDropdown';
import Card from './components/Card';
import logo from './images/DevScissors Graphics.jpg';

function App() {
  return (
    <div className="App">
      {/* <SearchableDropdown /> */}
      {/* <Card /> */}
      {/* <img src={logo} alt="DevScissors logo" /> */}
      {/* <MarkdownSample /> */}
      {/* <MarkdownSample source={exampleOne} renderers={{code: CodeRenderer}} /> */}
      <Markdown />
     
      
    </div>
  );
}

export default App;
