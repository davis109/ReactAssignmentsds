import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Login() {

  const [formData ,setFormData]=useState({
    userName:'',
    password:''
  });

  const [errors, setErrors] = useState({});

  const handleChange=(e)=>{
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
      // Clear error when user starts typing
      if (errors[name]) {
        setErrors({
          ...errors,
          [name]: ''
        });
      }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    // Validate username
    if (!formData.userName.trim()) {
      newErrors.userName = 'Username is required';
    }
    
    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // TODO: Add your login logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div style={{maxWidth:'400px',margin:'auto'}}>
      <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input 
              type="text" 
              name="userName" 
              onChange={handleChange}
              value={formData.userName}
              className={errors.userName ? 'error' : ''}
            />
            {errors.userName && <span className="error-text">{errors.userName}</span>}
          </div>

          <div>
            <label>Password:</label>
            <input 
              type="password" 
              name="password" 
              onChange={handleChange}
              value={formData.password}
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>
          <button type="submit">Login</button>
        </form>
    </div>
  );
}

export default Login;
