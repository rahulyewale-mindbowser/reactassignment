import {useState, useEffect} from 'react';
import './collegelist.css';
import {Grid, TextField, Switch, Dialog} from '@material-ui/core';
import * as services from '../../services';
import CollegeTable from '../../components/collegeTable'
import CollegeCard from "../../components/collegeCard"

function CollegeList(props) {
    const [collegeList, setCollegeList] = useState([])
    const [viewTable, setViewTable] = useState(true)
    const [searchText, setSearch] = useState("")
    const [dialogOpen, setOpen] = useState(false)
    const [college, setCollege] = useState({})

    const callSearchCollege = () => {
        
        if(searchText) {
            services.getCollegesAPI(searchText, "")
                .then(response => {
                    setCollegeList(response.data)
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }

    const returnViewComp = () => {
        return viewTable ? <CollegeTable collegeList={collegeList} /> :
                <Grid container>
                    {collegeList.map(ele => {
                        return <CollegeCard {...ele} />
                    })}
                </Grid>
    }

    return (
        <div style={{padding:"30px 50px 0 50px"}}>
            <div className="clg-header">College List ({collegeList?.length})</div>

            <div>
            <span>Card View</span><Switch checked={viewTable} onChange={()=>{setViewTable(!viewTable)}} /><span>Table View</span>
            </div>

            <div style={{marginBottom: "40px"}}>
                <TextField variant="standard" label="Search College" 
                    onChange={(e)=>{setSearch(e.target.value)}} 
                    style={{width: "500px"}}
                    onKeyDown={(e)=> {
                        if(e.key === "Enter") {
                            callSearchCollege()
                        }                        
                    }}
                />
            </div>

            {collegeList.length ? 
                viewTable ? <CollegeTable collegeList={collegeList} /> : <>
                        <Grid container spacing={1}>
                            {collegeList.map(ele => {
                                return <Grid item lg={3} md={4} sm={6}>
                                <CollegeCard {...ele} onCardClick={()=>{
                                    setCollege(ele);
                                    setOpen(true)
                                }}/>
                                </Grid>
                            })}
                        </Grid>
                </>
                : <h2>There is no colleges yet...!!!</h2>}

            <Dialog open={dialogOpen} onClose={()=>{setOpen(true)}}>
                <div style={{padding:"20px", width: "400px"}}>
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

export default CollegeList;