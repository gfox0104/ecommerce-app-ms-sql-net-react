import React from 'react'
import Users from '../components/Users'
import Products from '../components/Products'
import styled from 'styled-components'
import { Container, Panel } from '../styles/styles'

function AdminPanel() {
  return (
    <StyledAdminPanel>
      <button>Users</button>
      <button>Products</button>
      <button>Orders</button>
      <Users />
      <Products />
    </StyledAdminPanel>
  )
}

const StyledAdminPanel = styled(Container)`
flex-direction: column;
justify-content: flex-start;
`

export default AdminPanel