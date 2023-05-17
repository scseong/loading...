import React from 'react';
import Login from './pages/Login';
import { AuthProvider } from './contexts/AuthContext';

export default function App() {
  return (
    <div>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </div>
  );
}

