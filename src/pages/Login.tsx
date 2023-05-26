import React from 'react';
import { login, logout } from '../api/firebase';

export default function Login() {
  const handleLogin = () => {
    login();
  };
  return (
    <div>
      <button onClick={() => login()}>login</button>
      <button onClick={() => logout()}>logout</button>
    </div>
  );
}
