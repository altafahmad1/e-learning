import React from 'react';
import './styles.css';

export default function LoginButton(props) {
  return (
    <button type='submit' className='login-button'>
      {props.text}
    </button>
  );
}
