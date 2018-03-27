import React, { Component } from 'react';
import variable from '../data/stocks.json';
import { NavLink } from 'react-router-dom';



class SingleStock extends Component {




    constructor(props) {


        super(props);
        //console.log(this.props.match.params.CIK);

        this.state = {
            companyName: this.props.match.params.name,


        };


    }






    render() {

        let currentCompany = this.state.companyName;
        // eslint-disable-next-line
        let dataAccess = variable.find(function(obj) {
            if (obj.name === currentCompany) {
                return obj;
            }
        });
        
        console.log("heloo");
        console.log(dataAccess); 

        return (



  <div class="card-content">  
    
<div class="tabs is-centered">
 <ul>
 
 
 <li>
      <a>
      <NavLink
       to={ {pathname:"/home"}}>
      <span class="icon has-text-info"><i class="fas fa-home"></i></span>
       <span>Home</span>
       </NavLink>
      </a>
    </li>
    
    
    <li>
      <a>
      <NavLink
       to={ {pathname:"/companies"}}>
      <span class="icon has-text-info"><i class="fas fa-book"></i></span>
       <span>Stocks</span>
       </NavLink>
      </a>
    </li>
    <li>
      <a>
      
      <span class="icon has-text-info"><i class="fas fa-file-alt"></i></span>
       <span>Stock</span>
       
      </a>
    </li>
    
    
    
    </ul>
    </div>
<div class="media">
      <div class="media-left">
        <figure class="image is-200x200">
          <img alt="p" src={"/logos/" + dataAccess.symbol + ".svg"}/>
        </figure>
      </div>
</div>
 
  
    <div class="content">
       <ul>
    <li> <h5>Symbol:  {dataAccess.symbol} </h5>  </li>
    <li><h5>Sector:{dataAccess.sector} </h5> </li>
    <li><h5>sub-Industry:{dataAccess.subIndustry}</h5></li>
    <li><h5>Address:{dataAccess.address}</h5></li>
  </ul>
      
    </div>
  </div>
  





        );


    }


}
export default SingleStock;
