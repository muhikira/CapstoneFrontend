import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


const Unauthorized = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the message and original location from state, or use defaults
  const message = location.state?.message || 'You do not have permission to access this resource.';
  const from = location.state?.from?.pathname || '/';

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card border-danger shadow">
              {/* Card Header */}
              <div className="card-header bg-danger text-white text-center py-3">
                <h4 className="mb-0">
                  <i className="bi bi-exclamation-circle-fill me-2"></i>
                  Access Denied
                </h4>
              </div>

              {/* Card Body */}
              <div className="card-body p-4">
                {/* Alert Message */}
                <div className="alert alert-danger d-flex align-items-center" role="alert">
                  <i className="bi bi-exclamation-triangle-fill me-2"></i>
                  <div>
                    <h5 className="alert-heading">Unauthorized Access</h5>
                    <p className="mb-0">{message}</p>
                  </div>
                </div>

                {/* Attempted Path Info */}
                {from !== '/' && (
                  <div className="text-center text-muted small mt-3">
                    <p className="mb-0">
                      Attempted to access: <code>{from}</code>
                    </p>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="card-footer bg-light d-flex justify-content-center gap-3 p-3">
                <button
                  className="btn btn-outline-secondary d-flex align-items-center"
                  onClick={handleGoBack}
                >
                  <i className="bi bi-arrow-left me-2"></i>
                  Go Back
                </button>
                
                <button
                  className="btn btn-primary d-flex align-items-center"
                  onClick={handleGoHome}
                >
                  <i className="bi bi-house-fill me-2"></i>
                  Go Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;