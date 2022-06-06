import React, { useEffect, useState } from 'react'
import './userform.css'
import axios from 'axios'

const Userform = () => {
  const [country ,setCountry]= useState([]);
  
  useEffect(()=>{
    // var udata;
    // const getcountry = async ()=>{
    //   const countrylist = await axios.get("https://api.countrylayer.com/v2/all").then(res=>{
    //     res.json()}).then(data=>{
    //       data+= udata;
    //     }).catch("error while fetching")
    //   console.log(udata);

    // }

    // getcountry();

    async function status() {
      const url = "https://dummyjson.com/products/";
      let response = await axios.get(url);
      return response.data;
    }
    var userdata= [];
    status().then((data) => {
        userdata.push(data);
        console.log(data)});
        for( let i in userdata){
            console.log(userdata[i]);

        }
    


  },[])
    return (
        <>
            <form className='userdata'>
                <input type="text" name='Name' placeholder='Enter Name' required />
                <input type="date" name="date" id="bdate" required />
                <input type="text" name='address' id='address' placeholder='Address' required />
                <div className="gender">
                    <input type="radio" name="gender" id="gender"  />Male
                    <input type="radio" name="gender" id="gender" />Female
                </div>
                <select>
                    <option value="college name">select college</option>
                    <option value="actual value 2">Display Text 2</option>
                    <option value="actual value 3">Display Text 3</option>
                </select>
                <select>
                    <option value=" Reading"> Reading</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Traveling">Traveling</option>
                    <option value="Drawing"> Drawing</option>
                    <option value="other">Other</option>
                </select>

                <select>
                    <option value="country">select country</option>
                    <option value="actual value 2">Display Text 2</option>
                    <option value="actual value 3">Display Text 3</option>
                </select>

                <input type="text" name="short_bio" id="short_bio" placeholder='Enter short bio here' required/>

                <textarea name="long_bio" id="long_bio" cols="20" rows="5" placeholder='Enter Long bio here!'></textarea>

                <input type="submit" value="submit" />



            </form>
            
        </>
    )
}
export default Userform;