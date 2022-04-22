import axios from "axios";
import * as URL from "../utils/url";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("AutherizationToken")}`,
  },
};

export const getCollegesAPI = (country,collegeName) => {
    return axios.get(`${URL.getColleges}${collegeName? "&collegeName=" + collegeName: ""}${country}`);
}

// export const getCollege = ()=>{
//   return axios.get(`${URL.getColleges}`)
//   // console.log(`${URL.getColleges}`);
// }

export const getcountries =()=>{
  return axios.get(`${URL.getcountry}`)
}
export const getCollege = (country) => {
  return axios.get(`http://universities.hipolabs.com/search?country=${country}`);
}