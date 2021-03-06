import React, { useState, useEffect } from 'react'
import { ListGroup, Badge, Row, Col, Button } from 'react-bootstrap'
import { useQuery } from 'resolve-react-hooks'
import { connect } from '../rrm'

const ChatList = () => {
  const [chats, setChats] = useState([])

  const fetchChats = useQuery(
    {
      name: 'chat-list-stub',
      resolver: 'rrm',
      args: {}
    },
    (err, result) => {
      if (err) {
        setChats([
          {
            id: 'ERROR',
            topic: 'Unable to fetch chat list',
            userCount: 666
          }
        ])
      } else {
        setChats(result.data ? result.data.chats : [])
        connect(result.data, 'chat-list', 'all', data => setChats(data ? data.chats : []))
      }
    }
  )

  useEffect(() => {
    fetchChats()
  }, [])

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
                <Button variant="danger" className="float-right">
                  Leave
                </Button>
                <Button variant="primary" className="float-right">
                  Join
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

export default ChatList
