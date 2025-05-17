import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './page/Login'
import Register from './page/Register'
import Navbar from './components/Navbar'
import Dashboard from './page/Dashboard'
import UserProtectedWrapper from './components/UserProtectedWrapper'
import Home from './page/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={
          <>
            <Navbar />
            <Login />
          </>} />
        <Route path='/register' element={
          <>
            <Navbar />
            <Register />
          </>
        } />
        <Route path='/dashboard' element={
          <UserProtectedWrapper>
            <Dashboard />
          </UserProtectedWrapper>
        } />
      </Routes>
    </>
  )
}

export default App
