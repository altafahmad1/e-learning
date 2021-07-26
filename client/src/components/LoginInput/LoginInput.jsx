import React from 'react';
import './styles.css';

export default function LoginInput(props) {
  return (
    <input
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      type={props.type}
      placeholder={props.greyText.toUpperCase()}
      minLength={props.minLength}
      className='login-input'
      required
    />
  );
}
