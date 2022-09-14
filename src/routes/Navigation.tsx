import React from 'react'
import { Routes, Route, NavLink } from "react-router-dom";
import { Post } from '../Components/post/Post';
import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
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

                                <li>
                                    <NavLink to={"auth/login"}>Login</NavLink>
                                </li>

                    </ul>
                
                </nav>

                <Routes>
                    {
                        routes.map(({path, Component}) => (
                            <Route key={path} path={path} element={<Component />} />
                        ))
                    }
                    <Route path="/*" element={<h1>404 Page</h1>} />
                    <Route path="/post/:id" element = {<Post />} />
                    


                </Routes>


            </div>

  )
}
