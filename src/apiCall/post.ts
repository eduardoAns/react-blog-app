import axios from "axios";
import { categoria, post } from "../interfaces/post";

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

const getUserByToken= async (token:string,state:React.Dispatch<React.SetStateAction<number>>) => {
    const peticion = await axios.get(`https://blogback-production.up.railway.app/api/validtoken`, {'headers':{'Authorization':token}})
    state(peticion.data.id)
}
const getRolByToken= async (token:string,state:React.Dispatch<React.SetStateAction<String>>) => {
    const peticion = await axios.get(`https://blogback-production.up.railway.app/api/validtoken`, {'headers':{'Authorization':token}})
    state(peticion.data.rol)
}

const getCategorias = async ( state: React.Dispatch<React.SetStateAction<categoria[]>> ) => {
    const peticion = await axios.get('https://blogback-production.up.railway.app/api/categoria')
    state(peticion.data)
}




export {
    getPosts,
    getPostById,
    blogApi,
    getUserByToken,
    getCategorias,
    getRolByToken
}