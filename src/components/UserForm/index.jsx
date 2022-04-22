import { useState, useEffect } from 'react';
import './userform.css';
import { TextField, Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import * as services from '../../services';
import { useForm, Controller } from "react-hook-form";
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const hobbie =["Reading", "Gaming", "Traveling", "Drawing"];

function UserForm(props) {
    const { register, handleSubmit,  formState: { errors }} = useForm();
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

    const [nameErr, setnameErr] = useState(false);

    const date = new Date();


    const setEmpty = () => {
        setName("")
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
        if (name == "" || birthdate == "" || college == "" || hobbies == "" || country == "" || gender == "" || address == "" || shortbio == "" || longbio == "") {
            alert(" please fill all the feilds")
        }
        else {
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
            }
            setEmpty()

            setLocalstorage(user)

            navigate("/userlist")

        }

    }

    const otherhobby = () => {
        // setVisible(!visible);
        setVisible(prev => !prev);

        console.log("called");
    }

    const handleGender = (event) => {
        setGender((event.target.value));
    };

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
        if(index==-1){
            setHobbies([...hobbies,e.target.value])

        }
        else{
            setHobbies(hobbies.filter((hobbie)=>hobbie !==e.target.value))
        }
    }

    const handleOthertextEvent =(e)=>{
        setStr(e.target.value)
    }
    //   const onhobbies =e=>{
    //       var {name,checked} =e.target;

    //       setHobbies(e=>{
    //           var selecthobbies =e.hobbies;
    //           selecthobbies[name]=checked;
    //       })
    //   }

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

    
        // const collegelists =()=>{
        //      if(country){
        //         services.getCollegesAPI(country,"")
        //         .then(response => {
        //              console.log(response.data);
        //             setCollegelist(response.data);
        //         })
        //         .catch(e => {
        //             console.log(e)
        //         })
        //      }
        // }
    // const today = moment();
    // const disableFutureDt = current => {
    //     return current.isBefore(today)
    // }
    const validname = new RegExp(
        '[a-zA-Z]$'
     );

     const validate = () => {
        if (!validname.test(name)) {
           setnameErr(true);
        }
        // if (!validPassword.test(password)) {
        //    setPwdError(true);
        // }
     };
    return (
        <div className="form-container">
            <div>
                <h1> Add User Form</h1>

            </div>
            <div className="form-box">
                <TextField id="name" label="Name" name="uname" variant="outlined" value={name} 
                    className="form-text-box" onChange={(e) => { setName(e.target.value) }} error={name ==""}  helperText={name ==""?"This feild required":""}
                    // {...register("message",{
                    //     required: "First Name is required.",
                    //   })}
                    //   // {...register("message", {
                    //   //     required: "Required",
                    //   //   })}
                    //   error={(errors.uname)}
                    //   helperText={errors.uname?.message}
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
                    


                <TextField id="address" label="Address" variant="outlined" value={address} error={address==""} helperText={address ==""?"This feild required":""}
                    className="form-text-box" onChange={(e) => { setAddress(e.target.value) }} required />

                <FormControl variant='outlined' > 
                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup 
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue="male"
                        value={gender}
                        onChange={handleGender}
                       
                    >
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>

                <FormControl fullWidth className='form-text-box' error ={country==""} helperText={country ==""?"please select the country":""}>
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


                    {/* <FormLabel component="legend">Select Hobbies</FormLabel>
                    <FormGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group">
                        <FormControlLabel
                            control={
                                <Checkbox name="reading" onChange={handleHobbies} />
                            }
                            label="Reading"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox name="drawing" onChange={handleHobbies} />
                            }
                            label="Drawing"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox name="gaming" onChange={handleHobbies} />
                            }
                            label="Gaming"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox name="travelling" onChange={handleHobbies} />
                            }
                            label="Traveling"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox name="other" onChange={otherhobby} />
                            }
                            label="other"
                        />
                    </FormGroup> */}

                    {/* {
                        visible && <TextField id="hobby" label=" other hobby" variant="outlined"
                            className="form-text-box" onBlur={(e) => { setHobbies(hobbies + "," + e.target.value) }} />

                    } */}

                </FormControl>






                <TextField id="bio" label="short Bio" variant="outlined" value={shortbio}
                    className="form-text-box" onChange={(e) => { setShortbio(e.target.value) }} error={shortbio==""}helperText={shortbio ==""?"This feild required":""} required />

                <TextField id="bio" label="Long Bio" variant="outlined" value={longbio} multiline rows={(3)}
                    className="form-text-box" onChange={(e) => { setLongbio(e.target.value) }} error={longbio==""}helperText={longbio ==""?"This feild required":""} required />

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