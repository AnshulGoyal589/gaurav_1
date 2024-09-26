import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Gallery from './Components/Gallery'
import './App.css'

const App = () => {
  return (
    <div className='mainApp' >
      <div className='navbarApp' > <Navbar/> </div>
      <Routes>
        <Route
          path="/"
          element={ <Home/> }
        />
        <Route
            path="/gallery"
            element={ <Gallery/> }
        />
        <Route
            path="/projects"
            element={ <Projects/> }
        />
      </Routes>        
  </div> 
  )
}

export default App