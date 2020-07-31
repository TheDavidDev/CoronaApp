import React from 'react';
import {Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from  './Kards.module.css'

const Kards = ({data: { confirmed, recovered, deaths, lastUpdate }}) => {
  console.log(confirmed);
  if(!confirmed) {
      return 'Loading...';
  }

    return (
      <div className={styles.container}>
        <Grid container spacing={3} justify="center">
          <Grid item component={Card}>
            <CardContent>
               <Typography color="textSecondary" gutterBottom>Infections</Typography> 
               <Typography variant="h5">Real Data</Typography>
               <Typography color="textSecondary">Real Date</Typography>
               <Typography variant="body2">Active cases of Corona19</Typography>         
            </CardContent>
          </Grid>
          <Grid item component={Card}>
            <CardContent>
               <Typography color="textSecondary" gutterBottom>Infections</Typography> 
               <Typography variant="h5">Real Data</Typography>
               <Typography color="textSecondary">Real Date</Typography>
               <Typography variant="body2">Number of recoveries from Corona19</Typography>         
            </CardContent>
          </Grid>
          <Grid item component={Card}>
            <CardContent>
               <Typography color="textSecondary" gutterBottom>Recovered</Typography> 
               <Typography variant="h5">Real Data</Typography>
               <Typography color="textSecondary">Real Date</Typography>
               <Typography variant="body2">Deceases of Corona19</Typography>         
            </CardContent>
          </Grid>  
        </Grid>
      </div>
    )
}

export default Kards;