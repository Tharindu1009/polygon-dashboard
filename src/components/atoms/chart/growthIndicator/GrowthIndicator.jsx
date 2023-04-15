
import './styles/growthIndicator.scss';
import * as React from 'react';
import CN from "classnames";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function GrowthIndicator({ direction, percentage, content }) {

    const IconClasses = CN({
        "icon icon__up": direction === "up",
        "icon icon__down": direction === "down",
    });

    return (
        <div data-testid="growthIndicator" className='growthIndicator'>
            {direction === "up" && <ArrowUpwardIcon data-testid="upArrow" className={IconClasses} />}
            {direction === "down" && <ArrowDownwardIcon data-testid="downArrow" className={IconClasses} />}
            <div className='content'>
                <div className='percentage'>{percentage}</div> %
                <div className='descrtption'>{content}</div>
            </div>
        </div>
    );
}

export default GrowthIndicator;

