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

function UserForm(props) {
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
    const [shortbio, setShortbio] = useState("");
    const [longbio, setLongbio] = useState("");


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
        if(name == "" ||birthdate ==""||college==""||hobbies==""||country == ""||gender==""||address==""||shortbio ==""||longbio=="")
        {
            alert(" please fill all the feilds")
        }
        else{
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
    }

    const handleHobbies = (e) => {
        setHobbies(hobbies + "," + e.target.name)
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


            await services.getCollege()
                .then(response => {
                    //  console.log(response.data);
                    setCollegelist(response.data);
                })
                .catch(e => {
                    console.log(e)
                })


            await services.getcountries()
                .then(response => {
                    // console.log(response.data);
                    setCountrylist(response.data)
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
                <TextField id="name" label="Name" variant="outlined" value={name}
                    className="form-text-box" onChange={(e) => { setName(e.target.value) }} required />

                <input type="text" name="date" id="date" value={birthdate} className="form-text-box date" placeholder='Select Birth date' onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    onChange={(e) => { setBirthdate(e.target.value) }} required/>


                <TextField id="address" label="Address" variant="outlined" value={address}
                    className="form-text-box" onChange={(e) => { setAddress(e.target.value) }} required/>

                <FormControl>
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

                <FormControl fullWidth className='form-text-box'>
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
                            collegelist.map((data, index) => {
                                //  console.log(data.name);
                                // setCollege(data.name)

                                return <MenuItem key={index} value={data.name}>{data.name}</MenuItem>

                            })
                        }

                    </Select>
                </FormControl>




                <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Select Hobbies</FormLabel>
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
                    </FormGroup>

                    {
                        visible && <TextField id="hobby" label=" other hobby" variant="outlined"
                            className="form-text-box" onBlur={(e) => { setHobbies(hobbies + "," + e.target.value) }} />

                    }

                </FormControl>

                




                <TextField id="bio" label="short Bio" variant="outlined" value={shortbio}
                    className="form-text-box" onChange={(e) => { setShortbio(e.target.value) }} required/>

                <TextField id="bio" label="Long Bio" variant="outlined" value={longbio} multiline rows={(3)}
                    className="form-text-box" onChange={(e) => { setLongbio(e.target.value) }} required/>

                <Button variant="contained" color="primary"
                    style={{ width: "200px", marginLeft: "auto", marginRight: "auto" }}
                    onClick={() => { onSubmitFun() }}
                >
                    SUBMIT
                </Button>
            </div>
        </div>
    )
}

export default UserForm;