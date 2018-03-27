import React, { Component } from 'react';
import userStockPortfolio from '../data/userStockPortfolio.json';
import { NavLink } from 'react-router-dom';



class Stocks extends Component {



  render() {
    // check the if the data is rechable reached 
    console.log(userStockPortfolio);
//var sortBy = require('sort-by'), 
//userStockPortfolio;

    return (

      <div>
      
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
      <NavLink to={ {pathname:"/stocks"}}>
      <span class="icon has-text-info"><i class="fas fa-file-alt"></i></span>
       <span> Portfolio </span>
       </NavLink >
      </a>
    </li>
    
    
    
    </ul>
      
      
      
      <section class="section">
      <div class="columns is-centered">
      
      
      <table   className="table is-fullwidth 
       is-bordered ">
  <thead>
    <tr>
    <th><abbr title="Position">Id</abbr></th>
      <th><abbr title="Played">UserId</abbr></th>
      <th><abbr title="Won">Symbol</abbr></th>
      <th><abbr title="Drawn">Amount</abbr></th>
     
     
    </tr>
  </thead>
  <tbody>
  
    {
    
   
    // loop through the file and sort it by id number
  userStockPortfolio
  
  
 
 .map((obj,ind)=>{
  return(
      <tr>
      <th>{obj.id}</th>
      <td>{obj.userId}</td>
      <td>{obj.symbol}</td>
      <td>{obj.amount}</td>
      </tr>
      );
    
  }).sort((a,b)=> a.symbol > b.symbol)
   
   
    }
      
    
  </tbody>
</table>
      
      
     </div>
     </section>
      </div>



    );

  }





}


export default Stocks;
