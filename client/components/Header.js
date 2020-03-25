import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { useStaticResolver } from 'resolve-react-hooks'

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

  return (
    <div>
      <Helmet title={title} link={links} meta={[meta]} />
      <Navbar variant="dark" bg="primary" collapseOnSelect>
        <Navbar.Brand href="/">{name}</Navbar.Brand>
        <Navbar.Toggle />
      </Navbar>
    </div>
  )
}

export default Header
