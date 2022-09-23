import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import {
  saveUserEmail,
  saveMealsToken,
  saveDrinksToken,
} from '../services/localStorage';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    saveUserEmail(user);
    saveDrinksToken('1');
    saveMealsToken('1');
    history.push('/meals');
  };

  useEffect(() => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const emailCondition = emailRegex.test(email);
    const minimumPasswordLength = 6;
    const passwordCondition = password.length > minimumPasswordLength;
    if (emailCondition && passwordCondition) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="email">
          Email
          <input
            data-testid="email-input"
            type="email"
            id="email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            data-testid="password-input"
            type="password"
            id="password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <button
          data-testid="login-submit-btn"
          type="submit"
          disabled={ isDisabled }
        >
          Login
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
  history: propTypes.shape({
    push: propTypes.func,
  }).isRequired,
};

export default Login;
