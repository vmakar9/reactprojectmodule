import axios from "axios";
import {baseURL} from "../urls/urls";

const axiosService = axios.create({baseURL})



axiosService.interceptors.request.use((request)=>{
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTU3YjBlZmYxYmQ1ZjNkMDFhMmZkYzlkYzYyY2E4ZCIsInN1YiI6IjYzNGFhYzM3YzE3NWIyMDA4MmRjZmYxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IjAPcxu-IaXFDSGzQHpKsl0qTdSPT1h2ng1QxyfYKaQ"
    request.headers.Authorization = `Bearer ${token}`
    return request
})

export {axiosService}
