import React, { Fragment, useState, useEffect } from "react";
import Topic from './Topic';
import { Card, Icon, Image } from "semantic-ui-react";
import { Route, Link } from "react-router-dom";
import gifImg from "./api-hooks-example.gif";

function Post({ match }) {
  console.log('match: ', match)
  const [card, setCards] = useState([]);

  async function getCards() {
    let topics = window.location.pathname;
    console.log('location: ', window.location.pathname)
    
      const res = await fetch(`http://localhost:5000/api${topics}`);

      const topicArray = await res.json();

      setCards(topicArray)
      console.log("res: ", topicArray)
  }

  useEffect(() => {
      getCards()

  }, []);

  console.log("card: ", card)

  return (
    <Fragment>
      {card.map((item) => (
        <Link to={item.card_link}>
          <Card>
            <Image src={item.card_gif} wrapped ui={false} />
            <Card.Content>
      <Card.Header>{item.card_title}</Card.Header>
              <Card.Meta>
                {/* <span className='date'>Joined in 2015</span> */}
              </Card.Meta>
              <Card.Description>
                {item.card_subtitle}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                {/* <Icon name='user' /> */}
                {/* 22 Snippets */}
              </a>
            </Card.Content>
          </Card>
        </Link>
      ))}
    </Fragment>
  );
}



export default Post;
