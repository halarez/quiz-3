import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import './Login.css';

interface LoginProps {
  onLoginSuccess: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Log In Success!', { duration: 2000 });
    setTimeout(() => {
      onLoginSuccess();
    }, 1000);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email address"
          required 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password"
          required 
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
