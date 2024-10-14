import React, { useEffect, useState } from 'react'
import '../style/Content.css'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Employees() {
    const [employees, setEmployees] = useState([]);

    const fetchEmployee = async()=>{
        try {
            const response = await axios.get('http://localhost:8080/api/employees');
            setEmployees(response.data);
            
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=>{
        fetchEmployee();
    },[])
  return (
    <>
       <div className="container main-content">
        <h1 className="mb-4">Employee List</h1>
        <div className="card">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="table-light">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Position</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {employees && employees.map(employee => {
                                return (
                                    <tr key={employee.id}> 
                                        <td>{employee.id}</td>
                                        <td>{employee.firstName} {employee.lastName}</td>
                                        <td>{employee.department}</td>
                                        <td>{employee.position}</td>
                                        <td><Link to={`/layout/employee/${employee.id}`} className="btn btn-sm btn-outline-primary">View Profile</Link></td>
                                    </tr>
                                )
                            })}
                            
                        
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
