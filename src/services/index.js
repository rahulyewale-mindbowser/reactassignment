import axios from "axios";
import * as URL from "../utils/url";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("AutherizationToken")}`,
  },
};

// export const getCollegesAPI = (collegeName, country) => {
//     return axios.get(`${URL.getColleges}${collegeName}${country? "&country=" + country : ""}`);
// }

export const getCollege = ()=>{
  return axios.get(`${URL.getColleges}`)
  // console.log(`${URL.getColleges}`);
}

export const getcountries =()=>{
  return axios.get(`${URL.getcountry}`)
}