import './styles/logo.scss';
import * as React from 'react';
import CN from "classnames";
import LogoImage from '../../../assets/images/logo.png';

function Logo({ size }) {

    const LogoClasses = CN({
        "logo logo__default": size === "default",
        "logo logo__small": size === "small",
    });

    return (
        <div className={LogoClasses}>
            <img className='image' src={LogoImage} alt='Logo' />
        </div>
    );
}

export default Logo;
