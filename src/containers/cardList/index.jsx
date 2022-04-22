import {useState, useEffect} from 'react';
import UserCard from '../../components/userCard';
import {Grid, Button} from '@material-ui/core';
import UserTable from '../../components/userTable';
import Switch from "@material-ui/core/Switch";

function CardList(props) {
    const [userList, setUserList] = useState([])
    const [state, setState] = useState(false);

    function handleSwitchChange (e) {
      setState(e.target.checked);
      // Add actions here for when the switch is triggered
    };

    useEffect(()=>{
        let userArr = JSON.parse(localStorage.getItem("userList"))

        if(userArr){
            setUserList(userArr)
        }

        
    }, [])

    const clearList = () => {
        setUserList([])
        localStorage.setItem("userList", JSON.stringify([]))
    }


    return (
        <div style={{padding: "0 50px"}}>
           <div style={{display:'flex',justifyContent:'space-between'}}>
           <Button variant="contained" color="primary"
                style={{width: "200px", marginTop: "20px", marginBottom: "50px"}}
                onClick={()=>{clearList()}}
            >
                CLEAR USER LIST
            </Button>
            
      <div style={{textAlign:"right",marginTop: "20px", marginBottom: "50px"}}>
      {"Table View"}
          <Switch
        checked={state}
        onChange={handleSwitchChange}
        color="primary" 
        align ="right"
      />{"Card View"}
      </div>
            
           </div>

            <br/>

            {userList.length ? 
                
                (state === true)?<Grid container spacing={2}>
                {userList.map(ele=>{
                    return ( 
                        <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                            <UserCard key={"card_key"+ele} data={ele} />
                        </Grid>
                    )
                })}
            </Grid> :
              
                   <UserTable userList={userList}/>
               : 
            <h1>There is no user added yet...!!!</h1>}
        </div>
    )
}

export default CardList;