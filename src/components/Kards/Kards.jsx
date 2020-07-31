import React from 'react';
import { Grid } from '@material-ui/core';
import CardComponents from './Kard/Kard';

import styles from  './Kards.module.css'
//import { callExpression } from '@babel/types';
const Information = ({ data: { confirmed, recovered, deaths, lastUpdate} }) => {
  if (!confirmed) {
    return 'Please wait...';
  }
  return (
      <div className={styles.container}>
        <Grid container spacing={3} justify="center">
            <CardComponents
               className={styles.infected}
                 cardTitle="Infections" 
                 value={confirmed.value} 
                 lastUpdate={lastUpdate}
                 cardSubtitle="Contagius of virus"
                 />
                 <CardComponents
                 className={styles.recovered}
                 cardTitle="Recovered"
                 value={recovered.value}
                 lastUpdate={lastUpdate}
                 cardSubtitle="People recovered from the virus"
                 />

               <CardComponents 
          className={styles.deaths}
          cardTitle="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Deceases caused by virus"
        />
      </Grid>
    </div>
  );
};
export default Information;