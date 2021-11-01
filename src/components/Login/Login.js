import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const redirect_URI = location.state?.from || '/';
  const { signInUsingGoogle } = useAuth();

  const handelGoogleSignIn = () => {
    signInUsingGoogle()
      .then(() => history.push(redirect_URI))
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <h1>This is Login</h1>
      <button onClick={handelGoogleSignIn}>Google</button>
    </div>
  );
};

export default Login;
