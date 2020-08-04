import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import Container from './Container';

class Markdown extends React.PureComponent {
  render() {
    const exampleOne = `
    # Hello
    
    I am trying to work with React & markdown!
    
    \`Hello\`
    
    <blockquote>
        This blockquote will change based on the HTML settings above.
    </blockquote>
    
    \`\`\`js
    var React = require('react');
    var Markdown = require('react-markdown');
    
    React.render(
        <Markdown source="# Your markdown here" />,
        document.getElementById('content')
    );
    \`\`\`
    `
    return (
    //   <Container>
        <ReactMarkdown
          source={exampleOne}
          renderers={{
            code: CodeBlock,
          }}
        />
    //   </Container>
    );
  }
}

Markdown.propTypes = {
  value: PropTypes.string.isRequired,
};


export default Markdown;