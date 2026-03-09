import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css'; 

import logo from '../assets/images/logo.png';
import googleIcon from '../assets/images/google-icon.png';
import eyeOffIcon from '../assets/images/eye-off-icon.png';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login diklik!");
    navigate('/home');
  };

  return (
    <div className="login-page">
      <main className="card-container">
        <img src={logo} alt="logo" className="logo-img" />
        
        <div className="card-header">
          <p>Masuk</p>
          <p>Selamat datang kembali!</p>
        </div>

        <form className="card-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="form-label" htmlFor="username">Username</label>
            <input 
              className="form-input" 
              type="text" 
              id="username" 
              placeholder="Masukkan username" 
              required 
            />
          </div>

          <div className="input-group">
            <label className="form-label" htmlFor="password">Kata Sandi</label>
            <input 
              className="form-input" 
              type="password" 
              id="password" 
              placeholder="Masukkan kata sandi" 
              required 
            />
            <img src={eyeOffIcon} alt="eye-off" className="password-icon" />
            
            <div className="form-footer">
              <p>Belum punya akun? <Link to="/register">Daftar</Link></p>
              <a href="#!">Lupa kata sandi?</a>
            </div>
          </div>

          <button type="submit" className="form-button form-button-primary">Masuk</button>
          <p className="separator">Atau</p>
          
          <button type="button" className="form-button form-button-google">
            <img src={googleIcon} alt="google" />
            <span>Masuk dengan Google</span>
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;