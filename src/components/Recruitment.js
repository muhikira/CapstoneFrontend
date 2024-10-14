import React from 'react'

export default function Recruitment() {
  return (
    <>
      <div className="container main-content">
        <h1 className="mb-4">Recruitment Dashboard</h1>
        
        <div className="row mb-4">
            <div className="col-md-3 mb-3">
                <div className="card text-white bg-primary">
                    <div className="card-body">
                        <h5 className="card-title">Open Positions</h5>
                        <h2 className="card-text">5</h2>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-3">
                <div className="card text-white bg-success">
                    <div className="card-body">
                        <h5 className="card-title">Total Applicants</h5>
                        <h2 className="card-text">42</h2>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-3">
                <div className="card text-white bg-info">
                    <div className="card-body">
                        <h5 className="card-title">Interviews Scheduled</h5>
                        <h2 className="card-text">8</h2>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-3">
                <div className="card text-white bg-warning">
                    <div className="card-body">
                        <h5 className="card-title">Offers Extended</h5>
                        <h2 className="card-text">3</h2>
                    </div>
                </div>
            </div>
        </div>

        <h2 className="mb-3">Open Positions</h2>
        <div className="row mb-4">
            <div className="col-md-4 mb-3">
                <div className="card job-card">
                    <div className="card-body">
                        <h5 className="card-title">Senior Software Engineer</h5>
                        <h6 className="card-subtitle mb-2 text-muted">IT Department</h6>
                        <p className="card-text">We're looking for an experienced software engineer to lead our development team.</p>
                        <a href="#" className="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-3">
                <div className="card job-card">
                    <div className="card-body">
                        <h5 className="card-title">HR Specialist</h5>
                        <h6 className="card-subtitle mb-2 text-muted">HR Department</h6>
                        <p className="card-text">Seeking an HR professional to support our growing team.</p>
                        <a href="#" className="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-3">
                <div className="card job-card">
                    <div className="card-body">
                        <h5 className="card-title">Marketing Manager</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Marketing Department</h6>
                        <p className="card-text">Looking for a creative marketing manager to lead our campaigns.</p>
                        <a href="#" className="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>
        </div>

        <h2 className="mb-3">Applicants</h2>
        <div className="card mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position Applied</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Smith</td>
                                <td>Senior Software Engineer</td>
                                <td><span className="badge bg-info">Interview Scheduled</span></td>
                                <td><a href="#" className="btn btn-sm btn-outline-primary">View Application</a></td>
                            </tr>
                            <tr>
                                <td>Emily Johnson</td>
                                <td>HR Specialist</td>
                                <td><span className="badge bg-warning">Under Review</span></td>
                                <td><a href="#" className="btn btn-sm btn-outline-primary">View Application</a></td>
                            </tr>
                            <tr>
                                <td>Michael Brown</td>
                                <td>Marketing Manager</td>
                                <td><span className="badge bg-success">Offer Extended</span></td>
                                <td><a href="#" className="btn btn-sm btn-outline-primary">View Application</a></td>
                            </tr>
                            <tr>
                                <td>Sarah Davis</td>
                                <td>Senior Software Engineer</td>
                                <td><span className="badge bg-secondary">Application Received</span></td>
                                <td><a href="#" className="btn btn-sm btn-outline-primary">View Application</a></td>
                            </tr>
                            <tr>
                                <td>Robert Wilson</td>
                                <td>HR Specialist</td>
                                <td><span className="badge bg-danger">Rejected</span></td>
                                <td><a href="#" className="btn btn-sm btn-outline-primary">View Application</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
