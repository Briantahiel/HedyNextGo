import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  margin: auto;
  max-width: 420px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Card = ({ children }) => <CardWrapper>{children}</CardWrapper>

export default Card
