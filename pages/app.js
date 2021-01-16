import React from 'react';
import {makeStyles} from '@material-ui/core';
import { FormControl, FormHelperText, InputLabel } from '@material-ui/core';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const useStyle = makeStyles((theme)=>({
  FormControl:{
    margin:theme.spacing(1),
    minWidth:140,
  }
}));
function App() {
  return (
  
    
<div class="bg-blue-500">
<Image
        src="/pic3.png"
        alt=""
        width={80}
        height={80}
       
        />
  
  <div class="home">
  <button class="homebtn">HOME
  </button>
  </div>
  
  <div class="about">
  <button class="aboutbtn">ABOUT
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="about-content">

<div class="column">
      <a href="#">OUR HISTORY</a>
     <a href="#">WHY WE ARE DIFFERENT</a>
      <a href="#">LEADERSHIP
     <a href="#">NATIONAL CONVENOR</a>
     <a href="#">NATIONAL SECRETARY</a>
  <a href="#">NATIONAL TREASURER</a>
      <a href="#">POLITICAL AFFAIRS COMMITTEE</a>
      <a href="#">NATIONAL EXECUTIVE</a>
     <a href="#">STATE LEADERSHIP</a>
      </a>
      <a href="#">ORGANIZATION AND STRUCTURE</a>
      <a href="#">CONSTITUTION</a>
     <a href="#">ELECTION SYMBOL</a>
</div>
</div>
</div>
<div class="media">
  <button class="mediabtn">MEDIA
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="media-content">

<div class="column">
 
  <a href="#">NEWS</a> 
  <a href="#">PRESS RELEASES</a>
  <a href="#">TRUTH VS PROPAGANDA</a>
  <a href="#">VIDEOS</a>
  <a href="#">BLOG</a> 
  <a href="#">NEWSLETTERS</a> 
  <a href="#">OFFICIAL SPOKEPERSONS</a> 
  <a href="#">PHOTO GALLERY</a>
  </div>
  </div>
  </div>
  <div class="delhi">
  <button class="govmtbtn">DELHI GOVERNMENT
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="delhigovernment-content">

<div class="column">
  <a href="#">MEET OUR MINISTERS</a>
  <a href="#">OFFICIAL PRESS RELEASES</a>
  <a href="#">GOVERNANCE IMPACT</a>
  <a href="#">DELHI BUDGET 2018-2019</a>
  <a href="#">DELHI BUDGET 2017-2018</a>
  <a href="#">DELHI BUDGET 2016-2017</a>
  <a href="#">AAP MANIFESTO 2015</a>
</div>

</div>
</div>
 
  <div class="elections">
    <button class="electnbtn">ELECTIONS
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="election-content">

        <div class="column">
          <a href="#">MANIFESTO 2020</a>
          <a href="#">DELHI ASSEMBLY ELECTIONS</a>
          <a href="#">2020 FORMAT C2</a>
        </div>
      
      </div>
    </div>
  <div class="get">
  <button class="electnbtn">GET INVOLVED
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="get-content">

<div class="column">
  <a href="#">BECOME A MEMBER</a>
  <a href="#">INTERSHIP</a>

</div>

</div>
</div>
  
 
   <input type="text" placeholder="Search" ></input> 
   
   <button class="bg-red-900 ..." type="button">Donate</button>
   <br></br>
   <Image
        src="/photo.jpg"
        alt=""
        width={405}
        height={300}
     />
    <div className="bg-blue-300 bg-img">
  <h1>Help Us Grow This Movement</h1>
  <p>AAP is the only political party in India that runs 100% through crowdfunding and accounts for every rupee received</p>
  <Link href='/donate'>
    <button class="bg-red-900..." type="button">MAKE A DONATION NOW </button>
    </Link>
    <div class="navbar">
  <a href="#contact" class="active">Contact us</a>
  <p>206, Rouse Avenue
Deen Dayal Upadhyay Marg , ITO
New Delhi – 110002</p>
<br></br>
  <a href="#home"><i class="fa fa-fw fa-phone"></i> +91 9718500606/+91 9818500606</a><br></br>
  <a href="#contact"><i class="fa fa-fw fa-envelope"></i> contact@aamaadmiparty.org</a>

<a href="#offices">Latest Posts</a>
<a href="#offices">About</a>


<a href="#offices">Media</a>

  <a href="#offices">Party offices</a><br></br>
  <a href="#connect">Connect With Us</a>

</div>
<div class="social-container">
<a href="https://www.facebook.com/AamAadmiParty"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
    
      <a href="https://twitter.com/AamAadmiParty"
        className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
     
        <a href="https://www.youtube.com/aamaadmiparty"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>

</div>

<div class="sidebar">
  <a href="#home"><i class="fa fa-fw fa-home"></i> +91 9718500606/+91 9818500606</a>
  <a href="#contact"><i class="fa fa-fw fa-envelope"></i> contact@aamaadmiparty.org</a>
</div>
</div>

</div>
    )
}

        
        
    export default App;