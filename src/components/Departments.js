import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Departments() {
    const [depts, setDepts] = useState([]);

    const fetchDepts = async ()=>{
        try {
           const response =  await axios.get('http://localhost:8080/api/departments')
            setDepts(response.data) 
        } catch (error) {
            console.log(error.message);
        }
        
    }

    useEffect(()=>{
        fetchDepts();
    },[])
  return (
    <>
         <div className="container main-content">
        <h1 className="mb-4">Departments</h1>
        <div className="row">


            {depts && depts.map(dept=>{
                return (
                     <div key= {dept.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{dept.departmentName}</h5>
                                <p className="card-text flex-grow-1">{dept.departmentDescription}</p>
                                <p>Department Code: {dept.departmentCode}</p>
                                {/* <ul className="list-unstyled">
                                    <li><strong>Employees:</strong> 25</li>
                                    <li><strong>Manager:</strong> John Smith</li>
                                </ul> */}
                                <a href="#" className="btn btn-primary mt-auto">View Details</a>
                            </div>
                        </div>
                    </div>
                )
            })}
           


         
           
        </div>

</div>
    </>
  )
}
