import React, { useEffect, useState } from 'react'
import { Routes, Route, NavLink } from "react-router-dom";
import { getRolByToken, getUserByToken } from '../apiCall/post';
import { Post } from '../Components/post/Post';
import logo from '../logo.svg';
import { routes } from './routes';
import { useCookies } from 'react-cookie';
import { PostForm } from '../Components/post/PostForm';

export const Navigation = () => {

    const [usuarioRol, setUsuarioRol] = useState<String>("sinRol")
    const [cookies, setCookies ] = useCookies(['token']);

    useEffect(() => {
      if(cookies.token !== ""){
        getRolByToken(cookies.token, setUsuarioRol)
      }
      setUsuarioRol("sinRol")
    }, [ cookies ])

    // function loGout remove cookie
    const Logout = () => {
        setCookies('token', '', { path: '/' });

    }


    
    

  return (
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt="React logo" />
                    <ul>
                        {
                            routes.map((route) => (
                                <li key={route.to}>
                                    <NavLink to={route.to} className={({isActive})=>isActive?'nav-active':''}>{route.name}</NavLink>
                                </li>
                            ))
                        }

                    {
                        usuarioRol === "usuario" && (
                            <li>
                                <NavLink to="/post" className={({isActive})=>isActive?'nav-active':''}>Post</NavLink>
                            </li>
                        )
                    }

                    {
                        cookies.token? 
                        <li >
                            <NavLink to={"/"} onClick={Logout}>LogOut</NavLink>
                        </li>
                        :
                        <li>
                            <NavLink to={"/auth/Login"}>Login</NavLink>
                        </li>
                    }
                        

                    </ul>
                
                </nav>

                <Routes>
                    {
                       
                        routes.map(({path, Component}) => (
                            <Route key={path} path={path} element={<Component />} />
                        ))
                    }
                    {
                        usuarioRol === "usuario" && (
                            <Route path="/post" element={<PostForm />} />
                        )
                    }
                    <Route path="/*" element={<h1>404 Page</h1>} />
                    <Route path="/post/:id" element = {<Post />} />
                    


                </Routes>


            </div>

  )
}
