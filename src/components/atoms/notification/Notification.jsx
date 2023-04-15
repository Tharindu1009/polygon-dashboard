import './styles/notification.scss';
import * as React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Notification() {
    return (
        <div className='notification'>
            <div className='online-indicator'></div>
            <NotificationsIcon className='icon' />
        </div>
    );
}

export default Notification;
