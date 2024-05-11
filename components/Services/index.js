import Card from '../ui/cardDetails'
import styled from 'styled-components'

const Container = styled.div`
    max-width: 1200px;
    margin: 100px auto;
    color: #333;
    flex-wrap: wrap;
    gap: 20px;
    display: flex;
    justify-content: space-around;
`

const BlogDetails = () => {
  return (
    <Container>
      <Card
        imageSrc='https://www.clarigoinfotech.com/assets/images/icons/Innovation.png'
        title='Be talkative'
        description='Expand your perspective, engage in constructive challenges, and take initiative ahead of others.'
    />
      <Card
        imageSrc='https://www.clarigoinfotech.com/assets/images/icons/Community.png'
        title='Community'
        description='Creating a nurturing workplace atmosphere and cultivating strong relationships.'
    />
      <Card
        imageSrc='https://www.clarigoinfotech.com/assets/images/icons/Excellence.png'
        title='Social'
        description='Explore the dynamics of social interaction and community engagement in our insightful blog.'
    />
    </Container>
  )
}

export default BlogDetails
