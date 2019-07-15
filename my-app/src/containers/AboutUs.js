import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class AboutUs extends Component {

    render() {
        return (


            <div className="box" is-centered>



 <ul className="tabs is-centered">


 <li >
      <a>
      <NavLink
       to={ {pathname:"/home"}}>
      <span class="icon has-text-info"><i class="fas fa-home"></i></span>
       <span>Home</span>
       </NavLink>
      </a>
    </li>


    <li >
      <a >
      <NavLink to={ {pathname:"/about"}}>
      <span class="icon has-text-info"><i class="fas fa-file-alt"></i></span>
       <span>About Me</span>
       </NavLink >
      </a>
    </li>



    </ul>





<div>
<h1 class="title is-2">Full-Stack Business Intelligence Developer(BI)</h1>
<figure>{/* // eslint-disable-next-line  */}
  <img src="../logos/react2018.svg" alt="p "/>
</figure>

      <div class="media-content is-centered">
        <p class="title is-4">Abdullah Binmahfouz</p>
        <p class="subtitle is-6"></p>
      </div>


    <blockquote>
     I Enjoy working on meaningful projects & helping businesses achieve their goals through technology & business process improvement is my passion.
     Critical thinking, active listening, challenge the status quo, intellectual curiosity and lifelong learning are some of my personal goals and traits.
    </blockquote>
<br/>

    <dl><h class="title is-5">Projects:</h>
    <li>
   <a href="https://v2.luminpdf.com/viewer/5d2c25d8e704b30019b8e194" target="_blank" >

    Big Data</a></li>
    <li>
<a href="https://docs.google.com/document/d/1CQK5EStpBx_3uL-4hHIz8ubqxaz1jar8knJAsDPFeSQ/edit?usp=sharing" target="_blank">
    Mru Library Booking App
</a>
    </li>
<li>Other projects can be discussed during the meeting</li>
    </dl>
    </div>
    <br/>



<dl>
<div className>
<div class="button is-medium is-warning">
<a href="https://v2.luminpdf.com/viewer/5d2c0c52e704b30019b8de1b" target="_blank">My Resume</a>
</div>
<div class="button is-medium is-primary" target="_blank">
<a href="https://github.com/abinm670" target="_blank">
GitHub</a></div>
<div class="button  is-medium is-grey-lighter"><a href="https://www.linkedin.com/in/abdullah-binmahfouz-a6925588" target="_blank">Linkedin</a></div>
</div>


</dl>

</div>









        );




    }
}

export default AboutUs;
