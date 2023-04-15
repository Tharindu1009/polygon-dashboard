
import '../styles/dashboard.scss';
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import DashboardBanner from '../components/molecules/dashboardBanner/DashboardBanner';
import SingleBarChart from '../components/molecules/chart/singleBarChart/SingleBarChart';
import GrowthCard from '../components/molecules/chart/growthCard/GrowthCard';
import DoubleBarChart from '../components/molecules/chart/doubleBarChart/DoubleBarChart';
import DonutChart from '../components/molecules/chart/donutChart/DonutChart';
import { useSelector, useDispatch } from "react-redux";
import { getOpenCloseChartData, getVolumeChartData, getCurrencyStatData } from "../redux/features/dashboard";

function Dashboard() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("Welcome to your dashboard!")
  const [description, setDescription] = useState(`Try our new Admin Dashboard Template, 
  build with live Ant-Design components. Customize it to your needs and release to production!`)
  const { openCloseChartData, volumeChartData, high, low, open, searchDate } = useSelector((state) => state.dashboard);

  useEffect(() => {
    // fetch Chart data in initial page loading
    dispatch(getOpenCloseChartData(searchDate));
    dispatch(getVolumeChartData(searchDate));
    dispatch(getCurrencyStatData(searchDate));
  }, [searchDate]);

  return (
    <div className='dashboard'>
      <Grid container columnSpacing={1} rowGap={1}>
        <Grid item xs={12} md={8} className='banner-container'>
          <DashboardBanner title={title} description={description} />
        </Grid>
        <Grid item xs={12} md={4}>
          <SingleBarChart title="Volume Chart" chartData={volumeChartData} />
        </Grid>
        <Grid item xs={12} md={4}>
          <GrowthCard title="High" count={high} direction="up" percentage="1.10" content="Since yesterday" />
        </Grid>
        <Grid item xs={12} md={4}>
          <GrowthCard title="Low" count={low} direction="up" percentage="1.10" content="Since yesterday" />
        </Grid>
        <Grid item xs={12} md={4}>
          <GrowthCard title="Open" count={open} direction="up" percentage="1.10" content="Since yesterday" />
        </Grid>
        <Grid item xs={12} md={8}>
          <DoubleBarChart title="Last Open & Close Prices" chartData={openCloseChartData} />
        </Grid>
        <Grid item xs={12} md={4}>
          <DonutChart title="Chart" direction="up" percentage="1.10" content="Since yesterday" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
