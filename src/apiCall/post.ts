import axios from "axios";
import { post } from "../interfaces/post";

const getPosts = async ( state: React.Dispatch<React.SetStateAction<post[]>> ) => {
    const peticion = await axios.get('https://blogback-production.up.railway.app/api/post')
    state(peticion.data)
}

const getPostById = async (id:any, state:React.Dispatch<React.SetStateAction<post>>) => {
    console.log(id)
    const peticion = await axios.get(`https://blogback-production.up.railway.app/api/post/${id}`)
    console.log(peticion.data)
    state(peticion.data)
}

export {
    getPosts,
    getPostById,
}