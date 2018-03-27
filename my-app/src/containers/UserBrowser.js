import React, { Component } from 'react';
import UserListItem from '../containers/UserListItem.js';
import UserDetails from '../containers/UserDetails.js';
import { NavLink } from 'react-router-dom';

//import UserDetailItem from '../containers/UserDetailItem'
// Axios is a popular package for working with external APIs (web
// services). It needs to be installed into our application via npm, which
// you have already done back in Exercise 20c.2.

import axios from 'axios';


class UserBrowser extends Component {

    handleSelect(key) {
        this.setState({ currentUserId: key });
    }

    constructor(props) {
        super(props);
        
        this.state = {
            // in our state, store list of users and the currently selected user
            currentUserId: 1,
            users: [],
            usersStock: []

        };
        this.handleSelect = this.handleSelect.bind(this);


    }

    /*  (we call this method after the render insert into the DOM cause its safer, then will retrive the data while the rinder into the DOM, once we recievthe data from the web service we will 
      store it in the in the component state ) 
   This React lifecycle event method is called *after* a component is
mounted (that is, inserted into the DOM). This means it is called*/

    // Here we are using the Axios package to retrieve "dummy" API data
    componentDidMount() {

        axios.get('https://jsonplaceholder.typicode.com/users').then(response => { this.setState({ users: response.data }); })
            .catch(function(error) {
                alert('Error with api call ... error=' + error);
            });
    }


    render() {
        // web request 
        if (!this.state.users || this.state.users.length === 0) {
            return null;
        }
        else {
            //find user with matching ID 
            let currentID = this.state.currentUserId;
            let currentUser = this.state.users.find(function(user) { return user.id === currentID; });
            //sort name 

console.log(this.state.users);
            // display the user here 

            return (
                
            
                
    <article className="section columns">
                
                
   
   <nav> 
   
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
      <NavLink to={ {pathname:"/users"}}>
      <span class="icon has-text-info"><i class="fas fa-file-alt"></i></span>
       <span>Users</span>
       </NavLink >
      </a>
    </li>
    
    </ul>  </nav>
   
   
   
   
   <section className="column is-one-third"> 
   
   
   
                
                
    
    
    <nav className="panel">
    <h3 className="panel-heading"> Users </h3>
  
  {
  
  // loop through the users retrieved from our API and
// generate a UserListItem component for each user
  
  this.state.users.sort((a, b) => a.name > b.name)
  
  .map((user, ind)=>{ 
   
   // add a conditional class to indicate the curent selected user 
   
      let activeClass ="";
      
      if(user.id === currentID) activeClass ="is-active"; 
      
      return (
       
     <UserListItem 
      key={user.id} 
      index={ind}
      lov={user.phone}
      identifier={user.id} 
      active={activeClass}
      select={this.handleSelect}
      >{user.name}</UserListItem>)
      })
  }
  
  
 </nav>
</section>
<section className= "column is-two-thirds">

<UserDetails   user={currentUser}/>
</section>
</article>


            );
        }
    } //end render

} // end class



export default UserBrowser;
