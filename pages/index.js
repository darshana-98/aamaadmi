import React from 'react'; 
import { FormControl, FormHelperText, InputLabel } from '@material-ui/core';
import Head from 'next/head';
import {makeStyles} from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';
import { NoSchemaIntrospectionCustomRule } from 'graphql';

import Counter from './Counter';


const useStyle = makeStyles((theme)=>({
  FormControl:{
    margin:theme.spacing(1),
    minWidth:140,
  }
}));


function IndexPage() {
  return (

   <div>
      <div className="container">

        <h1>
          <a>  SWEET MIXTURE 200 GM KOZHIKODANS</a>
        </h1>
        <h2>$2.99</h2>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <p>33 in stock</p>
        <Counter/>
        <button className="new-btn">ADD TO CART</button>
  <br></br>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <a class="active" href="#"><i class="fa fa-heart-o"></i>ADD TO WISHLIST</a> 
    <a href="#"><i class="fa fa-share-alt"></i>SHARE</a> 
 
    </div>
  
    <Image
        src="/sweet1.jpg"
        alt=""
        width={250}
        height={450}
    />
    <style jsx>{`

    .container{
         
  
      padding: 50px;
      padding-bottom: 100px;
      max-width: 336px;
      color: black;
      float: right;
      height:375px;
    }
    .new-btn{
      color:white;
      background-color:black;
      width:150px;
      height:50px;
      margin-bottom:20%;
      margin-left:50%;
      
  }
      
    
     `}</style>
    </div>
  )
}
export default IndexPage;