import React from 'react'

export default function Performance() {
  return (
    <>
      <div className="container main-content">
        <h1 className="mb-4">Employee Performance Dashboard</h1>
        
        <div className="row mb-4">
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card text-white bg-primary">
                    <div className="card-body">
                        <h5 className="card-title">Overall Performance</h5>
                        <h2 className="card-text">87%</h2>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card text-white bg-success">
                    <div className="card-body">
                        <h5 className="card-title">Goals Completed</h5>
                        <h2 className="card-text">45/60</h2>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card text-white bg-info">
                    <div className="card-body">
                        <h5 className="card-title">Ongoing Goals</h5>
                        <h2 className="card-text">15</h2>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card text-white bg-warning">
                    <div className="card-body">
                        <h5 className="card-title">Upcoming Reviews</h5>
                        <h2 className="card-text">7</h2>
                    </div>
                </div>
            </div>
        </div>

        <div className="card mb-4">
            <div className="card-header">
                <h5 className="card-title mb-0">Employee Performance Overview</h5>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Employee</th>
                                <th>Department</th>
                                <th>Overall Performance</th>
                                <th>Goals Completed</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jay Steav</td>
                                <td>IT</td>
                                <td>
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: '92%'}} aria-valuenow="92" aria-valuemin="0" aria-valuemax="100">92%</div>
                                    </div>
                                </td>
                                <td>5/6</td>
                                <td><a href="employee-profile.html" className="btn btn-sm btn-outline-primary">View Details</a></td>
                            </tr>
                            <tr>
                                <td>Jane Smith</td>
                                <td>HR</td>
                                <td>
                                    <div className="progress">
                                        <div className="progress-bar bg-info" role="progressbar" style={{width: '88%'}} aria-valuenow="88" aria-valuemin="0" aria-valuemax="100">88%</div>
                                    </div>
                                </td>
                                <td>4/5</td>
                                <td><a href="#" className="btn btn-sm btn-outline-primary">View Details</a></td>
                            </tr>
                            <tr>
                                <td>Mike Johnson</td>
                                <td>Finance</td>
                                <td>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                                    </div>
                                </td>
                                <td>3/5</td>
                                <td><a href="#" className="btn btn-sm btn-outline-primary">View Details</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6 mb-4">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title mb-0">Top Performing Employees</h5>
                    </div>
                    <div className="card-body">
                        <ol className="list-group list-group-numbered">
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Jay Steav</div>
                                    IT Department
                                </div>
                                <span className="badge bg-primary rounded-pill">92%</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Jane Smith</div>
                                    HR Department
                                </div>
                                <span className="badge bg-primary rounded-pill">88%</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Alex Johnson</div>
                                    Marketing Department
                                </div>
                                <span className="badge bg-primary rounded-pill">85%</span>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mb-4">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title mb-0">Department Performance</h5>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <h6 className="mb-2">IT Department</h6>
                                <div className="progress">
                                    <div className="progress-bar bg-success" role="progressbar" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <h6 className="mb-2">HR Department</h6>
                                <div className="progress">
                                    <div className="progress-bar bg-info" role="progressbar" style={{width: '85%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <h6 className="mb-2">Finance Department</h6>
                                <div className="progress">
                                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '78%'}} aria-valuenow="78" aria-valuemin="0" aria-valuemax="100">78%</div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <h6 className="mb-2">Marketing Department</h6>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '72%'}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100">72%</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
