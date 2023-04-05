// import { Paper } from '@mui/material';
import React from 'react'
import Top from './top';
import Myform from './Myform';
export const Login = () => {
  return (
    <div style={{height:"120vh",widht:"100%",background:"lightblue"}}>
         <Top/>
      <h1>Login</h1>
      {/* <Paper elevation={24} sx={{height: '500px', widht:'20px'}}>

  </Paper> */}
    <Myform/>
    </div>
    
  )
    }
export default Login;