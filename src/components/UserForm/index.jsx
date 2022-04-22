import { useState, useEffect } from 'react';
import './userform.css';
import { TextField, Button,FormHelperText } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import {FormControlLabel,RadioGroup ,Radio,FormLabel,Select,MenuItem,InputLabel,Checkbox,FormGroup,FormControl} from '@mui/material';
import * as services from '../../services';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const hobbie =["Reading", "Gaming", "Traveling", "Drawing"];

function UserForm() {
    const navigate = useNavigate();


    const [name, setName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [address, setAddress] = useState("");

    const [collegelist, setCollegelist] = useState([]);
    const [college, setCollege] = useState("");

    const [gender, setGender] = useState("");

    const [countrylist, setCountrylist] = useState([]);
    const [country, setCountry] = useState("");

    const [hobbies, setHobbies] = useState([]);
    const [visible, setVisible] = useState(false);
    const[otherStr, setStr]= useState("");


    const [shortbio, setShortbio] = useState("");
    const [longbio, setLongbio] = useState("");

    const[errors,setErrors]=useState({});

    // const countryValid = () =>{
    //   if(country.length===0){
    //     return ("Select country, field cannot be empty*");
    //   }
    //   else{
    //     return ("");
    //   }
    // }
    
    const nameValid = () =>{
      if(name.length===0){
        return ("This field is Required*");
      }else if(name.trim().length===0){
        return ("Enter valid name, spaces detected");
      }else if(name.length<2){
        return ("Single character not allowed*")
      }
      else{
        return ("");
      }
    }
    
    const addressValid = () =>{
      if(address.length===0){
        return ("This field is Required*");
      }else if(address.trim().length===0){
        return ("Enter valid Bio, spaces detected*");
      }else if(address.length<3){
        return ("Address too short*")
      }
      else if(address.length>150){
        return ("Address too Long*")
      }
      else{
        return ("");
      }
    }
    
    const shortbioValid = () =>{
      if(shortbio.length===0){
        return ("This field is Required*");
      }else if(shortbio.trim().length===0){
        return ("Enter valid Bio, spaces detected*");
      }else if(shortbio.length<10){
        return ("Bio too short*")
      }
      else if(shortbio.length>30){
        return ("Bio too Long*")
      }
      else{
        return ("");
      }
    }
    
    
    
    const longbioValid = () =>{
      if(longbio.length===0){
        return ("This field is Required*");
      }else if(longbio.trim().length===0){
        return ("Enter valid Bio, spaces detected*");
      }else if(longbio.length<50){
        return ("Bio too short*")
      }
      else if(longbio.length>100){
        return ("Bio too Long*")
      }
      else{
        return ("");
      }
    }
    
    const hobbiesValid = () =>{
      if(hobbies.length===0){
        return ("This field is required");
      }
      else{
        return ("");
      }
    } 
    
    const validate = () =>{
        let temp = {}
        temp.name = nameValid();
        temp.address= addressValid();
        // temp.country = countryValid();
        temp.hobbies = hobbiesValid();
        temp.college = college.length!==0 ? "" :"This field is required";
        temp.shortbio = shortbioValid();
        temp.longbio = longbioValid();
        setErrors({
          ...temp
        })
    
        return Object.values(temp).every(x => x === "")
      }
    


    const setEmpty = () => {
        setName("")
        setBirthdate("")
        setAddress("")
        setCollege("")
        setCountry("")
        setGender("")
        setHobbies("")
        setShortbio("")
        setLongbio("")
    }

    const setLocalstorage = (ele) => {
        let userArr = JSON.parse(localStorage.getItem("userList"))

        if (userArr) {
            userArr.unshift(ele)
            localStorage.setItem("userList", JSON.stringify(userArr))
        } else {
            localStorage.setItem("userList", JSON.stringify([ele]))
        }
    }

            const onSubmitFun = () => {
                // e.preventDefault();
                if(validate()){
                    var user = {
                        name: name,
                        birthdate: birthdate,
                        college: college,
                        hobbies: hobbies,
                        country: country,
                        gender: gender,
                        address: address,
                        shortbio: shortbio,
                        longbio: longbio
                    };
                    setEmpty()

            setLocalstorage(user)

            navigate("/userlist")

        }

                }
            
            


    // const handleGender = (event) => {
    //     setGender((event.target.value));
    // };

    const handleCountry = (e) => {
        setCountry(e.target.value);

        services.getCollegesAPI(e.target.value,"")
        .then(response => {
             console.log(response.data);
            setCollegelist(response.data);
        })
        .catch(e => {
            console.log(e)
        })
     }

    const handleHobbies = (e) => {
        // setHobbies(hobbies + "," + e.target.name)
        const index = hobbies.indexOf(e.target.value)
        if(index===-1){
            setHobbies([...hobbies,e.target.value])

        }
        else{
            setHobbies(hobbies.filter((hobbie)=>hobbie !==e.target.value))
        }
    }

    const handleOthertextEvent =(e)=>{
        setStr(e.target.value)
    }

    useEffect(() => {
        (async function () {


            

            await services.getcountries()
                .then(response => {
                    // console.log(response.data);
                    setCountrylist(response.data);

                })
                .catch(e => {
                    console.log(e)
                })



        }());
    }, [])

    

   
    
    return (
        <div className="form-container">
            <div>
                <h1> Add User Form</h1>

            </div>
            <div className="form-box">
                <TextField id="name" label="Name" name="uname" variant="outlined" value={name} 
                    className="form-text-box" onChange={(e) => { setName(e.target.value) }} required
                    {...(errors.name && {error:true,helperText:errors.name})}
                    />

                {/* <input type="text" name="date" id="date" value={birthdate} className="form-text-box date" placeholder='Select Birth date' onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    onChange={(e) => { setBirthdate(e.target.value) }} required/> */}

                {/* <TextField id="date" label="Select Birth Date" value={birthdate} className="form-text-box date" onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")} variant='outlined' onChange={(e) => { setBirthdate(e.target.value) }} max={date} /> */}

 <FormControl fullWidth className='form-text-box' >
          <LocalizationProvider dateAdapter={AdapterDateFns}  >
            <MobileDatePicker

              label="Select Birth Date"
              inputFormat="dd/MM/yyyy"
              maxDate={new Date()}
              value={birthdate}
              onChange={(newValue) => {setBirthdate(newValue.toLocaleDateString())}}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          </FormControl>
                    


                <TextField id="address" label="Address" variant="outlined" value={address} 
                    className="form-text-box" onChange={(e) => { setAddress(e.target.value) }} required   {...(errors.address && {error:true,helperText:errors.address})}/>

                <FormControl variant='outlined' > 
                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup 
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue="male"
                        value={gender}
                        onChange={(e)=>{setGender(e.target.value)}}
                       
                    >
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>

                <FormControl fullWidth className='form-text-box' >
                    <InputLabel id="demo-simple-select-country">Countries</InputLabel>
                    
                    <Select

                        defaultValue=""
                        labelId="select_country"
                        id="select_country"
                        value={country}
                        label="Country"
                        onChange={handleCountry}
                        
                    >
                        {
                            countrylist.map((data, index) => {
                                //  console.log(data);

                                return <MenuItem key={index} value={data.name.common}>{data.name.common}</MenuItem>

                            })

                        }
                        {/* <MenuItem value={"india"}>India</MenuItem>
                        <MenuItem value={"Uk"}>Uk</MenuItem> */}
                    </Select>
                    {/* {errors.country && <FormHelperText>{errors.country}</FormHelperText>} */}
                </FormControl>


                <FormControl fullWidth className='form-text-box'>
                    <InputLabel id="demo-simple-select-label">College</InputLabel>
                    <Select
                        defaultValue=""
                        labelId="college_label"
                        id="college_label"
                        value={college}
                        label="College"
                        onChange={(e) => { setCollege(e.target.value) }}
                        
                    >
                        {
                            collegelist.length ? collegelist.map((data, index) => {
                                //  console.log(data.name);
                                // setCollege(data.name)

                                return <MenuItem key={index} value={data.name}>{data.name}</MenuItem>

                            }):<MenuItem>No college found</MenuItem>
                        }

                    </Select>
                    {errors.college && <FormHelperText>{errors.college}</FormHelperText>}
                </FormControl>




                 
                <FormControl sx={{ m: 3 }} component="fieldset" variant="outlined" style={{alignSelf:'center',marginTop:'5px'}} >
                    <FormControl component="legend">Select Hobbies</FormControl>
                    <div>{hobbies.map(ele=>{
                        return(<span>{ele},</span>)
                    })}<span onClick={()=>{setHobbies([])}} style={{color:"red"}} >clear hobbies</span></div>

                    <FormGroup  row>
                        {hobbie.map(ele=>{
                            return(
                                <FormControlLabel
                                value={ele}
                                control={
                                    <Checkbox checked={hobbies.includes(ele)} />
                                }
                                label={ele}
                                onChange={handleHobbies}
                                />
                            )
                        })}

                        <FormControlLabel

                        id='other'
                        label= "Other"
                        value="Other"
                        control ={<Checkbox checked ={visible} onChange={()=>
                        setVisible(!visible)}/>}
                        />
                    </FormGroup>
                    {
                        visible && <TextField label="Other Hobbies" variant="outlined"  value={otherStr}
                        className="form-text-box" onChange={handleOthertextEvent } onKeyDown={(e)=>{
                            if(e.key ==="Enter"){
                                var temp= hobbies
                                temp.push(otherStr)
                                setStr("")
                                setVisible(false)
                            }
                        }}/> 
                    }


                </FormControl>






                <TextField id="shortbio" label="short Bio" variant="outlined" value={shortbio}
                    className="form-text-box" onChange={(e) => { setShortbio(e.target.value) }} {...(errors.shortbio && {error:true,helperText:errors.shortbio})} required />

                <TextField id="longbio" label="Long Bio" variant="outlined" value={longbio} multiline rows={(3)}
                    className="form-text-box" onChange={(e) => { setLongbio(e.target.value) }} {...(errors.longbio && {error:true,helperText:errors.longbio})} required />

                <Button variant="contained" color="primary"
                    style={{ width: "300px",height:'3rem', marginLeft: "auto", marginRight: "auto" ,alignSelf:'center'}}
                    onClick={() => { onSubmitFun() }}
                >
                    SUBMIT
                </Button>
            </div>
        </div>
    )
}

export default UserForm;