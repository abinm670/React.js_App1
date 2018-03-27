import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import variable from '../data/stocks.json';





class CompanyBrowser extends Component {


    constructor(props) {
        super(props);
        this.state = {
            companies: [],



        };


    }


    render() {

        //console.log(variable[1].name)
        return (

            <header>                
 <div>                   
<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><NavLink to={{pathname:"/home"}}><span class="icon is-small"><i class="fas fa-home"></i></span><span>Home</span></NavLink></li>
    <li className="is-active"><NavLink to={ {pathname:"/companies"}} ><span class="icon is-small"><i class="fas fa-book"></i></span><span>Stocks</span></NavLink></li>
    </ul>
</nav>

  </div>
<br/>
<center><h1 class="title is-1 is-centered">Stock List </h1> </center>
<article className="section columns">    
<header>

<div class="table__wrapper ">
  <table class="table is-bordered  is-fullwidth">
    <tbody>
    
  
      
    {
    
    variable.map((user,ind)=>{
      
      return(
       
        <tr >
        <td> 
        <figure class="image is-128x128 is-mobile">
    <img src={"/logos/" + user.symbol + ".svg"} alt="My Awesome" />
     
    
     </figure>
        
        </td>
        
    
    
    <td>
   
  
   <Link className="button is-info is-fullwidth is-centered"   
      //key={ind} 
     
      //active={activeClass}
      //select={this.handleSelect}
      to={"/singleStock/" + user.name}
      >
      <figure class="columns is-mobile ">
      {user.name}
      </figure>
      </Link>
 

    </td>
        
        </tr>
        
         
        );
    })
    }
        
        
        
      
      
    </tbody>
  </table>
</div>
       </header>             
 </article> 
 </header>

        );
    }
}
export default CompanyBrowser;
