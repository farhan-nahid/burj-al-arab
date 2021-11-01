import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import React from 'react';
import toast from 'react-hot-toast';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const redirect_URI = location.state?.from || '/';
  const { signInUsingGoogle } = useAuth();

  const handelGoogleSignIn = () => {
    signInUsingGoogle()
      .then(() => {
        toast.loading('Loading...');
        history.push(redirect_URI);
        toast.dismiss();
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <Container className='login'>
      <h1>This is Login</h1>
      <Button onClick={handelGoogleSignIn} variant='contained'>
        <GoogleIcon />
        Google
      </Button>
    </Container>
  );
};

export default Login;
