import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 20px auto;
`

const ImageContainer = styled.div`
  max-width: 600px;
  height: auto;
  order: ${({ invert }) => (invert ? 2 : 1)};
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  height: auto;
  background: whitesmoke;
  padding: 20px;
  order: ${({ invert }) => (invert ? 1 : 2)};
`

const Title = styled.h3`
  margin-bottom: 10px;
  color: #333;
`

const Description = styled.p`
  margin-bottom: 20px;
  color: #666;
`

const Button = styled.button`
  padding: 8px 15px;
  width: 50%;
  align-self: flex-end;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`

const CardBlog = ({ imageSrc, title, description, invert }) => (
  <CardContainer>
    <ImageContainer invert={invert}>
      <Image src={imageSrc} alt='Card Image' />
    </ImageContainer>
    <ContentContainer invert={invert}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button>See more</Button>
    </ContentContainer>
  </CardContainer>
)

export default CardBlog
