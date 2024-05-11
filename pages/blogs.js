import CardBlog from '../components/Blogs'
import Layout from '../layouts/Main'
import styled from 'styled-components'

const Container = styled.div``

const blogs = () => (
  <Layout>
    <h1>Blog</h1>
    <Container>
      <CardBlog
        imageSrc='https://www.jimdo.com/static/b24a7e005383b9194eeffaaf186123af/23057/lifestyle-blog.webp'
        title='Life Style'
        description='Welcome to our lifestyle blog, where we explore the art of living well. Discover tips on fashion,
      beauty, travel, health, and more. Dive into our articles to find inspiration for creating your own unique lifestyle.'
        invert={false}
      />
      <CardBlog
        imageSrc='https://www.jimdo.com/static/cdb3b0baa4b9704a353e835a729ebb0a/23057/food-blog.webp'
        title='Cooking Blog'
        description="If cooking is your passion, share your recipes and photos of your dishes on your cooking blog. Creating a blog is so easy that you'll have plenty of time to enjoy your culinary creations."
        invert
      />
      <CardBlog
        imageSrc='https://www.jimdo.com/static/469a0265d747267e2a1810653e6c3c81/23057/travel-blog.webp'
        title='Travel Blog'
        description='Do you love traveling and want to showcase your experiences to the world? Great! You can easily create your travel blog and you can even write your articles on-the-go using your smartphone.'
        invert={false}
      />
      <CardBlog
        imageSrc='https://www.jimdo.com/static/ed3f0736585a91021894cfcb72876761/23057/fitness-blog.webp'
        title='Health and Sport Blog'
        description='Do you enjoy sports and living a healthy lifestyle? Then, share your tips and secret diets with your readers, along with your achievements at the gym. Become a guru of good health!'
        invert
      />
      <CardBlog
        imageSrc='https://www.jimdo.com/static/9697b8a27c326379f5258c94c9a69406/23057/fashion-blog.webp'
        title='Fashion Blog'
        description='You have a keen eye for style and always dress fashionably. So, tailor a fashion blog to your taste, with modern designs and beautiful image galleries to stay ahead of the curve'
        invert={false}
      />
    </Container>
  </Layout>
)

export default blogs
