import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Post from "./Post";
import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import SearchableDropdown from "./SearchableDropdown";
import "./styles.css";
import logo from "../images/DevScissors Graphics.jpg";

/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import { Container, Sidebar, Visibility } from "semantic-ui-react";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

//Place Individual Posts in here... <SearchableDropdown /> can have prop on it to display
//"search "VARIABLE" snippets" React, etc...
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~>

class HomepageHeading extends Component {
  state = {
    topic: '',
  };

  componentDidMount() {
      let URLPath = window.location.pathname.toLowerCase();
      if (URLPath === '/html-css') {
          this.setState({
              topic: 'HTML / CSS',
          })
      } else if (URLPath === '/react') {
          this.setState({
              topic: 'React'
          })
      } else if (URLPath === '/javascript') {
          this.setState({
              topic: 'JavaScript'
          })
      } else if (URLPath === '/jquery') {
          this.setState({
              topic: 'jQuery'
          })
      } else if (URLPath === '/postgresql') {
          this.setState({
              topic: 'PostgreSQL'
          })
      }
  }

  render() {
    return (
      <Container text>
        <h1
          style={{
            marginTop: "155px",
          }}
        >
          {this.state.topic}
        </h1>
        <p
          className="postDescription"
          style={{
            // textAlign: 'justify',
            display: "block",
            margin: "auto",
            fontSize: "12pt",
          }}
        >
          This is a paragraph about the {this.state.topic} Snippets Collection.
          It is quite a paragraph, and it is quite a collection.
        </p>
        <SearchableDropdown topic={this.state.topic} name={this.state.name}/>
        <div className="metaPost">
          <Post />
        </div>
      </Container>
    );
  }
}

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    return <div></div>;
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

//render post content~~~~~~~~~~~~~~~~>
class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });
  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;

    return (
      <div>
        <HomepageHeading mobile />
        {children}
      </div>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const HomepageLayout = () => <ResponsiveContainer></ResponsiveContainer>;

export default HomepageLayout;
