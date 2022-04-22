import { Dialog, Button } from '@material-ui/core'
import { useState } from 'react';
import './usertable.css'

function UserTable({ userList }) {
    const [dialogOpen, setOpen] = useState(false)
    const [user, setUser] = useState({})
    // console.log(userList);



    return (
        <div>
            <table>
                <tr>
                    <th>SR No</th>
                    <th>Name</th>
                    <th>Birth Date</th>
                    <th>Address</th>
                    <th>Gender</th>
                    <th>College</th>
                    <th>Hobbies</th>
                    <th>Country</th>
                    <th>Short Bio</th>
                    <th>Long Bio</th>
                </tr>
                {userList.map((user, index) => {
                    return (
                        <tr onClick={() => {
                            setUser(user);
                            setOpen(true)
                        }}
                            className="row-click"
                        >
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.birthdate}</td>
                            <td>{user.address}</td>
                            <td>{user.gender}</td>
                            <td>{user.college}</td>
                            <td>{user.hobbies }</td>
                            <td>{user.country}</td>
                            <td>{user.shortbio}</td>
                            <td>{user.longbio}</td>

                        </tr>
                    )
                })}

            </table>

            <Dialog open={dialogOpen} onClose={() => { setOpen(true) }}>
                <div style={{ padding: "20px", width: "400px"}}>

                <div style={{float: "right", cursor: "pointer"}}>
                        <h2><span onClick={()=>{setOpen(false)}}>X</span></h2>
                    </div>
                    <div><h2>User Details</h2></div>
                    <div><strong> Name: </strong>{user.name}</div>
                    <div><strong> BirthDate: </strong>{user.birthdate}</div>
                    <div><strong> Address: </strong>{user.address}</div>
                    <div><strong> Gender: </strong>{user.gender}</div>
                    <div><strong> College: </strong>{user.college}</div>
                    <div><strong> Hobbies: </strong>{user.hobbies}</div>
                    <div><strong> Country: </strong>{user.country}</div>
                    <div><strong> ShortBio: </strong>{user.shortbio}</div>
                    <div><strong> LongBio: </strong>{user.longbio}</div>
                    

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div><Button variant="contained" color="primary"
                            style={{ width: "150px", marginTop: "20px", marginBottom: "20px" }}>Update user</Button></div>
                        <div><Button variant="contained" color="secondary"
                            style={{ width: "150px", marginTop: "20px", marginBottom: "20px" }}>Delete user</Button></div></div>

                </div>
            </Dialog>
        </div>
    )
}

export default UserTable;