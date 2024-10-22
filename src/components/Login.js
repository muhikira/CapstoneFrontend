import React, { useState, useEffect } from 'react'
import '../style/Login.css'
import { Form, Button, Alert, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'
import Slideshow from './Slideshow'

export default function Login() {
	const [username, setUsername] = useState('admin')
	const [password, setPassword] = useState('admin')
	const [error, setError] = useState('');
	const navigate = useNavigate()
	const { user, login } = useAuth()

  useEffect(() => {
    // Redirect if already logged in
    if (user) {
      if (user.role === 'admin') {
        navigate('/admin-dashboard');
      } else if (user.role === 'employee') {
        navigate('/employee-dashboard');
      }
    }
  }, [user, navigate]);
  
	const handleLogin = async (e) => {
	  e.preventDefault()
	  setError('');
    
    try {
      await login(username, password);
    } catch (err) {
      setError('Invalid credentials');
    }
	}
  return (
    <>
    <Slideshow/>
    <div className='col-4 d-flex m-auto mt-5'>

    
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </Card.Body>
    </Card>
    </div>
    </>
    
  );
 
}
