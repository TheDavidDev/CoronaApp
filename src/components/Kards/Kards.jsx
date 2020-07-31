import React from 'react';
import {Card, CardContent, Typography, Grid } from '@material-ui/core';

import styles from  './Kards.module.css'

const Kards = (props) => {
    console.log(props);

    return (
      <div className={styles.container}>
        <Grid container spacing={3} justify="center">
          <Grid item component={Card}>
            <CardContent>
               <Typography color="textSecondary" gutterBottom>Infections</Typography> 
            </CardContent>
          </Grid>  
        </Grid>
      </div>
    )
}

export default Kards;