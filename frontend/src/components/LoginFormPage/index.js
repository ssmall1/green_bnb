import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const demoSubmit = (e) => {
    e.preventDefault();
    const credential = 'Demo-lition';
    const password = 'password';
    return dispatch(sessionActions.login({ credential, password }))
    .catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
  }

  return (
    <div className="login-max">
      <div className="login-wrapper">
        <div className="login-form">
          <form id="login" onSubmit={handleSubmit}>
            <ul className="errors">
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
              Username or Email
            </label>
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
            <label>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="submit-buttons">
              <button type="submit">Log In</button>
              <button id="demo-button" onClick={demoSubmit} type="button">Demo Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginFormPage;