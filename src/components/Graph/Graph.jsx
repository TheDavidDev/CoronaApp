import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { line, Bar } from 'react-chatjs-2'; //wrapper for the charts  but need to install chart.js as well

import stykes from './Graph.module.css';

const Graph = () => {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
      const fetchAPIDaily = async () => {
        setDailyData( await fetchDailyData());
      }  

      console.log(dailyData);

      fetchAPIDaily();
    }, []);
    
    const lineChart = (
        dailyData[0]
        ? (
        <line
          data={{
              labels: dailyData(({ date }) => date),
              datasets: [{
                  data: dailyData(({ confirmed}) => confirmed),
                  label: 'Infections',
                  borderColor: '#3333ff',
                  fill: true,
              }, {
                  data: dailyData(({ deaths }) => deaths),
                  label: 'Decease',
                  borderColor: 'red',
                  backgroundColor: 'rgba(255, 10, 10 )',
                  fill: true,
              }],
          }}
        />) : null
    );
    return (
        <h1>Graph</h1>
    )
}

export default Graph;