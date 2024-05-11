import React from 'react'
import Layout from 'layouts/Main'
import { getPosts } from 'api/posts'
import Post from 'components/Post'
import styled from 'styled-components'
import BlogDetails from '../components/Services'

const CardContainer = styled.div`
  margin: auto;
  max-width: 1200px;
  display: flex;
  justify-content: space-around;
  margin: auto;
  flex-wrap: wrap;
`
const BannerContainer = styled.div`
  img {
    background-image: url("https://isaiahcounselingandwellness.com/wp-content/uploads/2018/06/Tryzens-Blog-Page-Banner.jpg");
    width: 100%;
    height: 500px;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
  }
`

const Title = styled.div`
  margin: 80px 0 80px 0;
`

const IndexPage = ({ posts }) => (
  <Layout>
    <BannerContainer>
      <img />
    </BannerContainer>
    <Title>
      <h1>Unlock Your Creativity: Dive into the World of Blogging!</h1>
    </Title>
    <BlogDetails />
    <Title>
      <h1>Latest Posts</h1>
    </Title>

    <CardContainer>
      {posts.map((p) => (
        <Post key={p.title} post={p} />
      ))}
    </CardContainer>
  </Layout>
)
IndexPage.getInitialProps = async ({ req }) => {
  const res = await getPosts()
  const json = await res.json()
  return { posts: json }
}

export default IndexPage
