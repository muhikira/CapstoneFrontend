import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

export default function Navigation() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">HRMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user && (
              <>
                <Nav.Link as={Link} to="/">Login</Nav.Link>
                <Nav.Link as={Link} to="/jobs">Job Openings</Nav.Link>
              </>
            )}
            {user && user.role === 'employee' && (
              <Nav.Link as={Link} to="/employee-dashboard">Dashboard</Nav.Link>
            )}
            {user && user.role === 'admin' && (
              <>
                <Nav.Link as={Link} to="/admin-dashboard">Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/employee-management">Employees</Nav.Link>
                <Nav.Link as={Link} to="/department-management">Departments</Nav.Link>
                <Nav.Link as={Link} to="/recruitment">Recruitment</Nav.Link>
              </>
            )}
          </Nav>
          {user && (
            <Nav>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}