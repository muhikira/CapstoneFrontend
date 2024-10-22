import React, { createContext, useState, useContext, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation()

  useEffect(() => {
    const initializeAuth = () => {
      const token = localStorage.getItem('token');
      const userRole = localStorage.getItem('userRole');
      
      if (token && userRole) {
        try {
          const decodedToken = jwtDecode(token);
          // Check if token is expired
          if (decodedToken.exp * 1000 < Date.now()) {
            logout();
            return;
          }
          
          setUser({ token, role: userRole });
          
          // Only redirect if we're on login page or root
          if (location.pathname === '/login' || location.pathname === '/') {
            if (userRole === 'admin') {
              navigate('/admin-dashboard');
            } else if (userRole === 'employee') {
              navigate('/employee-dashboard');
            }
          }
        } catch (error) {
          console.error('Token validation failed:', error);
          logout();
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, [navigate, location]);


  const login = async (username, password) => {
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      const token = data.jwt;
      const decodedToken = jwtDecode(token);
      const role = decodedToken.sub;

      const userData = { token, role };
      setUser(userData);
      localStorage.setItem('token', token);
      localStorage.setItem('userRole', role);

      // Navigate based on role
      if (role === 'admin') {
        navigate('/admin-dashboard');
      } else if (role === 'employee') {
        navigate('/employee-dashboard');
      }

      return userData;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  if (loading) {
    return <div>Loading...</div>; // Or your loading component
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext)