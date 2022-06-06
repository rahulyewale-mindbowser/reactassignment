import React from 'react'
import { useNavigate } from "react-router-dom";
import './header.css'

const Header = props => {
    const navigate = useNavigate();
  return (
    <div className='navbar'>
        <div  onClick={()=>{navigate("/userlist")}}>User List</div>
            <div  onClick={()=>{navigate("/userform")}}>User Form</div>
            <div  onClick={()=>{navigate("/colleges")}}>Colleges</div>
        </div>
  )
}


export default Header