
import './styles/growthCard.scss';
import * as React from 'react';
import GrowthIndicator from '../../../atoms/chart/growthIndicator/GrowthIndicator';

function GrowthCard({ title, count, direction, percentage, content }) {
    return (
        <div className='growthCard'>
            <div className='column'>
                <div className='title'>{title}</div>
                <div className='count'>{count}</div>
                <div className='growth-stat-wrapper'>
                    <GrowthIndicator direction={direction} percentage={percentage} content={content} />
                </div>
            </div>
        </div>
    );
}

export default GrowthCard;

