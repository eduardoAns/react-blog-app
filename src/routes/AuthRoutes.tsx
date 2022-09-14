import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../Components/auth/Login'
import { Register } from '../Components/auth/Register'

export const AuthRoutes = () => {
  return (
      <div>         
          <Routes>
              <Route path ="/login" element={<Login />} />
              <Route path ="/register" element={<Register />} />
          </Routes>
      </div>
  )
}
