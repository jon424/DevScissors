import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Route, Link } from 'react-router-dom';

const CardExampleCard = () => (
    <Link >
        <Card>
            <Image src='https://media.giphy.com/media/IwTWTsUzmIicM/giphy.gif' wrapped ui={false} />
            <Card.Content>
                <Card.Header>Jest</Card.Header>
                <Card.Meta>
                    {/* <span className='date'>Joined in 2015</span> */}
                </Card.Meta>
                <Card.Description>
                    Jest snippets for front-end testing.
      </Card.Description>
            </Card.Content>
            {/* <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content> */}
        </Card>
    </Link>
)

export default CardExampleCard