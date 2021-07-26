import React, { useState } from 'react';
import './styles.css';
import LoginInput from '../../components/LoginInput/LoginInput';
import LoginButton from '../../components/LoginButton/LoginButton';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log('Passwords do not match.');
    } else {
      console.log(formData);
    }
  };

  return (
    <div className='signup-component'>
      <h1 className='logo'>
        <Link to='/'>
          <span className='logo-e'>E</span>-Learning
        </Link>
      </h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <LoginInput
          name={'name'}
          value={name}
          onChange={(e) => onChange(e)}
          type={'text'}
          greyText={'name'}
        />
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
          minLength={6}
        />
        <LoginInput
          name={'confirmPassword'}
          value={confirmPassword}
          onChange={(e) => onChange(e)}
          type={'password'}
          greyText={'confirm password'}
          minLength={6}
        />
        <LoginButton text={'SIGN UP'} />
      </form>
      <p className='sign-in-text'>
        Already have an account?
        <Link to='/login' className='sign-in-text highlighted'>
          {' '}
          Log In
        </Link>
      </p>
    </div>
  );
}
