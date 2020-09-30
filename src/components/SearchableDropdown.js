import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";


const snippets = [];

class SearchableDropdown extends Component {
  state = {
    textValue: "",
    topic: this.props.topic,
    data: [],
  };

  handleChange = (e, data) => {
//
  };

  async componentDidMount() {
    let topics = window.location.pathname;
    console.log("location: ", window.location.pathname);
    if (topics === '/'){
      const res = await fetch('http://localhost:5000/api/topics')
      
    const jsonData = await res.json();
    const info = jsonData;
    const data = Object.keys(info).map((key) => {
      return {
        topic: info[key].topic,
        card_title: info[key].card_title,
        card_subtitle: info[key].card_subtitle,
        card_gif: info[key].card_gif,
        card_link: info[key].card_link,
      };
    });
    this.setState({ data });
    console.log("state data (Searchable D-Down): ", this.state.data);

    let topicInfo = this.state.data;
    console.log("topicInfo: ", topicInfo);
    topicInfo.forEach((item) =>
      snippets.push({
        text: `${item.card_title} | ${item.card_subtitle}`,
        value: `${item.card_title} | ${item.card_subtitle}`,
        href: `${item.card_link}`,
      })
    );
    console.log("snipppetttz?!: ", snippets);
    if(!window.location.hash) {
      window.history.replaceState({}, "Title", '#loaded')
      console.log('window location pathname: ', window.location.pathname)
      window.location.reload();
      }    
  
  }
     else {
      
    const res = await fetch(`http://localhost:5000/api${topics}`);

    const jsonData = await res.json();
    const info = jsonData;
    const data = Object.keys(info).map((key) => {
      return {
        topic: info[key].topic,
        card_title: info[key].card_title,
        card_subtitle: info[key].card_subtitle,
        card_gif: info[key].card_gif,
        card_link: info[key].card_link,
      };
    });
    this.setState({ data });
    console.log("state data (Searchable D-Down): ", this.state.data);

    let topicInfo = this.state.data;
    console.log("topicInfo: ", topicInfo);
    topicInfo.forEach((item) =>
      snippets.push({
        text: `${item.card_title} | ${item.card_subtitle}`,
        value: `${item.card_title} | ${item.card_subtitle}`,
        href: `${item.card_link}`,
      })
    );
    console.log("snipppetttz?!: ", snippets);
    if(!window.location.hash) {
      window.history.replaceState({}, "Title", '#loaded')
      console.log('window location pathname: ', window.location.pathname)
      window.location.reload();
      } 

      //popstate event is triggered (back button)
      window.onpopstate = function(event) {
        if (document.location.href === 'http://localhost:3000/#loaded'){
          window.location.replace('http://localhost:3000');
          window.location.reload();
        }
      };
    }
  }

  render() {
    let topic = this.props.topic;
    console.log("topic in Searchable: ", topic);
    return (
      <Dropdown
        placeholder="Search Snippets"
        fluid
        search
        selection
        options={snippets}
        onChange={this.handleChange}
        style={{
          backgroundColor: "whitesmoke",
          border: "1px solid black",
          display: "block",
          margin: "auto",
          width: "50%",
          marginTop: "30px",
        }}
      />
    );
  }
}

export default SearchableDropdown;
