
import './styles/sideMenu.scss';
import React from 'react';
import SideMenuItem from '../../atoms/sideMenuItem/SideMenuItem';
import SupportLink from '../../atoms/supportLink/SupportLink';
import Button from '../../atoms/button/Button';

function SideMenu({ menuRoutes, isOpenMenu, onChange }) {

    const onItemClicked = (url) => {
        return onChange(url);
    };

    return (
        <div className={`sidemenu ${isOpenMenu ? 'open' : ''}`}>
            {/* iterate sidemenu elements */}
            {menuRoutes.map((route) => {
                return <SideMenuItem title={route.name} icon={route.icon} path={route.path}
                    onItemClicked={() => onItemClicked(route.path)} />;
            })}
            <div>
                <div className='support-label'>Support</div>
                <SupportLink title="Chat" icon="chat" />
                <SupportLink title="FAQ" icon="faq" />
            </div>
            <div className='button-wrapper'>
                <Button type="dark" label="Dark Mode"/>
            </div>
        </div>
    );
}

export default SideMenu;
