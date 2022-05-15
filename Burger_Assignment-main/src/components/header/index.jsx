import React from 'react'
import { useNavigate } from "react-router-dom";
import './header.css'
import Box from '@mui/material/Box';
import data from '../../services/data.json'

const Header = () => {
  const navigate = useNavigate();

const senddata =()=>{
  console.log(data[0].cart);
  alert(JSON.stringify(data[0].cart))
}
    return (
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        p: 1,
        mb:1,
        bgcolor:"primary.main",
        color:'white',
        borderRadius: 1,
        
      }}
    >
            <div className="clickable nav-link"  onClick={()=>{navigate("/burger")}}>Burger</div>
            <div className="clickable nav-link"  onClick={()=>{navigate("/frieslist")}}>Frieslist</div>
            <div className="clickable nav-link"  onClick={()=>{navigate("/beverage")}}>Beverages</div>
             <div className="clickable nav-link"  onClick={()=>{navigate("/combos")}}>Combos</div>
             <div className="clickable nav-link"  onClick={senddata}>Place order</div>
        </Box>
    )
}

export default Header