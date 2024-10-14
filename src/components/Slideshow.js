import React from 'react'
import '../style/Slideshow.css'

export default function Slideshow() {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row g-0">
            
            <div className="col-md-12">
                <div id="hrCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="images/cytonn-photography-n95VMLxqM2I-unsplash.jpg" className="d-block w-100" alt="HR Management" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>HR Management</h5>
                                <p>Streamline your HR processes with our comprehensive management tools.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="images/windows-kRWY72TKB0Y-unsplash (1).jpg" className="d-block w-100" alt="Employee Engagement" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Employee Engagement</h5>
                                <p>Foster a positive work environment and boost employee satisfaction.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="images/kenny-eliason-maJDOJSmMoo-unsplash.jpg" className="d-block w-100" alt="Payroll Processing" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Payroll Processing</h5>
                                <p>Ensure accurate and timely payroll management for your organization.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="images/Effective-Recruitment-Strategies-1.webp" className="d-block w-100" alt="Recruitment" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Recruitment</h5>
                                <p>Attract top talent and streamline your hiring process with our tools.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="images/Objectives-of-performance-appraisal.webp" className="d-block w-100" alt="Performance Management" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Performance Management</h5>
                                <p>Track and improve employee performance with our advanced analytics.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#hrCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#hrCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
