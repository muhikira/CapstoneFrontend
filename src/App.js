
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { AuthProvider } from './components/AuthContext'
import Navigation from './components/Navigation'
import Login from './components/Login'
import EmployeeDashboard from './components/EmployeeDashboard'
import AdminDashboard from './components/AdminDashboard'
import Footer from './components/Footer'
import DepartmentManagement from './components/DepartmentManagement'
import EmployeeManagment from './components/EmployeeManagment'
import Recruitment from './components/Recruitment'
import JobOpenings from './components/JobOpenings'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <>
  <Router>
      <AuthProvider>
        <Navigation />
        <Container className="mt-4">
          <Routes> 
            <Route path="/jobs" element={<JobOpenings />} />
            <Route path="/login" element={<Login />} />
           
            
            <Route element={<ProtectedRoute allowedRoles={['employee', 'admin']} />}>
              <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
            </Route>
            
            <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/department-management" element={<DepartmentManagement />} />
              <Route path="/employee-management" element={<EmployeeManagment />} />
              <Route path="/recruitment" element={<Recruitment />} />
            </Route>
            
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="*" element={<Navigate to="/jobs" replace />} />
          </Routes>
        </Container>
        <Footer />
      </AuthProvider>
    </Router>
    </>
  );
}

export default App;
