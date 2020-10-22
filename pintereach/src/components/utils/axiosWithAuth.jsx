import axios from "axios";

export const axiosWithAuth = () => {
  
  console.log(localStorage.getItem('token'))
  return axios.create({
      headers: {
          "content-type": "application/json",
          Authorization: localStorage.getItem('token')
      }
  })
}