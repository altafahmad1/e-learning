import React, { useState } from 'react';
import './styles.css';
import LoginInput from '../../components/LoginInput/LoginInput';
import LoginButton from '../../components/LoginButton/LoginButton';
import { Link } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='login-component'>
      <h1 className='logo'>
        <Link to='/'>
          <span className='logo-e'>E</span>-Learning
        </Link>
      </h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <LoginInput
          name={'email'}
          value={email}
          onChange={(e) => onChange(e)}
          type={'email'}
          greyText={'email'}
        />
        <LoginInput
          name={'password'}
          value={password}
          onChange={(e) => onChange(e)}
          type={'password'}
          greyText={'password'}
        />
        <Link className='forgot-password' to='/forgot-password'>
          Forgot your password?
        </Link>
        <LoginButton text={'LOG IN'} />
      </form>
      <p className='sign-up-text'>
        Don't have an account?
        <Link to='/signup' className='sign-up-text highlighted'>
          {' '}
          Sign Up
        </Link>
      </p>
    </div>
  );
}
