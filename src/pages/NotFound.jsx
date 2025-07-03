import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate =useNavigate();
  return (
    <div className="d-flex align-items-center justify-content-center flex-column text-center" style={{ height: "100vh", backgroundColor: "#f8f9fa" }}>
      <h1 className="display-1 fw-bold text-danger">403</h1>
      <p className="fs-4 text-secondary">Access Denied. You do not have permission to view this page.</p>
      <button onClick={()=>navigate(-1)} className="btn btn-danger px-4 py-2 mt-3">Go Home</button>
    </div>
  );
}
