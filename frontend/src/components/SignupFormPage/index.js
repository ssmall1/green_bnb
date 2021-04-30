import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  const demoSubmit = (e) => {
    e.preventDefault();
    const credential = 'Demo-lition';
    const password = 'password';
    return dispatch(sessionActions.login({ credential, password }))
    .catch(async (res) => {
      const data = await res.json();
      // if (data && data.errors) setErrors(data.errors);
    });
  }

  return (
    <div className="signup-max">
      <div className="signup-wrapper">
        <div className="signup-form-wrapper">
          <form onSubmit={handleSubmit} className="signup-form">
            <ul className="errors">
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
              Email
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Username
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <label>
              Confirm Password
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>
            <button type="submit">Sign Up</button>
            <button onClick={demoSubmit} type="button">Demo Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupFormPage;