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
                            <td>{user.hobbies}</td>
                            <td>{user.country}</td>
                            <td>{user.shortbio}</td>
                            <td>{user.longbio}</td>

                        </tr>
                    )
                })}

            </table>

            <Dialog open={dialogOpen} onClose={() => { setOpen(true) }}>
                <div style={{ padding: "10px", width: "auto" }}>

                <div style={{float: "right", cursor: "pointer"}}>
                        <h2><span onClick={()=>{setOpen(false)}}>X</span></h2>
                    </div>
                    <div><h2>User Details</h2></div>
                    <div><p><strong> Name: </strong>{user.name}</p></div>
                    <div><p><strong> BirthDate: </strong>{user.birthdate}</p></div>
                    <div><p><strong> Address: </strong>{user.address}</p></div>
                    <div><p><strong> Gender: </strong>{user.gender}</p></div>
                    <div><p><strong> College: </strong>{user.college}</p></div>
                    <div><p><strong> Hobbies: </strong>{user.hobbies}</p></div>
                    <div><p><strong> Country: </strong>{user.country}</p></div>
                    <div><p><strong> ShortBio: </strong>{user.shortbio}</p></div>
                    <div><p><strong> LongBio: </strong>{user.longbio}</p></div>
                    

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div><Button variant="contained" color="primary"
                            style={{ width: "150px", marginTop: "20px", marginBottom: "50px" }}>Update user</Button></div>
                        <div><Button variant="contained" color="secondary"
                            style={{ width: "150px", marginTop: "20px", marginBottom: "50px" }}>Delete user</Button></div></div>

                </div>
            </Dialog>
        </div>
    )
}

export default UserTable;