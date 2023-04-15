
import './styles/chartTitle.scss';
import * as React from 'react';

function ChartTitle({ title }) {
    return (
        <div data-testid="chartTitle" className='chartTitle'>
            {title}
        </div>
    );
}

export default ChartTitle;

