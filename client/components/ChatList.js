import React, { useState, useCallback } from 'react'
import { ListGroup, Badge, Row, Col, Button } from 'react-bootstrap'

const ChatList = () => {
  const [chats, setChats] = useState([
    {
      id: '#chat-a',
      topic: 'Funny people meeting',
      userCount: 10
    },
    {
      id: '#chat-b',
      topic: 'Join us and prosper',
      userCount: 12
    }
  ])

  return (
    <div>
      <ListGroup>
        {chats.map(({ id, topic, userCount }) => (
          <ListGroup.Item key={id}>
            <Row>
              <Col>
                {id}
                <Badge variant="primary" pill={true}>
                  {userCount}
                </Badge>
              </Col>
              <Col xs={6}>{topic}</Col>
              <Col>
                <Button className="float-right">Join</Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

export default ChatList
