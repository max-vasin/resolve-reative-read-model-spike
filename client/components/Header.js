import React, { useState } from 'react'
import { Navbar, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { useStaticResolver, useCommandBuilder } from 'resolve-react-hooks'

const Header = ({ title, name, css, favicon }) => {
  const resolveStatic = useStaticResolver()
  const stylesheetLinks = css.map(href => ({
    rel: 'stylesheet',
    href: resolveStatic(href)
  }))
  const faviconLink = {
    rel: 'icon',
    type: 'image/png',
    href: resolveStatic(favicon)
  }
  const links = [...stylesheetLinks, faviconLink]
  const meta = {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1'
  }
  const [chatId, setChatId] = useState('')

  const openChat = useCommandBuilder(
    ({ id }) => ({
      type: 'open',
      aggregateId: id,
      aggregateName: 'chat',
      payload: {}
    }),
    error => {
      if (error) {
        console.error(error)
      }
      setChatId('')
    }
  )
  const chatIdChanged = e => {
    setChatId(e.target.value)
  }

  return (
    <div>
      <Helmet title={title} link={links} meta={[meta]} />
      <Navbar variant="dark" bg="primary" collapseOnSelect>
        <Navbar.Brand href="/">{name}</Navbar.Brand>
        <Navbar.Toggle />
        <Container>
          <Row>
            <Col>
              <Form inline className="float-right">
                <FormControl
                  type="text"
                  placeholder="#identifier"
                  className="mr-sm-2"
                  onChange={chatIdChanged}
                />
                <Button variant="info" onClick={() => openChat({ id: chatId })}>
                  Open Chat
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
