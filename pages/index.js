import React from 'react'; 
import { FormControl, FormHelperText, InputLabel } from '@material-ui/core';
import Head from 'next/head';
import {makeStyles} from '@material-ui/core';
import { NoSchemaIntrospectionCustomRule } from 'graphql';
import Counter from './Counter';
import Checkout from './Checkout';
import Cross from './Cross';
import Image from 'next/image';


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
        <h1>Cart</h1>
        <div className="shopping">
           <a href="#">CONTINUE SHOPPING-></a>
       </div>
      <table>
    <tr>
      <th>PRODUCT</th>
      <th></th>
     <th>PRICE</th>
     <th>QUANTITY</th>
     <th>SUBTOTAL</th>
   </tr>
  <tr>
    <td><Image
        src="/photo.jpg"
        alt=""
        width={75}
        height={70}
    
       
        /></td>
        <td>GRATED COCONUT 400G-LAXMI</td>
    <td>$3.75</td>
    <td><Counter/></td>
    <td>$3.75</td>
    <td><Cross/></td>
  </tr>
  <tr>
    <td><Image
        src="/photo1.jpg"
        alt=""
        width={75}
        height={70}
    
       
        /></td>
     <td> FRESH THAI CHILLY GREEN 100GM</td>
    <td>$1.49</td>
    <td><Counter/></td>
    <td>$1.49</td>
    <td><Cross/></td>
  </tr>
  <tr>
    <td><Image
        src="/photo2.jpg"
        alt=""
        width={75}
        height={70}
    
       
        /></td>
      <td>CURRY LEAVES 1 PACK CURRYVEPPILA</td>
    <td>$1.49</td>
    <td><Counter/></td>
    <td>$1.49</td>
    <td><Cross/></td>
  </tr>
</table>

        <Checkout/>
  <style jsx>{`
 table {
  font-family: arial, sans-serif;
  width: 100%;
}

td, th {
  
  text-align: left;
  padding: 8px;
}


    h1{
      text-align:center;
    }
    .shopping{
      background-color:#33FF82;
      padding:8px;
      text-align:right;
      color:white;
    }
    .topnav {
      background-color: white;
    }
    .topnav a {
      float: left;
      color: black;
      padding: 14px 16px;
      text-decoration:none;
    }
    
    `}</style>
     
    </div>
  )
}

export default IndexPage;

