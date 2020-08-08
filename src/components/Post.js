import React, { Component } from 'react'

import { Route, Link } from 'react-router-dom';
import CardExampleCard from './CardExampleCard';

import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import SearchableDropdown from './SearchableDropdown';
import './styles.css'
import logo from '../images/DevScissors Graphics.jpg';

/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import {
    Container,
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

//Place Individual Posts in here~~~~~~~~>
const HomepageHeading = ({ mobile }) => (
    <Container text>
         <h1 style={{
            marginTop: '20px'
        }}>React</h1>
        {/* <h3>This is the React snippets collection.</h3> */}
        <p className="postDescription" style={{
            // textAlign: 'justify',
            display: 'block',
            margin: 'auto',
            fontSize: '12pt'
        }}>This is a paragraph about the React Snippets Collection. It is quite a paragraph, and it is quite a collection.</p>
        <div className="metaPost">     
            <CardExampleCard />
            <CardExampleCard />
            <CardExampleCard />
            <CardExampleCard />
            <CardExampleCard />
            <CardExampleCard />
        </div>
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
       
        return (
            <Media greaterThan='mobile'>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >

                </Visibility>
                {children}
            </Media>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

//render post content~~~~~~~~~~~~~~~~>
class MobileContainer extends Component {
    state = {}

    handleSidebarHide = () => this.setState({ sidebarOpened: false })

    handleToggle = () => this.setState({ sidebarOpened: true })

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state

        return (
            <Sidebar.Pushable>
                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <HomepageHeading mobile />
                    {children}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
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

const HomepageLayout = () => (
    <ResponsiveContainer>
    </ResponsiveContainer>
)

export default HomepageLayout