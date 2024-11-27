import React from 'react'
import Home from './home/Home'


import { Navigate, Route, Routes } from "react-router-dom"
import Packages from './Packages/Packages'
import Signup from './components/Signup'
import Contact from './components/Contact'
import { Toaster } from "react-hot-toast"
import { useAuth } from './context/AuthProvider'
import About from './components/About'





function App() {


  const [authUser, setAuthUser] = useAuth()
  // console.log(authUser)

  return (
    <>

      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Package" element={authUser ? <Packages /> : <Navigate to="/Signup" />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App