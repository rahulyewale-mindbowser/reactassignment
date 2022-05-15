import React from 'react'
import {Grid, Button} from '@material-ui/core';
import data from '../../services/data.json'
import FriesCard from '../../components/Friescard';
import { Typography } from '@mui/material';

const FriesList = () => {
    // console.log(data[0].burger[0]);
  return (
    <div>
        <Typography variant="h4" align="left"> FriesList</Typography>
        <Grid container spacing={2}>
                {data[0].fries.map(ele=>{
                    // {console.log(ele);}
                    return ( 
                        <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                            <FriesCard key={"card_key"+ele} data={ele} />
                        </Grid>
                    )
                })}
            </Grid> 
    </div>
  )
}

export default FriesList