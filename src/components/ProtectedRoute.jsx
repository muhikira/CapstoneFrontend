import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from './AuthContext'

export default function ProtectedRoute({ allowedRoles }) {
  const { user } = useAuth();
  const location = useLocation();

  // If not logged in, redirect to login with the attempted path
  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // If logged in but wrong role, redirect to appropriate dashboard
  if (!allowedRoles.includes(user.role)) {
    const dashboard = user.role === 'admin' ? '/admin-dashboard' : '/employee-dashboard';
    return <Navigate to={dashboard} replace />;
  }

  return <Outlet />;
}