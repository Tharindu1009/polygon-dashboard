
import './styles/loginSideBanner.scss';
import * as React from 'react';
import loginBanner from '../../../assets/images/loginBanner.png';

function LoginSideBanner() {
    return (
        <div className='loginSideBanner'>
            <img className='image' src={loginBanner} alt='Login Banner' />
        </div>
    );
}

export default LoginSideBanner;

