import styled from 'styled-components'
import Layout from 'layouts/Main'

const AboutContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const ContentContainer = styled.div`
  max-width: 600px;
  text-align: center;
`

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`

const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
`

const AboutPage = () => {
  return (
    <Layout>
      <AboutContainer>
        <ContentContainer>
          <Title>About Our Blog</Title>
          <Description>
            Welcome to our blog! We are passionate about sharing knowledge and
            experiences on various topics, including technology, lifestyle,
            travel, and much more. Our goal is to provide valuable insights,
            tips, and inspiration to our readers. Whether you're a seasoned
            enthusiast or just starting your journey, we hope you'll find our
            blog enjoyable and informative. Stay tuned for exciting content and
            updates!
          </Description>
        </ContentContainer>
      </AboutContainer>
    </Layout>
  )
}

export default AboutPage
