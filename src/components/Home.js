import React from 'react'
import Slideshow from './Slideshow'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Slideshow/>
      <div className="container main-content mt-5">
        <div className="row mb-5">
            <div className="col-md-8 offset-md-2 text-center">
                <h1 className="display-4 mb-4">Welcome to HR & Payroll Management</h1>
                <p className="lead">Streamline your HR processes and manage payroll with ease.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 mb-4">
                <div className="card h-100">
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">Employee Management</h5>
                        <p className="card-text flex-grow-1">Easily manage employee information, attendance, and performance.</p>
                        <Link to="employees" className="btn btn-primary mt-auto">View Employees</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card h-100">
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">Payroll Processing</h5>
                        <p className="card-text flex-grow-1">Simplify payroll calculations and ensure timely payments.</p>
                        <Link to="attendance" className="btn btn-primary mt-auto">Check Attendance</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card h-100">
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">Recruitment</h5>
                        <p className="card-text flex-grow-1">Manage job openings and streamline your hiring process.</p>
                        <Link to="recruitment" className="btn btn-primary mt-auto">View Openings</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}
