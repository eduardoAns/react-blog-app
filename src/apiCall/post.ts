import axios from "axios";
import { post } from "../interfaces/post";

const getPosts = async ( state: React.Dispatch<React.SetStateAction<post[]>> ) => {
    const peticion = await axios.get('https://blogback-production.up.railway.app/api/post')
    state(peticion.data)
}

const getPostById = async (id:any, state:React.Dispatch<React.SetStateAction<post>>) => {
    const peticion = await axios.get(`https://blogback-production.up.railway.app/api/post/${id}`)
    state(peticion.data)
}

const blogApi = axios.create({
    baseURL:'https://blogback-production.up.railway.app/api',
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    }
})


export {
    getPosts,
    getPostById,
    blogApi,
}