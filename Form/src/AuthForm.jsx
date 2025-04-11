import React, { useState } from 'react';

const AuthForm = () => {
  const [formType, setFormType] = useState('signup');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password, phone } = formData;

    if (formType === 'signup') {
      if (!username) return alert("Please enter a username.");
      if (!validateEmail(email)) return alert("Enter a valid email.");
      if (password.length < 6) return alert("Password must be at least 6 characters.");
      if (!validatePhone(phone)) return alert("Enter a valid 10-digit phone number.");
      alert("Signup successful!");
    } else {
      if (!validateEmail(email)) return alert("Enter a valid email.");
      if (!password) return alert("Please enter your password.");
      alert("Login successful!");
    }
  };

  return (
    <div style={styles.container}>
      <h2>{formType === 'signup' ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {formType === 'signup' && (
          <>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
            />
          </>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          {formType === 'signup' ? 'Sign Up' : 'Login'}
        </button>
      </form>
      <p style={styles.toggleText}>
        {formType === 'signup' ? 'Already have an account?' : "Don't have an account?"}{' '}
        <span onClick={() => setFormType(formType === 'signup' ? 'login' : 'signup')} style={styles.toggleLink}>
          {formType === 'signup' ? 'Login here' : 'Sign up here'}
        </span>
      </p>
    </div>
  );
};

const styles = {
  container: {
    width: '350px',
    margin: 'auto',
    marginTop: '100px',
    padding: '30px',
    borderRadius: '15px',
    background: 'rgba(255, 255, 255, 0.15)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(10px)',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginTop: '20px'
  },
  input: {
    padding: '10px',
    borderRadius: '8px',
    border: 'none',
    outline: 'none',
    fontSize: '16px'
  },
  button: {
    padding: '12px',
    background: '#4e54c8',
    border: 'none',
    borderRadius: '10px',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  toggleText: {
    marginTop: '15px',
    fontSize: '14px'
  },
  toggleLink: {
    color: '#ffd700',
    cursor: 'pointer',
    textDecoration: 'underline'
  }
};

export default AuthForm;
