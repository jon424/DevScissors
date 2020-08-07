import React from 'react'
import { Dropdown } from 'semantic-ui-react'

//'text' value is where it's at...

const countryOptions = [
  {  text: 'Afghanistan' },
  {text: 'Aland Islands' },
  {text: 'Albania' },
  {text: 'Algeria' },
  {text: 'American Samoa' },
  {text: 'Andorra' },
  {text: 'Angola' },
  {text: 'Anguilla' },
  {text: 'React Random Text random tExT rAnDoM tExT random tExT rAnDoM tExT ...' },
  {text: 'Argentina' },
  {text: 'Armenia' },
  {text: 'Aruba' },
  {text: 'Australia' },
  {text: 'This could be a topic' },
  {text: 'React' },
  {text: 'Toggling Colors in jQuery' },
  {text: 'Lorem Ipsum Something Issum Lorem Ipsum Something Issum Lorem Ipsum Something Issum Lorem Ipsum Something Issum Lorem Ipsum Something Issum Lorem Ipsum Something Issum Lorem Ipsum Something Issum Lorem Ipsum Something Issum' },
  {text: 'Bangladesh' },
  {text: 'Barbados' },
  {text: 'Belarus' },
  {text: 'Belgium' },
  {text: 'Belize' },
  {text: 'Benin' },
]

const SearchableDropdown = () => (
  <Dropdown
    placeholder='Search Snippets'
    fluid
    search
    selection
    options={countryOptions}
    style={{
      backgroundColor: 'whitesmoke',
      border: '1px solid black',
      display: 'block',
      margin: 'auto',
      width: '50%',
      marginTop: '30px'
    }}
  />
)

export default SearchableDropdown