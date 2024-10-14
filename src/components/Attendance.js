import React from 'react'

export default function Attendance() {
  return (
    <>
      <div className="container main-content">
        <h1 className="mb-4">Attendance Tracker</h1>
        <div className="card">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="table-light">
                            <tr>
                                <th>Employee</th>
                                <th>Department</th>
                                <th>Hours This Week</th>
                                <th>Hours This Month</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td>IT</td>
                                <td>40</td>
                                <td>160</td>
                                <td><a href="#" className="btn btn-sm btn-outline-primary">View Details</a></td>
                            </tr>
                            <tr>
                                <td>Jane Smith</td>
                                <td>HR</td>
                                <td>38</td>
                                <td>152</td>
                                <td><a href="#" className="btn btn-sm btn-outline-primary">View Details</a></td>
                            </tr>
                            <tr>
                                <td>Mike Johnson</td>
                                <td>Finance</td>
                                <td>42</td>
                                <td>168</td>
                                <td><a href="#" className="btn btn-sm btn-outline-primary">View Details</a></td>
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
