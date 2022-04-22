import {Dialog} from '@material-ui/core'
import {useState, useEffect} from 'react';

function CollegeTable(props) {
    const [dialogOpen, setOpen] = useState(false)
    const [college, setCollege] = useState({})

    return (
        <div>
            <table>
                <tr>
                    <th>SR No</th>
                    <th>College</th>
                    <th>Country</th>
                </tr>
                {props.collegeList.map((ele, index)=>{
                    return (
                        <tr onClick={() => { 
                                setCollege(ele); 
                                setOpen(true)
                            }}
                            className="row-click"
                        >
                            <td>{index+1}</td>
                            <td>{ele.name}</td>
                            <td>{ele.country}</td>
                        </tr>
                    )  
                })}
                
            </table>

            <Dialog open={dialogOpen} onClose={()=>{setOpen(true)}}>
                <div style={{padding:"10px"}}>
                    <div style={{float: "right", cursor: "pointer"}}>
                        <h2><span onClick={()=>{setOpen(false)}}>X</span></h2>
                    </div>
                    <div><h2>College Details</h2></div>
                    <div><strong>College Name:</strong>{college.name}</div>
                    <div><strong>Country:</strong>{college.country}</div>
                </div>
            </Dialog>
        </div>
    )
}

export default CollegeTable;