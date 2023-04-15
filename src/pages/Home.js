
import '../styles/home.scss';
import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet } from "react-router-dom";
import Header from '../components/organisms/header/Header';
import SideMenu from '../components/organisms/sideMenu/SideMenu';
import { menuRoutes } from '../routes/menuRoutes';
import CN from "classnames";
import { useDispatch } from "react-redux";
import { setSearchDate } from "../redux/features/dashboard";
import { checkUserLoginStatus } from '../utils';

function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [selectedRoute, setSelectedRoute] = useState("dashboard");

    useEffect(() => {
        // check user validity. if user is unauthorized, should redirect to login page,
        if (!checkUserLoginStatus()) {
            navigate("/")
        }
    }, []);

    const ContentClasses = CN({
        "content content__show": isOpenMenu === false,
        "content content__hide": isOpenMenu === true,
    });

    // navigate to relavant page, once click a sidemenu item
    const setRoute = (url) => {
        setIsOpenMenu(false)
        navigate(url)
    }

    // dispatch entered search value to store
    const setSearchValue = (value) => {
        dispatch(setSearchDate(value));
    }

    return (
        <>
            <Header isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} onSearch={setSearchValue} />
            <div className='home-container'>
                <SideMenu menuRoutes={menuRoutes} isOpenMenu={isOpenMenu} onChange={(url) => setRoute(url)}
                    selectedRoute={selectedRoute} />
                <div className={ContentClasses}>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Home;
