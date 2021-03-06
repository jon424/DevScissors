/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

//I'm thinking could have e-mail contact link, buy me a coffee link lol 

import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import SearchableDropdown from './SearchableDropdown';
import './styles.css'
import React, { Component } from 'react'
import {
    Button,
    Container,
    Icon,
    Menu,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
})

const HomepageHeading = ({ mobile }) => (
    <Container text>
        <h1>DevSc✂ssors</h1>
    </Container>
)

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

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
                        style={{ minHeight: 0, padding: '1em 0em' }}
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>
                                <Menu.Item as='a' href='/'>
                                    Home
                </Menu.Item>
                <Menu.Item as='a' href='/#about'>About</Menu.Item>
                                <Menu.Item as='a' href='mailto:jonathanjackson424@gmail.com'>Contact</Menu.Item>
                                <Menu.Item as='a' href='https://github.com/jon424'>GitHub Profile</Menu.Item>
                                {/* <Menu.Item position='right'>
                                    <Button as='a' inverted={!fixed}>
                                        Log in
                  </Button>
                                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                                        Sign Up
                  </Button>
                                </Menu.Item> */}
                            </Container>
                        </Menu>

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
    constructor(props) {
        super(props);
        this.state = {
            height: 10
        }
    }

    handleSidebarHide = () => this.setState({
        sidebarOpened: false,
        height: 10
    })

    handleToggle = () => this.setState({
        sidebarOpened: true,
        height: 241
    })

    render() {
        const { sidebarOpened } = this.state

        return (
            <Media as={Sidebar.Pushable} at='mobile'>
                <Sidebar.Pushable>
                    <Sidebar
                        as={Menu}
                        animation='push'
                        inverted
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={sidebarOpened}
                        direction='top'


                    >
                        <Menu.Item as='a' href='/' role='navbar'>
                            Home
            </Menu.Item>
                        <Menu.Item as='a' href='/#about'>About</Menu.Item>
                        <Menu.Item as='a' href='mailto:jonathanjackson424@gmail.com'>Contact</Menu.Item>
                        <Menu.Item as='a' href='https://github.com/jon424'>GitHub Profile</Menu.Item>
                        {/* <Menu.Item as='a'>Log in</Menu.Item>
                        <Menu.Item as='a'>Sign Up</Menu.Item> */}
                    </Sidebar>

                    <Sidebar.Pusher dimmed={sidebarOpened} >
                        <Segment
                            inverted
                            fixed
                            textAlign='center'
                            style={{
                                minHeight: this.state.height,
                                padding: '1em 0em'
                            }}
                            vertical
                        >
                            <Container>
                                <Menu inverted pointing secondary size='large'>
                                    <Menu.Item onClick={this.handleToggle}>
                                        <Icon name='sidebar' />
                                    </Menu.Item>
                                    <Menu.Item position='right'>
                                        <Button as='a' inverted>
                                            Log in
                    </Button>
                                        <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                                            Sign Up
                    </Button>
                                    </Menu.Item>
                                </Menu>
                            </Container>
                            <HomepageHeading mobile />
                        </Segment>
                        {/* {children} */}
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
    <MediaContextProvider>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

/*SearchableDropdown for the metaPost view*/
const NavBar = () => (
    <ResponsiveContainer>
    </ResponsiveContainer>
)

export default NavBar;