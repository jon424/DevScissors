/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

//I'm thinking could have e-mail contact link, buy me a coffee link lol 

import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import SearchableDropdown from './SearchableDropdown';
import './styles.css'
// import logo from '../images/DevScissors Graphics.jpg';
import React, { Component } from 'react';
import Post from './Post'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Topic from './Topic';
import Logo from '../components/DevScissors_logo.jpg';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'


// componentWillMount(){
//   const domain = '/';
//   if (window.location.href.indexOf('/') > 0) require('./homestyles.css')
//   else require ('./styles.css')
// }

// const refreshPage = () => {
//   window.parent.location = window.parent.location.href;
// }

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

const HomepageHeading = ({ mobile }) => (

  <Container text >
    <Header
      as='h1'
      content='DevSc✂ssors'
      inverted
      style={{
        // position: 'relative !important',
        // left: 'none !important',
        // top: 'none !important',
        // width: 'none !important',
        // zIndex: '0 !important',
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <SearchableDropdown />
    <Header
      as='h2'
      content='Choose a topic for code snippets:'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
 
    <Link to='/html-css'  ><Button primary size='huge' style={{
        margin: '10px 10px 10px 10px', 
        backgroundColor: 'firebrick',
        boxShadow: '3px 5px #080808',
        }}>
      HTML/CSS
      <Icon name='right arrow' />
    </Button></Link>
    <Link to='/javascript'><Button primary size='huge' style={{
        margin: '10px 10px 10px 10px', 
        backgroundColor: 'rebeccapurple',
        boxShadow: '3px 5px #080808'}}>
      JavaScript
      <Icon name='right arrow' />
    </Button></Link>
    <Link to='/react'><Button primary size='huge'style={{
        margin: '10px 10px 10px 10px', 
        backgroundColor: 'green',
        boxShadow: '3px 5px #080808'}}>
      React
      <Icon name='right arrow' />
    </Button></Link>
    <Link to='/node'><Button primary size='huge'style={{
        margin: '10px 10px 10px 10px', 
        backgroundColor: 'grey',
        boxShadow: '3px 5px #080808'}}>
      Node.js
      <Icon name='right arrow' />
    </Button></Link>
    <Link to='/jquery'><Button primary size='huge'style={{
        margin: '10px 10px 10px 10px', 
        backgroundColor: 'orange',
        boxShadow: '3px 5px #080808'}}>
      jQuery
      <Icon name='right arrow' />
    </Button></Link>
    <Link to='/postgresql'><Button primary size='huge'style={{
        margin: '10px 10px 10px 10px', 
        backgroundColor: 'firebrick',
        boxShadow: '3px 5px #080808'}}>
      PostgreSQL
      <Icon name='right arrow' />
    </Button></Link>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
 

  state = {}


  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  refreshPage = () => {
    window.parent.location = window.parent.location.href;
  }


  render() {
   
   
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}


  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
      <Sidebar.Pushable>
       

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <HomepageHeading mobile />
          </Segment>
          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    {/* <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              This is a heading
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              This is a paragraph below the heading lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              This is another heading like the previous one
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Oh yeah, and another paragraph right here. Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Huge Button</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment> */}

    {/* <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "What a Website"
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "Quote from someone."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='/images/avatar/large/nan.jpg' />
              <b>Name</b> CEO at Somewhere Inc.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment> */}

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header id="about" as='h3' style={{ fontSize: '2em' }}>
          Code Snippets For You!
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          DevScissors is a website devoted to providing code snippets that represent common patterns in software/web development. Choose a language/framework above and see what is available. Created and maintained by Jon Jackson. 
        </p>
        <Button onClick={() => {window.location.href = 'https://github.com/jon424'}} as='a' size='large'>
          Follow Jon on GitHub!
        </Button>

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Another Section</a>
        </Divider>

        <Header as='h3' style={{ fontSize: '2em' }}>
          Do you have some code snippets that you would like to submit?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          If you have some snippets written in clear, easy-to-follow README format, contact Jon to post them on DevScissors.
        </p>
        <a href="mailto:jonathanjackson424@gmail.com"><Button as='a' size='large'>
          Email Jon!
        </Button></a>
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image as='a' href='/' src={Logo} />
              {/* <Header inverted as='h4' content='About' /> */}
              {/* <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Something</List.Item>
                <List.Item as='a'>Something Else</List.Item>
              </List> */}
            </Grid.Column>
            <Grid.Column width={3}>
              {/* <Header inverted as='h4' content='Services' /> */}
              <List link inverted>
                <List.Item as='a' href='/#about'>About</List.Item>
                <List.Item as='a' href='mailto:jonathanjackson424@gmail.com'>Contact</List.Item>
                <List.Item as='a' href='https://github.com/jon424'>GitHub Profile</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                DevSc✂ssors
              </Header>
              <p>
                Site developed and maintained by Jon Jackson. 
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout