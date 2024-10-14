import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function EmployeeProfile() {
  const {id} = useParams();
  const [employee, setEmployee] = useState({});

  const fetchEmployee = async ()=>{
    const response = await axios.get(`http://localhost:8080/api/employees/${id}`)
    setEmployee(response.data)
  }

  useEffect(()=>{
    fetchEmployee();
  },[])

  return (
    <>
      <div className="container main-content">
        <div className="row">
            <div className="col-md-6 mb-4">
                <div className="card h-100">
                    <div className="card-header">
                        <h5 className="card-title mb-0">Personal Information</h5>
                    </div>
                    <div className="card-body">
                        <ul className="list-unstyled">
                            <li><strong>First Name:</strong> {employee.firstName}</li>
                            <li><strong>Last Name:</strong> {employee.lastName}</li>
                            <li><strong>Email:</strong> {employee.email}</li>
                            <li><strong>Phone:</strong> {employee.phone}</li>
                            <li><strong>Date of Birth:</strong> {employee.dateOfBirth}</li>
                            <li><strong>Place of Birth:</strong>{employee.placeOfBirth}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mb-4">
                <div className="card h-100">
                    <div className="card-header">
                        <h5 className="card-title mb-0">Employment Details</h5>
                    </div>
                    <div className="card-body">
                        <ul className="list-unstyled">
                            <li><strong>Position:</strong>  {employee.position}</li>
                            <li><strong>Department:</strong>  {employee.department}</li>
                            <li><strong>Hire Date:</strong>  {employee.hireDate}</li>
                            <li><strong>Salary:</strong> {employee.salary}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 mb-4">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title mb-0">Performance Overview</h5>
                    </div>
                    <div className="card-body">
                        <p>Performance data and charts would go here. This could include recent achievements, goals, and performance metrics.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 mb-4">
                <div className="d-flex justify-content-between">
                    <a href="employees.html" className="btn btn-secondary">Back to Employee List</a>
                    <a href="#" className="btn btn-primary">Edit Profile</a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
