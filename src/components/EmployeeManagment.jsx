import React, { useState, useEffect } from 'react'
import { Table, Button, Modal, Form } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner';


export default function EmployeeManagement() {
  const [employees, setEmployees] = useState([])
  const [departments, setDepartments] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [currentEmployee, setCurrentEmployee] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    fetchEmployees()
    fetchDepartments()

  }, [])

  const fetchEmployees = async () => {
    setLoading(true)
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
    setLoading(false)
  }


  const fetchDepartments = async () => {
    
    const token = localStorage.getItem('token')
    
    const response = await fetch('http://localhost:8080/api/departments', {
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
    
    setDepartments(data)
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
    const token = localStorage.getItem('token')
    if (currentEmployee?.id) {
      await fetch(`http://localhost:8080/api/employees/${currentEmployee.id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentEmployee),
      })
    } else {
      await fetch('http://localhost:8080/api/employees', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentEmployee),
      })

      
    }
    fetchEmployees()
    handleCloseModal()
  }

  const handleDeleteEmployee = async (id) => {
    // Placeholder for API call to delete employee
    const token = localStorage.getItem('token')
    await fetch(`http://localhost:8080/api/employees/${id}`, { 
      method: 'DELETE' ,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    fetchEmployees()
  }

  return (
    <div className="mt-5">
      <h2 className="text-center mb-4">Employee Management</h2>
      <Button variant="success" className="mb-3" onClick={() => handleShowModal()}>
        Add Employee
      </Button>
      {loading? <Spinner animation="border" variant="primary" />:
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
      </Table>}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{currentEmployee ? 'Edit Employee' : 'Add Employee'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSaveEmployee}>

            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First name"
                value={currentEmployee?.firstName || ''}
                onChange={(e) => setCurrentEmployee({ ...currentEmployee, firstName: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last name"
                value={currentEmployee?.lastName || ''}
                onChange={(e) => setCurrentEmployee({ ...currentEmployee, lastName: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your Email"
                value={currentEmployee?.email || ''}
                onChange={(e) => setCurrentEmployee({ ...currentEmployee, email: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone"
                value={currentEmployee?.phone || ''}
                onChange={(e) => setCurrentEmployee({ ...currentEmployee, phone: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group controlId="dateOfBirth">
              <Form.Label>date Of Birth</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter your date Of Birth"
                value={currentEmployee?.dateOfBirth || ''}
                onChange={(e) => setCurrentEmployee({ ...currentEmployee, dateOfBirth: e.target.value })}
                required
              />
            </Form.Group>


            <Form.Group controlId="placeOfBirth">
              <Form.Label>place Of Birth</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your place Of Birth"
                value={currentEmployee?.placeOfBirth || ''}
                onChange={(e) => setCurrentEmployee({ ...currentEmployee, placeOfBirth: e.target.value })}
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

            <Form.Group controlId="hireDate">
              <Form.Label>hire Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter hireDate"
                value={currentEmployee?.hireDate || ''}
                onChange={(e) => setCurrentEmployee({ ...currentEmployee, hireDate: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group controlId="salary">
              <Form.Label>salary</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter salary"
                value={currentEmployee?.salary || ''}
                onChange={(e) => setCurrentEmployee({ ...currentEmployee, salary: e.target.value })}
                required
              />
            </Form.Group>


            <Form.Group controlId="departmentId">
              <Form.Label>Select a Department</Form.Label>
              <Form.Control as="select" value={currentEmployee?.departmentId || ''}
                                        onChange={(e) => setCurrentEmployee({
                                          ...currentEmployee,
                                          departmentId: Number(e.target.value)
                                        })}>

                    <option value="">Select Department</option>
                    {departments?.map(dept => (
                      <option key={dept.id} value={dept.id}>
                        {dept.departmentName}
                      </option>
                      ))}
              </Form.Control>
            </Form.Group>

        

            <br/>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}