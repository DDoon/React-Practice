import React from 'react'
import styled from 'styled-components'

const CardStyle = styled.div`
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 2rem;

  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
`

const Card = (props) => {
  return <CardStyle>{props.children}</CardStyle>
}

export default Card
