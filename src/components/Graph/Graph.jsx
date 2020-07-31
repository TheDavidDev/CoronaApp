import React, { useState, useEffect } from 'react';
import { line, Bar } from 'react-chartjs-2'; //wrapper for the charts  but need to install chart.js as well

import { fetchDailyData } from '../../api';

import styles from './Graph.module.css';

const Graph = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
      const fetchAPIDaily = async () => {
        setDailyData( await fetchDailyData());
      }  

      console.log(dailyData);

      fetchAPIDaily();
    }, []);
    
    const lineChart = (
        dailyData.length
        ? (
        <line
          data={{
              labels: dailyData.map(({ date }) => date),
              datasets: [{
                  data: dailyData.map(({ confirmed}) => confirmed),
                  label: 'Infections',
                  borderColor: '#3333ff',
                  fill: true,
              }, {
                  data: dailyData.map(({ deaths }) => deaths),
                  label: 'Decease',
                  borderColor: 'red',
                  backgroundColor: 'rgba(255, 10, 10 )',
                  fill: true,
              }],
          }}
        />) : null
    );
    return (
        <div className={styles.comtainer}>
          {lineChart}
        </div>
    )
};

export default Graph;