import axios from "axios";

const axiosInstance = axios.create({
    baseURL : "http://localhost:4000/",
    withCredentials : true,
    Headers:{
        'content-type':'application/json',
    }
})

export default  axiosInstance;