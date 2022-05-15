import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,CardActions,Button,ButtonGroup } from '@mui/material';
import { Tooltip } from '@material-ui/core';
import data from '../../services/data.json'

export default function FriesCard(props) {
    // console.log(props)
    const [counter,setCounter]=React.useState(1);
    const addcart =()=>{
        props.data.price =props.data.price * counter
        props.data.quantity =counter
        data[0].cart.push(props.data)
        // console.log(data[0].cart);

    }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>

        <CardMedia
          component="img"
          height="140"
          image={props.data.image}
          alt="Fries Item"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.data.name}
          </Typography>
          
          <CardActions style={{display:"flex",justifyContent:'space-around'}}>
        <Typography > ₹.{props.data.price}</Typography>
        <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={()=>{setCounter(counter+1)}}>+</Button>
        <Button >{counter}</Button>
        {counter>0 &&<Button onClick={()=>{setCounter(counter-1)}}>-</Button>}
      </ButtonGroup>
      <Button size="small" m="2" style={{backgroundColor: '#12824C', color: '#FFFFFF'}} onClick={addcart}>
          ADD +
        </Button>
      </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}