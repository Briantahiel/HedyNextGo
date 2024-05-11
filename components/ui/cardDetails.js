import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  width: 360px;
  height: 300px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`

const Description = styled.p`
  font-size: 16px;
  text-align: center;
`

const Card = ({ imageSrc, title, description }) => {
  return (
    <CardContainer>
      <Image src={imageSrc} alt='card image' />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  )
}

export default Card
