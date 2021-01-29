import React from 'react'; 
import { FormControl, FormHelperText, InputLabel } from '@material-ui/core';
import Head from 'next/head';
import {makeStyles} from '@material-ui/core';
import { NoSchemaIntrospectionCustomRule } from 'graphql';



const useStyle = makeStyles((theme)=>({
  FormControl:{
    margin:theme.spacing(1),
    minWidth:140,
  }
}));


function IndexPage() {
  return (

    <div className= "container">
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <button className="signin">Sign in</button>
        <button className="close">Close</button>
        <br></br>
        <FormControl className="name">
    <input  className="box1" type="text" placeholder="Username" ></input>
    </FormControl>
    <br></br>
    <FormControl>
    <input className="box1" type="text" placeholder="Password"></input>
    </FormControl>
    <br></br>
       
   <div className="form">
     <input  type="checkbox" name="remember"></input>
     <label>Remember me</label>
   </div>
    <button className="new-btn" type="button">SIGN IN</button>
    <br></br>
    <div className="lost">
    <a href="#">LOST YOUR PASSWORD?</a>
  </div>
  <style jsx>{`
 
     .container{
       margin-left:40%;
       margin-right:40%;
   }
    .lost{
      margin-top: 40%;
      margin-left: 15%;
    }
    .form{
      margin-top:10%;
  }
    .box1{
      width:290px;
      margin-top:5%;
      border:8px solid rgba(0, 0, 0, 0.05);
    };
    
    }
     .new-btn{
       color:white;
       background-color:black;
       width:300px;
       height:40px;
       margin-top: 10%;
   }
   .signin{
    background-color:white;
    border:none;
   }
   .close{
    background-color:white;
    border:none;
    margin-left: 60%;
    margin-bottom:20%;
   }
     
      `}</style>
    </div>
  )
}

export default IndexPage;

