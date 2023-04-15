
import './styles/singleBarChart.scss';
import * as React from 'react';
import ChartTitle from '../../../atoms/chart/chartTitle/ChartTitle';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function SingleBarChart({title, chartData}) {
    return (
        <div className='singleBarChart'>
            <ChartTitle title={title}/>
            <div className='chart-container'>
                {chartData.datasets && <Bar data={chartData} /> }
            </div>
        </div>
    );
}

export default SingleBarChart;

