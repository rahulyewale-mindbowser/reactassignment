import React from 'react'
import BeverageCard from '../../components/Beveragecard';
import {Grid, Button} from '@material-ui/core';
import data from '../../services/data.json'
import { Typography } from '@mui/material';

const BeverageList = () => {
  return (
    <div>
        <Typography align='left' variant='h4'>BeverageList</Typography>
    <Grid container spacing={2}>
            {data[0].beverages.map(ele=>{
                // {console.log(ele);}
                return ( 
                    <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                        <BeverageCard key={"card_key"+ele} data={ele} />
                    </Grid>
                )
            })}
        </Grid> 
</div>
  )
}

export default BeverageList