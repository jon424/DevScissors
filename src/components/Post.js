import React, { Fragment, useState, useEffect } from "react";
import Topic from "./Topic";
import SearchableDropdown from "./SearchableDropdown";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import { Route, Link } from "react-router-dom";
import gifImg from "./api-hooks-example.gif";

function Post({ match, props }) {
  console.log("match: ", match);
  const [card, setCards] = useState([]);

  async function getCards() {
    let topics = window.location.pathname;
    console.log("location: ", window.location.pathname);

    const res = await fetch(`http://localhost:5000/api${topics}`);

    const topicArray = await res.json();

    setCards(topicArray);
    console.log("res: ", topicArray);
  }

  useEffect(() => {
    getCards();
  }, []);

  console.log("card: ", card);

  //<div>{item.card_title} | {item.card_subtitle}</div>

  if (card.length >= 1) {
    return (
      <Fragment>
        {card.map((item) => (
          <a href={item.card_link}>
            <Card>
              <Image src={item.card_gif} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{item.card_title}</Card.Header>
                <Card.Meta>
                  {/* <span className='date'>Joined in 2015</span> */}
                </Card.Meta>
                <Card.Description>{item.card_subtitle}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  {/* <Icon name='user' /> */}
                  {/* 22 Snippets */}
                </a>
              </Card.Content>
            </Card>
          </a>
        ))}
      </Fragment>
    );
  } else if (card.length <= 0) {
    return (
      <div className="no-snips">
        <div>Looks like we don't have any snippets for this topic ... yet!</div>
        <div>
          <Button
            onClick={() => (window.location.pathname = "/")}
            primary
            size="huge"
            style={{
              margin: "10px 10px 10px 10px",
              backgroundColor: "green",
              boxShadow: "3px 5px #080808",
            }}
          >
            Home
            <Icon name="right arrow" />
          </Button>
        </div>
      </div>
    );
  }
}

export default Post;
