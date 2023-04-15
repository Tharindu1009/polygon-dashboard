
import './styles/loginForm.scss';
import React, { useState } from 'react';
import Link from '../../atoms/link/Link'
import Grid from '@mui/material/Grid';
import TextBox from '../../atoms/textBox/TextBox'
import CheckboxInput from '../../atoms/checkboxInput/CheckboxInput'
import Button from '../../atoms/button/Button'
import Snackbar from '@mui/material/Snackbar';
import Alert from '../../atoms/alert/Alert';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, clearError } from "../../../redux/features/login";

function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { errorStatus, errorMessage } = useSelector((state) => state.login.error);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isInitStage, setIsInitStage] = useState(true);

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(clearError());
    };

    // submit login form
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsInitStage(false)
        if (username !== "" && password !== "") {
            dispatch(loginUser({ username: username, password: password }, navigate));
        }
    }

    return (
        <div className='loginForm' data-testid="loginForm">
            {/* Login form */}
            <form onSubmit={handleSubmit}>
                <TextBox id="username" type="text" icon="user" size="small" placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    error={!isInitStage && username === ""}
                    helperText={!isInitStage && username === "" ? "Required username" : ""} />
                <TextBox id="password" type="password" icon="lock" size="small" placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    error={!isInitStage && password === ""}
                    helperText={!isInitStage && password === "" ? "Required password" : ""} />
                <Grid container>
                    <Grid xs={7}>
                        <CheckboxInput size="small" label="Remember me" />
                    </Grid>
                    <Grid xs={5} className='pwd-label'>
                        <Link title="Forgot Password" />
                    </Grid>
                </Grid>
                <div className='btn-wrapper'>
                    <Button type="submit" label="Log in" />
                </div>
                <div className='reg-wrapper'>
                    Or <div className='link-wrapper'>
                        <Link title="register now!" />
                    </div>
                </div>
            </form>
            {/* Danger Alert */}
            <Snackbar open={errorStatus} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {errorMessage}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default LoginForm;

