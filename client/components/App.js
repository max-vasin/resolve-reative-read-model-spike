import React from 'react'
import { renderRoutes } from 'react-router-config'

import Header from './Header'

const App = ({
  route,
  children,
  match: {
    params: { id }
  }
}) => (
  <div>
    <Header
      title="Chat Master v3.14"
      name="Chat Master"
      favicon="/favicon.ico"
      css={['/bootstrap.min.css', '/style.css']}
    />
    {renderRoutes(route.routes)}
    {children}
  </div>
)

export default App
