
import '../styles/login.scss';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import LoginSideBanner from '../components/molecules/loginSideBanner/LoginSideBanner'
import LoginForm from '../components/molecules/loginForm/LoginForm'

function Login() {
  return (
    <div className='login'>
      <div className='login-container'>
        <Grid container>
          <Grid item xs={12} md={6}>
            <LoginForm />
          </Grid>
          <Grid item xs={12} md={6}>
            <LoginSideBanner />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Login;

