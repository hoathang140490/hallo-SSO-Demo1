import React from 'react';
import './styles.scss';

const Input = ({type = 'text', placeholder = ''}) => {
  return (
    <input type={type} className="input-custom" placeholder={placeholder} />
  );
};

export default Input;
