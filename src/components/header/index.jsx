import { useNavigate } from "react-router-dom";


function Header(props) {
    const navigate = useNavigate();

    return (
        <div style={{height: "60px", width:"100%", backgroundColor: "#f3f3f3", 
                    display: "flex"}}>
            <div style={{flex:"1"}}><div className="mb-text">Users</div></div>
            <div className="clickable nav-link" onClick={()=>{navigate("/userlist")}}>User List</div>
            <div className="clickable nav-link" onClick={()=>{navigate("/userform")}}>User Form</div>
            {/* <div className="clickable nav-link" onClick={()=>{navigate("/colleges")}}
             style={{marginRight: "30px"}}>Colleges</div> */}
        </div>
    )
}

export default Header;