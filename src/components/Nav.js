import React from 'react'
import '../style/Nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/layout">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="employees">Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="attendance">Attendance</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="departments">Departments</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="performance">Performance</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="recruitment">Recruitment</Link>
                    </li>
                </ul>
            </div>
    </>


  )
}
