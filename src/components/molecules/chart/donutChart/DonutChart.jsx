
import './styles/donutChart.scss';
import * as React from 'react';
import ChartTitle from '../../../atoms/chart/chartTitle/ChartTitle';
import GrowthIndicator from '../../../atoms/chart/growthIndicator/GrowthIndicator';

function DonutChart({ title, direction, percentage, content }) {
    return (
        <div className='donutChart'>
            <div className='chart-header'>
                <ChartTitle title={title} />
                <div className='indicator-wrapper'>
                    <GrowthIndicator direction={direction} percentage={percentage} content={content} />
                </div>
            </div>
        </div>
    );
}

export default DonutChart;

