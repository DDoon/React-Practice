import React from 'react'
import styled from 'styled-components'

import Navigation from './Navigation'

const MainHeader = (props) => {
  return (
    <HeaderStyle>
      <header>
        <h1>A Typical Page</h1>
        <Navigation
          isLoggedIn={props.isAuthenticated}
          onLogout={props.onLogout}
        />
      </header>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #741188;
  padding: 0 2rem;

  h1 {
    color: white;
  }
`

export default MainHeader
