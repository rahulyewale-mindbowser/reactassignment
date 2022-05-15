
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,CardActions,Button } from '@mui/material';
import data from '../../services/data.json'

export default function CombosCard(props) {
  const [counter,setCounter]=React.useState(1);
    const addcart =()=>{
        data[0].cart.push(props.data)
        // console.log(data[0].cart);

    }
  return (
    <Card sx={{height:320 , maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.data.image}
          alt="Chicken burger"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
             {props.data.name}
          </Typography>
          <CardActions style={{display:"flex",justifyContent:'space-around'}}>
        <Typography > ₹.{props.data.price}</Typography>
        <Button size="small" style={{backgroundColor: '#12824C', color: '#FFFFFF'}} onClick={addcart}>
          ADD
        </Button>
      </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}