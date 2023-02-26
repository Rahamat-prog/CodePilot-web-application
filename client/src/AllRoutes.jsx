import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'

function AllRoutes() {
  return (
      <div>
           <Routes>
              <Route  path='/' element={<Home/>} />
              <Route  path='/auth' element={<Auth />} />
        </Routes>

      </div>
        
       

    
       
        
        
  )
}

export default AllRoutes
