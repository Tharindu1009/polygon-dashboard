import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import moment from 'moment';

const apiKey = 'XMx9IYULCCmcq_r8FrvkepesNbZuBnT9'; //api.polygon.io API token
const API_URL = 'https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks';

export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        openCloseChartData: {}, volumeChartData: {}, high: "0.00", low: "0.00", open: "0.00",
        error: { errorStatus: false, errorMessage: "" }, searchDate: moment().subtract(2, 'days').format("YYYY-MM-DD")
    },
    reducers: {
        handleError: (state, action) => {
            state.error.errorStatus = true;
            state.error.errorMessage = action.payload;
        },
        clearError: (state) => {
            state.error.errorStatus = false;
            state.error.errorMessage = "";
        },
        setOpenCloseChartData: (state, action) => {
            state.openCloseChartData = action.payload;
        },
        setVolumeChartData: (state, action) => {
            state.volumeChartData = action.payload;
        },
        setCurrencyStatData: (state, action) => {
            state.high = action.payload.high;
            state.low = action.payload.low;
            state.open = action.payload.open;
        },
        setSearchDate: (state, action) => {
            state.searchDate = action.payload;
        },
    },
});

// fetch chart data for "Last Open & Close Prices" chart
export const getOpenCloseChartData = (date) => async (dispatch) => {
    try {
        axios.get(`${API_URL}/${date}`, {
            params: {
                apiKey: apiKey
            }
        }).then(function (response) {
            // filter latest 10 records for show
            const filteredResponse = response.data.results.slice(0, 10);
            // setup chart data object with response data
            const chartData = {
                labels: filteredResponse.map(result => result.T),
                datasets: [{
                    label: 'Open',
                    data: filteredResponse.map(result => ({ x: result.T, y: result.o })),
                    backgroundColor: '#1976d2',
                    borderColor: '#1976d2',
                    borderWidth: 1
                }, {
                    label: 'Close',
                    data: filteredResponse.map(result => ({ x: result.T, y: result.c })),
                    backgroundColor: '#06AA8D',
                    borderColor: '#06AA8D',
                    borderWidth: 1
                }]
            };
            dispatch(setOpenCloseChartData(chartData));
        }).catch(function (error) {
            dispatch(handleError(error));
        })
    } catch (err) {
        dispatch(handleError(err.message));
    }
};

// fetch chart data for "volume" chart
export const getVolumeChartData = (date) => async (dispatch) => {
    try {
        axios.get(`${API_URL}/${date}`, {
            params: {
                apiKey: apiKey
            }
        }).then(function (response) {
            // filter latest 6 records for show
            const filteredResponse = response.data.results.slice(0, 6);
            const labels = filteredResponse.map(result => result.T);
            const volumes = filteredResponse.map(result => result.v);
            // setup chart data object with response data
            const chartData = {
                labels: labels,
                datasets: [
                    {
                        label: 'Volumes',
                        data: volumes,
                        backgroundColor: '#1976d2',
                        borderColor: '#1976d2',
                        borderWidth: 1
                    }
                ]
            };
            dispatch(setVolumeChartData(chartData));
        }).catch(function (error) {
            dispatch(handleError(error));
        })
    } catch (err) {
        dispatch(handleError(err.message));
    }
};

// fetch statistic data for "Hign & Low & Open" indicators
export const getCurrencyStatData = (date) => async (dispatch) => {
    try {
        axios.get(`https://api.polygon.io/v1/open-close/AAPL/${date}`, {
            params: {
                apiKey: apiKey
            }
        }).then(function (response) {
            const statData = {
                high: response.data.high,
                low: response.data.low,
                open: response.data.open
            };
            dispatch(setCurrencyStatData(statData));
        }).catch(function (error) {
            dispatch(handleError(error));
        })
    } catch (err) {
        dispatch(handleError(err.message));
    }
};

export const { setOpenCloseChartData, setVolumeChartData, setCurrencyStatData, setSearchDate,
    handleError, clearError } = dashboardSlice.actions;
export default dashboardSlice.reducer;