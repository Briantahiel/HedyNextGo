import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  width: 100%;
  padding: 40px 20px;
  background-color: #17202a;
  color: whitesmoke;
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 1);
`

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; 
  max-width: 1200px;
  margin: 50px auto;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`

const Heading = styled.h4`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 20px;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const ListItem = styled.li`
  margin-bottom: 10px;
`

const Address = styled.address`
  font-style: normal;
`

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      <Column>
        <Heading>Contact Us</Heading>
        <List>
          <ListItem>info@example.com</ListItem>
          <ListItem>contact@example.com</ListItem>
          <ListItem>+1234567890</ListItem>
          <ListItem>+0987654321</ListItem>
        </List>
      </Column>
      <Column>
        <Heading>Topics</Heading>
        <List>
          <ListItem>Web Design</ListItem>
          <ListItem>Graphic Design</ListItem>
          <ListItem>SEO</ListItem>
          <ListItem>Content Writing</ListItem>
          <ListItem>Social Media Marketing</ListItem>
        </List>
      </Column>
      <Column>
        <Heading>Latest Blog Posts</Heading>
        <List>
          <ListItem>The Art of Web Design</ListItem>
          <ListItem>10 Tips for Effective SEO</ListItem>
          <ListItem>Creating Engaging Content</ListItem>
          <ListItem>Mastering Social Media</ListItem>
        </List>
      </Column>
    </FooterContent>
    <p style={{ textAlign: 'center', marginTop: '40px' }}>© {new Date().getFullYear()} Hedy Software. All rights reserved.</p>
    <Address style={{ textAlign: 'center', marginTop: '10px' }}>
      <p>123 Main Street, City, Country</p>
    </Address>
  </FooterContainer>
)

export default Footer
