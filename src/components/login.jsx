import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from './loginContext';

const Login = () => {
  const [creds, setCreds] = useState({ email: '', password: '' });
  const { login } = useContext(LoginContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleLogin = () => {
    login(creds.email, creds.password)
      .then((user) => {
        console.log('Logged in user:', user);
        navigate('/stats');
      })
      .catch((err) => {
        console.error('Login error:', err);
        setError(err.message);
      });
  };

  return (
    <div className="min-h-screen flex  justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <label className="block text-gray-700 mb-2">Email:</label>
        <input
          type="text"
          value={creds.email}
          onChange={(e) => setCreds({ ...creds, email: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <label className="block text-gray-700 mb-2">Password:</label>
        <input
          type="password"
          value={creds.password}
          onChange={(e) => setCreds({ ...creds, password: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
        <Link to='/signup'>
          <p className="text-blue-500 text-center mt-4 hover:underline">Sign Up</p>
          </Link>
      </div>
    </div>
  );
};

export default Login;