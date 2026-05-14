import React, { useState } from 'react';
import { toast } from 'react-hot-toast'; // 1. Import toast
import styles from './Login.module.css';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 2. Trigger the success notification
    toast.success('Log In Success!', {
      duration: 4000,
      icon: '🔓',
    });

    // Add authentication or routing logic here
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
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
