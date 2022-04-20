import {useEffect} from 'react';
import {Paper} from '@material-ui/core';
import './detailcard.css'

function UserCard(props) {

    useEffect(()=>{
        // console.log("call")
        console.log(props);
    })

    return (
        <Paper className="card-box">
            <div className="card-paper">
                <div className="name-font card-text"> <strong>Name:</strong> {props.data.name}</div>
                <div className="name-font card-text"> <strong>BirthDate:</strong> {props.data.birthdate}</div>
                <div className="name-font card-text"> <strong>Address:</strong> {props.data.address}</div>
                <div className="name-font card-text"> <strong>Gender:</strong> {props.data.gender}</div>
                <div className="name-font card-text"> <strong>College:</strong> {props.data.college}</div>
                <div className="name-font card-text"> <strong>Hobbies:</strong> {props.data.hobbies}</div>
                <div className="name-font card-text"> <strong>Country:</strong> {props.data.country}</div>
                <div className="name-font card-text">
                    <div><strong>Short Bio:</strong>{props.data.shortbio}</div>

                    <div className="name-font card-text"> <strong>Long Bio:</strong> {props.data.longbio}</div>
                </div>
            </div>            
        </Paper>
    )
}

export default UserCard;
