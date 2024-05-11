import Head from 'next/head'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  h1 {
    text-align: center;
  }
`

const MainContent = styled.main`
  flex: 1;
  padding: 20px; 
`

const Layout = ({ children, title = 'This is the default title' }) => (
  <Wrapper>
    <Head>
      <title>{title}</title>
    </Head>
    <header>
      <Nav />
    </header>
    <MainContent>
      {children}
    </MainContent>

    <Footer />
  </Wrapper>
)

export default Layout
