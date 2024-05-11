import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 360px;
  margin: 20px auto;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  background-color: whitesmoke;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    h3 {
      color: #387ef5;
    }
  }

  h3 {
    color: black;
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 35px;
    font-family: "PT Sans", sans-serif;
    text-transform: capitalize;
    text-align: center;
    margin: 0;
    padding: 15px;
  }

  p {
    font-size: 1.2rem;
    line-height: 35px;
    color: #333;
    font-family: "PT Serif", sans-serif;
    margin: 0;
    padding: 15px;
  }
  a {
    text-decoration: none;
  }
`

export default Wrapper
