import React from 'react'
import { dividerClasses, Grid } from '@mui/material';
import data from '../../services/data.json'
import CombosCard from '../../components/Comboscard';
import { Typography } from '@mui/material';

const CombosList = () => {
  return (
    <div>
      <Typography variant="h4" align="left"> ComboList</Typography>
    <Grid  container spacing={2}>
    {data[0].combos.map(ele=>{
        // {console.log(ele);}
        return ( 
            <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                <CombosCard key={"card_key"+ele} data={ele} />
            </Grid>
        )
    })}
</Grid> 
    </div>
  )
}

export default CombosList