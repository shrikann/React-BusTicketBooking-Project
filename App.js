import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home2 from './Home2'
import Signup from './Signup';
import Login from './Login';
// import About from './components/about';
// import Contact from './components/contact';

export const Path = () => {
  return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home2/>}></Route>
            {/* <Route path="/about" element={<About/>}></Route> */}
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Signup" element={<Signup/>}></Route>
            {/* <Route path="/contact" element={<Contact/>}></Route> */}
        </Routes>
        </BrowserRouter>  
        
  )
}
export default Path;