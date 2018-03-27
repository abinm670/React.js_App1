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
       <span>About Us</span>
       </NavLink >
      </a>
    </li>
    
    
    
    </ul>
    
    
            
            

<div>
<h1 class="title is-2"> About Us </h1>
<figure>{/* // eslint-disable-next-line  */}
  <img src="../logos/react2018.svg" alt="p "/>
</figure>
  
      <div class="media-content is-centered">
        <p class="title is-4">Abdullah Binmahfouz</p>
        <p class="subtitle is-6"></p>
      </div>
    

    <blockquote>
     Computer Information Systems student at Mount Royal University, working on implement and manage distributed databases. I also have 
      tremendous amount of experience in debugging, and running scripting using 
      different tools such as Eclipse, Cloud9 and GitHub to work towards sustainable development and solutions.
      Through a senior option courses, I learned to adapt to new challenges such as learning firebase, react
      android studio, and Kanban methodology in order to improve my application. 
    </blockquote>
      
      <br/>
    
    <dl><h1 class="title is-5">Tools:</h1> 
    <li>React Interface</li>
    <li>Node package Manager</li>
    <li> Axios package: External Web Services </li>
    <li>Cloud9</li>
    <li>GitHub</li>
    <li>JavaScript</li>
    <li>JSON file</li>
    <li>Bulma CSS</li>
    </dl>
    
    
    
      
    </div>
    <br/>

    <dl>
    <h1 class="title is-5">list of sources</h1>
    <li><a href="https://code.tutsplus.com/tutorials/how-
    to-use-map-filter-reduce-in-javascript--cms-26209">
    How to Use Map, Filter, & Reduce in JavaScript</a></li>
    <li><a href="https://reactjs.org/docs/portals.html#event-bubbling-through-portals">Event Bubbling Through Portals</a></li>
    <li><a href=" https://reactjs.org/docs/conditional-rendering.html#inline-if-else-with-conditional-operator">
    Inline If-Else with Conditional Operator</a></li>
    <li><a href=" https://stackoverflow.com/questions/40746727/react-event-listeners-on-array-of-elements">
    React event listeners on array of elements</a></li>
    <li><a href="https://www.npmjs.com/package/react-data-sort">
    npm install --save react-data-sort</a></li>
    <li><a href="https://stackoverflow.com/questions/40833360/parseint-is-not-a-function">
   parseInt() is not a function</a></li>
    
    
   
    
    
    
    
    
    
   
    </dl>
   
    
    
    
  
</div>

        );




    }
}

export default AboutUs;
