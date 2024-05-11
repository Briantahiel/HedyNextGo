import styled from 'styled-components'
import Layout from 'layouts/Main'

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`

const ContactForm = styled.form`
  width: 80%;
  max-width: 500px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #17202a;
`

const FormField = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: whitesmoke;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
    resize: vertical;
  }
`

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 3px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <Layout>
      <ContactContainer>
        <h1>Contact Us</h1>
        <ContactForm onSubmit={handleSubmit}>
          <FormField>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' required />
          </FormField>
          <FormField>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' required />
          </FormField>
          <FormField>
            <label htmlFor='message'>Message:</label>
            <textarea id='message' name='message' rows='5' required />
          </FormField>
          <SubmitButton type='submit'>Send Message</SubmitButton>
        </ContactForm>
      </ContactContainer>
    </Layout>
  )
}

export default ContactPage
