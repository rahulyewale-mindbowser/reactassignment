
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,CardActions,Button,ButtonGroup } from '@mui/material';
import { Tooltip } from '@material-ui/core';
import data from '../../services/data.json'

export default function BurgerCard(props) {
    const [counter,setCounter]=React.useState(1);
    const addcart =()=>{
        props.data.price = props.data.price * counter
        props.data.quantity =counter
        data[0].cart.push(props.data)
        alert("Added to cart")

        // console.log(data[0].cart);

    }
    // console.log(props)
   
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
          <Tooltip title={props.data.description}>
        <CardMedia
          component="img"
          height="140"
          image={props.data.image}
          alt="Chicken burger"
        />
        </Tooltip>
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
      <Button size="small" m="2" style={{backgroundColor: '#12824C', color: '#FFFFFF',borderRadius:'4rem'}} onClick={addcart}>
          ADD +
        </Button>
      </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
