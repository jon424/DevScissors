import React from 'react';
import './App.css';
import MarkdownExample from './components/MarkdownExample';
import SearchableDropdown from './components/SearchableDropdown';
import Card from './components/Card';
import logo from './images/DevScissors Graphics.jpg';



function App() {
  return (
    <div className="App">
      {/* <SearchableDropdown /> */}
      {/* <Card /> */}
      {/* <img src={logo} alt="DevScissors logo" /> */}
      <MarkdownExample />
      {/* <MarkdownSample source={exampleOne} renderers={{code: CodeRenderer}} /> */}



    </div>
  );
}

export default App;
