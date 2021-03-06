import {useEffect,useState} from 'react';
import {Dialog, Paper ,Button} from '@material-ui/core';
import './detailcard.css'

function UserCard(props) {

    const [dialogOpen, setOpen] = useState(false)
    const [user, setUser] = useState({})

    useEffect(()=>{
        // console.log("call")
        console.log(props);
    })

    return (
        <Paper className="card-box">
            <div className="card-paper row-click" onClick={() => {
                            setUser(user);
                            setOpen(true) 
                        }}>
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
            <Dialog open={dialogOpen} onClose={() => { setOpen(true) }}>
                <div style={{ padding: "20px", width: "auto"}}>

                <div style={{float: "right", cursor: "pointer"}}>
                        <h2><span onClick={()=>{setOpen(false)}}>X</span></h2>
                    </div>
                    <div><h2>User Details</h2></div>
                    <div><strong> Name: </strong>{props.data.name}</div>
                    <div><strong> BirthDate: </strong>{props.data.birthdate}</div>
                    <div><strong> Gender: </strong>{props.data.gender}</div>
                    <div><strong> Address: </strong>{props.data.address}</div>
                    <div><strong> College: </strong>{props.data.college}</div>
                    <div><strong> Hobbies: </strong>{props.data.hobbies}</div>
                    <div><strong> Country: </strong>{props.data.country}</div>
                    <div><strong> ShortBio: </strong>{props.data.shortbio}</div>
                    <div><strong> LongBio: </strong>{props.data.longbio}</div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div><Button variant="contained" color="primary"
                            style={{ width: "150px", marginTop: "20px", marginBottom: "20px" }}>Update user</Button></div>
                        <div><Button variant="contained" color="secondary"
                            style={{ width: "150px", marginTop: "20px", marginBottom: "20px" }}>Delete user</Button></div></div>

                </div>
            </Dialog>
        </Paper>
    )
}

export default UserCard;
