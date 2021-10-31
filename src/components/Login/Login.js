import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
  const { signInUsingGoogle } = useFirebase();
  return (
    <div>
      <h1>This is Login</h1>
      <button onClick={signInUsingGoogle}>Google</button>
    </div>
  );
};

export default Login;
