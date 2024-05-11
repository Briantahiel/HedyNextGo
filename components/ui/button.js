import React from 'react'
import styled from 'styled-components'

const ModeButton = styled.button`
  padding: 5px 5px;
  background-color: whitesmoke;
  color: #333;
  border: 2px solid whitesmoke;
  border-radius: 15px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-left: 5px;

  &:hover {
    background-color: #333;
    color: whitesmoke;
  }
`

const DarkModeBtn = ({ onClick }) => (
  <ModeButton onClick={onClick}>
    Dark Mode
  </ModeButton>
)

export default DarkModeBtn
