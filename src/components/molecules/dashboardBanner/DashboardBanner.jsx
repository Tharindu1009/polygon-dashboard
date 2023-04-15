
import './styles/dashboardBanner.scss';
import * as React from 'react';
import dashboardBannerImage from '../../../assets/images/dashboardBanner.png';

function DashboardBanner({ title, description }) {
    return (
        <div className='dashboardBanner' data-testid="dashboardBanner">
            <div className='description-wrapper'>
                <div className='description-title'>{title}</div>
                <div className='description-content'>{description}</div>
            </div>
            <div className='image-wrapper'>
                <img className='image' src={dashboardBannerImage} alt='Dashboard Banner' />
            </div>
        </div>
    );
}

export default DashboardBanner;

