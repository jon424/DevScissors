import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

//'text' value is where it's at...

const snippets = [
  // {text: 'Afghanistan' }
]

// console.log('topic from inside the d-down: ', this.props.topic)

class SearchableDropdown extends Component {


      state = {
      textValue: '',
      topic: this.props.topic,
      data: []
    }


handleChange = (e, data) => {
  console.log('data value from handleChange: ', data.value)
 
  window.location.href = this.data.value;
  console.log('thisstatedatacard_link: ', this.state.data.card_link)
}


  async componentDidMount(props) {
    let topics = window.location.pathname;
    console.log('location: ', window.location.pathname)
    const res = await fetch(`http://localhost:5000/api${topics}`);
    const jsonData = await res.json();
    const info = jsonData;
    const data = Object.keys(info).map(key => {

      return {
        topic: info[key].topic,
        card_title: info[key].card_title,
        card_subtitle: info[key].card_subtitle,
        card_gif: info[key].card_gif,
        card_link: info[key].card_link
      }
    });
    this.setState({ data })
    console.log('state data (Searchable D-Down): ', this.state.data) //getting here! :-)

    let topicInfo = this.state.data;
    console.log('topicInfo: ', topicInfo)
    topicInfo.forEach(item => snippets.push({
      text: `${item.card_title} | ${item.card_subtitle}`,
      value: `${item.card_title} | ${item.card_subtitle}`,
      href: `${item.card_link}`
    }));
    console.log('snipppetttz?!: ', snippets)
  }

// const SearchableDropdown = () => (
  render(){
    let topic = this.props.topic;
    console.log("topic in Searchable: ", topic)
    return(
  <Dropdown
    placeholder='Search Snippets'
    fluid
    search
    selection
    options={snippets}
    onChange={this.handleChange}
    style={{
      backgroundColor: 'whitesmoke',
      border: '1px solid black',
      display: 'block',
      margin: 'auto',
      width: '50%',
      marginTop: '30px'
    }}
  />
    )}

// )
  }

export default SearchableDropdown