import React from 'react';
import { FormControl, FormHelperText, InputLabel } from '@material-ui/core';
import Head from 'next/head';
import {makeStyles} from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';


const useStyle = makeStyles((theme)=>({
  FormControl:{
    margin:theme.spacing(1),
    minWidth:140,
  }
}));



function IndexPage() {
  return (

    <div className= "w-64 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600">
      <div className="container">
        <h1>
      
          <a>  "This is your fight"</a>
      
        </h1>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <p className="text-purple-700 text-opacity-100 ...">Stay connected with India’s fastest growing party as it redefines the political landscape in India.</p>
        <h2>Sign up now</h2>
       
      <FormControl className="bg-blue-500">
    <input type="text" placeholder="Name*" ></input> 
    </FormControl>

    <FormControl>
    <input type="text" placeholder="Mobile No"></input>
    </FormControl>
    <br></br>
    <FormControl>
      <input type="text" placeholder="Email Id"></input>
      </FormControl>
      <br></br>
     
      <FormControl>
     <input type="text" placeholder="Pin Code"></input>
      </FormControl>
      <FormControl>
      <button class="bg-red-900 ...">Sign Up</button>
      </FormControl>
      </div>
    
    <br></br>
    <Image
        src="/photo.jpg"
        alt=""
        width={425}
        height={300}
    
       
        />

    <button class="bg-green-800...">CONTINUE TO THE SITE>> </button>
    <div className="image-column">
    <Image
        src="/pic3.png"
        alt=""
        width={100}
        height={100}
       
        />
        
        </div>
         <h3>@2012-2017 Aam Aadmi Party.All Rights Reserved.</h3>
    
    </div>
  )
}

export default IndexPage;