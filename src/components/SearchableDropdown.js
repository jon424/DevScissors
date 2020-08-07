import React from 'react'
import { Dropdown } from 'semantic-ui-react'

//'text' value is where it's at...

const countryOptions = [
  {  text: 'Afghanistan' },
  { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
  { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
  { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
  { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
  { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
  { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
  { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
  { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
  { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
  { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
  { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
  { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
  { key: 'at', value: 'at', flag: 'at', text: 'This could be a topic' },
  { key: 'az', value: 'az', flag: 'az', text: 'React' },
  { key: 'bs', value: 'bs', flag: 'bs', text: 'Toggling Colors in jQuery' },
  { key: 'bh', value: 'bh', flag: 'bh', text: 'Lorem Ipsum Something Issum Lorem Ipsum Something Issum Lorem Ipsum Something Issum Lorem Ipsum Something Issum Lorem Ipsum Something Issum Lorem Ipsum Something Issum Lorem Ipsum Something Issum Lorem Ipsum Something Issum' },
  { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
  { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
  { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
  { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
  { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
  {text: 'Benin' },
]

const SearchableDropdown = () => (
  <Dropdown
    placeholder='Search Snippets'
    fluid
    search
    selection
    options={countryOptions}
    style={{backgroundColor: 'gainsboro',
  border: '1px solid black'}}
  />
)

export default SearchableDropdown