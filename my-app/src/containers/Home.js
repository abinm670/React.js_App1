import React, {Component} from 'react'; 
import { NavLink } from 'react-router-dom';



//import HeaderMenu from '../components/HeaderMenu.js'

class Home extends Component{
    
    
    

    
    constructor(props)
    {
        super(props); 
        this.state = { home:[], 
        user:false, 
        companies:false,
        portfolio:false,
       
        };
    }
    

        render()
        {
            return( 
         
        <article className="section columns">
         <div className="columns">
         
<div className="card">
<div className="card-content">
    <div class="card-image">
     <figure>
      <img src="https://placeimg.com/640/480/arch/grayscale" alt="Placeholder"/>
      </figure>
     </div>
     Browser and edit the users in the system
<NavLink className="button is-primary is-fullwidth"
to={ {pathname:"/users"}}>View Users</NavLink>


        
</div>
</div>



<div className="card">
<div className="card-content">
    <div className="card-image">
     <figure>
      <img src="https://placeimg.com/640/480/tech/grayscale" alt="Placeholder"/>
     </figure>
     </div>
View financial information on companies
<NavLink className="button is-primary is-fullwidth"
to={ {pathname:"/companies"}}>View Companies</NavLink>


        
</div>
</div>


<div className="card">
<div className="card-content">
    <div className="card-image">
     <figure>
      <img src='https://placeimg.com/640/480/tech/grayscale' alt="Placeholder"/>
      </figure>
     </div>
    View current stock portfolio
    {/*<HeaderMenu this.setState() className="button is-primary is-fullwidth" />*/} 
<NavLink className="button is-primary is-fullwidth" 
to={ {pathname:"/stocks"}}>View Portfolio</NavLink>
       
</div>
</div>


    
 

</div>
</article>      
         
           
);
}
}    
    


export default Home; 



  