import './styles/header.scss';
import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../../atoms/logo/Logo';
import TextBox from '../../atoms/textBox/TextBox';
import Notification from '../../atoms/notification/Notification';
import Seperator from '../../atoms/seperator/Seperator';
import ProfileIdentifier from '../../molecules/profileIdentifier/ProfileIdentifier';
import CN from "classnames";
import { getUserFromToken } from '../../../utils';

function Header({ isOpenMenu, setIsOpenMenu, onSearch }) {

    const [username, setUsername] = useState("");

    useEffect(() => {
        // get logged users' username
        const user = getUserFromToken();
        setUsername(user)
    }, []);

    const HambergIconClasses = CN({
        "hamburg-icon hamburg-icon__open": isOpenMenu === true,
        "hamburg-icon": isOpenMenu === false,
    });

    const CloseIconClasses = CN({
        "close-icon close-icon__open": isOpenMenu === true,
        "close-icon": isOpenMenu === false,
    });

    const searchByDate = (e) => {
        if (e.key === "Enter") {
            onSearch(e.target.value)
        }
    }

    return (
        <>
            <div className='header'>
                <div className='logo-wrapper'>
                    <Logo size="default" />
                </div>
                <div className='element-wrapper'>
                    <div className='search-wrapper'>
                        <TextBox id="search" type="search" icon="search" size="small" placeholder="Search" onChange={(e) => searchByDate(e)} />
                    </div>
                    <div className='profile'>
                        <Notification />
                        <Seperator />
                        <ProfileIdentifier name={username} isDisplayName={true} />
                    </div>
                </div>
            </div>
            <div className='hamberg-header'>
                <div className={HambergIconClasses} >
                    <MenuIcon fontSize="large"
                        onClick={() => setIsOpenMenu(!isOpenMenu)}
                    />
                </div>
                <div className={CloseIconClasses} >
                    <CloseIcon fontSize="large"
                        onClick={() => setIsOpenMenu(!isOpenMenu)}
                    />
                </div>
                <Logo size="small" />
                <ProfileIdentifier isDisplayName={false} />
            </div>
        </>
    );
}

export default Header;
