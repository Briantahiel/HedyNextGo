import React from 'react'
import Layout from 'layouts/Main'
import { getUsers } from '../api/posts'
import Card from '../components/ui/card'
import styled from 'styled-components'

const Container = styled.div`
  margin: auto;
  max-width: 1200px;
  display: flex;
  justify-content: space-around;
  margin: auto;
  flex-wrap: wrap;
`

const CardContent = styled.div`
  strong {
    font-weight: bold;
  }

  li {
    margin-bottom: 10px;
    list-style: none;
  }
`

const Users = ({ users }) => (
  <Layout>
    <h1>Our latest users</h1>
    <ul>
      <Container>
        {users.map((u) => (
          <Card key={u.id}>
            <CardContent>
              <li>
                <strong>Name:</strong> {u.name}
              </li>
              <li>
                <strong>Username:</strong> {u.username}
              </li>
              <li>
                <strong>Email:</strong> {u.email}
              </li>
              <li>
                <strong>City:</strong> {u.address.city}
              </li>
            </CardContent>
          </Card>
      ))}
      </Container>
    </ul>
  </Layout>
)

Users.getInitialProps = async ({ req }) => {
  const res = await getUsers()
  const json = await res.json()
  return { users: json }
}

export default Users
