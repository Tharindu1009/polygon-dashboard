
import './styles/doubleBarChart.scss';
import * as React from 'react';
import ChartTitle from '../../../atoms/chart/chartTitle/ChartTitle';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function DoubleBarChart({ title, chartData }) {
    return (
        <div className='doubleBarChart'>
            <ChartTitle title={title} />
            <div>
                {chartData.datasets && <Bar data={chartData} /> }
            </div>
        </div>
    );
}

export default DoubleBarChart;

