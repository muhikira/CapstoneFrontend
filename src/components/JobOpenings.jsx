import React, { useState, useEffect } from 'react'
import { Card, Button, Modal, Form, Alert } from 'react-bootstrap'

export default function JobOpenings() {
  const [jobs, setJobs] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selectedJob, setSelectedJob] = useState(null)
  const [application, setApplication] = useState({ name: '', email: '', resume: null })
  const [submitStatus, setSubmitStatus] = useState(null)

  useEffect(() => {
    // Fetch job openings
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    // This should be replaced with an actual API call
    const mockJobs = [
      { id: 1, title: 'Software Developer', department: 'IT', description: 'We are looking for a skilled software developer...' },
      { id: 2, title: 'Marketing Specialist', department: 'Marketing', description: 'Join our dynamic marketing team...' },
      { id: 3, title: 'HR Manager', department: 'Human Resources', description: 'We need an experienced HR manager...' },
    ]
    setJobs(mockJobs)
  }

  const handleApply = (job) => {
    setSelectedJob(job)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedJob(null)
    setApplication({ name: '', email: '', resume: null })
    setSubmitStatus(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // This should be replaced with an actual API call
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setTimeout(handleCloseModal, 2000)
    } catch (error) {
      setSubmitStatus('error')
    }
  }

  return (
    <div>
      <h2 className="mb-4">Job Openings</h2>
      {jobs.map(job => (
        <Card key={job.id} className="mb-3">
          <Card.Body>
            <Card.Title>{job.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{job.department}</Card.Subtitle>
            <Card.Text>{job.description}</Card.Text>
            <Button variant="primary" onClick={() => handleApply(job)}>Apply</Button>
          </Card.Body>
        </Card>
      ))}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Apply for {selectedJob?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {submitStatus === 'success' && (
            <Alert variant="success">Application submitted successfully!</Alert>
          )}
          {submitStatus === 'error' && (
            <Alert variant="danger">Error submitting application. Please try again.</Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                required 
                value={application.name}
                onChange={(e) => setApplication({...application, name: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                required 
                value={application.email}
                onChange={(e) => setApplication({...application, email: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Resume</Form.Label>
              <Form.Control 
                type="file" 
                required 
                onChange={(e) => setApplication({...application, resume: e.target.files[0]})}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit Application
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}