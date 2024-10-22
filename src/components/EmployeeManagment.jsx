import React, { useState, useEffect } from 'react'
import { Table, Button, Modal, Form } from 'react-bootstrap'



export default function EmployeeManagement() {
  const [employees, setEmployees] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [currentEmployee, setCurrentEmployee] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    fetchEmployees()
  }, [])

  const fetchEmployees = async () => {
    
    const token = localStorage.getItem('token')
    
    const response = await fetch('http://localhost:8080/api/employees', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json()
    
    setEmployees(data)
  }

  const handleShowModal = (employee = null) => {
    setCurrentEmployee(employee)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setCurrentEmployee(null)
  }

  const handleSaveEmployee = async (e) => {
    e.preventDefault()
    // Placeholder for API call to save or update employee
    if (currentEmployee?.id) {
      await fetch(`http://localhost:3000/api/employees/${currentEmployee.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentEmployee),
      })
    } else {
      await fetch('http://localhost:3000/api/employees', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentEmployee),
      })
    }
    fetchEmployees()
    handleCloseModal()
  }

  const handleDeleteEmployee = async (id) => {
    // Placeholder for API call to delete employee
    await fetch(`http://localhost:3000/api/employees/${id}`, { method: 'DELETE' })
    fetchEmployees()
  }

  return (
    <div className="mt-5">
      <h2 className="text-center mb-4">Employee Management</h2>
      <Button variant="success" className="mb-3" onClick={() => handleShowModal()}>
        Add Employee
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees && employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstName} {employee.lastName}</td>
              <td>{employee.department.departmentName}</td>
              <td>{employee.position}</td>
              <td>${employee.salary}</td>
              <td >
                <Button style={{ marginLeft: '20px' }}  variant="primary" size="sm" className="mr-2" onClick={() => handleShowModal(employee)}>
                  Edit
                </Button>

                <Button style={{ marginLeft: '20px' }} variant="danger" size="sm" onClick={() => handleDeleteEmployee(employee.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{currentEmployee ? 'Edit Employee' : 'Add Employee'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSaveEmployee}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={currentEmployee?.name || ''}
                onChange={(e) => setCurrentEmployee({ ...currentEmployee, name: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="department">
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter department"
                value={currentEmployee?.department || ''}
                onChange={(e) => setCurrentEmployee({ ...currentEmployee, department: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="position">
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter position"
                value={currentEmployee?.position || ''}
                onChange={(e) => setCurrentEmployee({ ...currentEmployee, position: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="salary">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter salary"
                value={currentEmployee?.salary || ''}
                onChange={(e) => setCurrentEmployee({ ...currentEmployee, salary: e.target.value })}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}