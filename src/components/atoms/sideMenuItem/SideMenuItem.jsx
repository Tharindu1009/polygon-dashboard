
import './styles/sideMenuItem.scss';
import * as React from 'react';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsIcon from '@mui/icons-material/Settings';

function SideMenuItem({ title, icon, path, onItemClicked }) {
    return (
        <div data-testid="sideMenuItem" className='sideMenuItem' onClick={() => onItemClicked(path)}>
            {icon === "dashboard" && <BarChartIcon data-testid="dashboardMenuItem" />}
            {icon === "orders" && <ShoppingCartIcon data-testid="ordersMenuItem" />}
            {icon === "account" && <PersonOutlineIcon data-testid="acoountMenuItem" />}
            {icon === "settings" && <SettingsIcon data-testid="settingsMenuItem" />}
            <div className='title'>{title}</div>
        </div>
    );
}

export default SideMenuItem;

