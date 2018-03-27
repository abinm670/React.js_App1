import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import SingleUserStock from '../containers/SingleUserStock.js';
//import UserListItem from './UserListItem.js' ; 
//import '../SingleUser.css';
import axios from 'axios';

class SingleUser extends Component {

  


    hideAddress() {
        if (this.state.address) {
            this.setState({ address: false });
            var hidAdd = document.getElementById('ADD');
            hidAdd.className = "message-body";
            //alert(this.state.email);
            // console.log(this.state.email);
        }

        else {
            //alert("Yess"+ this.state.email);
            this.setState({ address: true });

            let hidAdd = document.getElementById('ADD');
            hidAdd.className = "message-body is-hidden";

        }

    }
    
     hideCompany () {
        if (this.state.email) {
            this.setState({ email: false });
            var company = document.getElementById('COMP');
            company.className = "message-body";
            //alert(this.state.email);
            // console.log(this.state.email);
        }

        else {
            //alert("Yess"+ this.state.email);
            this.setState({ email: true });

            let companyHide = document.getElementById('COMP');
            companyHide.className = "message-body is-hidden";

        }

    }



    constructor(props) {
        super(props);
        console.log(this.props.match.params.id);
        this.state = {
            users: [],
            company: false, 
            address:false,
            details:true



        };
        this.hideAddress = this.hideAddress.bind(this);
        this.hideCompany = this.hideCompany.bind(this);
        this.function1 = this.function1.bind(this);
        this.function2 = this.function2.bind(this);
        //this.function3= this.function3.bin(this); 


    }

function1(){
    this.setState({details:false});
    
}
function2(){
    this.setState({details:true});
    
}
//function3()
//{
   // this.setState({details:true});
//}




    componentDidMount() {
        // Here we are using the Axios package to retrieve "dummy" API data
        axios.get('https://jsonplaceholder.typicode.com/users/' + this.props.match.params.id)
            .then(response => {
                this.setState({ users: response.data });
                console.log(this.state.users);
            })

            .catch(function(error) {
                alert('Error with api call loool ... error=' + error);
            });

    }

    render() {


        if (!this.state.users || this.state.users.length === 0) 
        // to make sure the content has been download all the content
        {
            return null
        }
        if(this.state.details){
        return (


<div class="card is-mobile">


<div className="message is-primary">     
 <header className="message-header">
<strong> {this.state.users.name}</strong>
</header>           
            
            
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
 
    <li class="is-active">
      <a>
      
        <span class="icon has-text-info"><i class="fas fa-image"></i></span>
        <span>Details</span>
      </a>
    
    </li>
    
    <li>
      <a>
        <span class="icon is-small"><i class="fas has-text-info"></i></span>
       <div>
        <span onClick={this.function1}>Portfolio</span>
       
       </div>
      </a>
      
    </li>
    </ul>
   </div>
   </div> 
       




    <div className="">
     <div className= "container">
      <div class="notification">
      <p className="subtitle is-6"><strong>ID: <a  className="has-text-link">User ID:{this.state.users.id}</a></strong></p>
    
    <p className="subtitle is-6"><strong>Email: <a className="has-text-link">{this.state.users.email}</a></strong></p>
        <p className="subtitle is-6"><strong > Phone: <h  className="has-text-danger"> {this.state.users.phone}</h></strong> </p>
        
        
        </div>
        </div>
    
    
    </div>
   
   {/*  address ---------------------   */}
   
  <article class="message is-warning">
  <div class="message-header">
    <p><strong>Address</strong></p>
    <button class="delete" aria-label="delete" onClick={this.hideAddress}></button>
  </div>
  <div class="message-body" id="ADD">
  <div>
  <p>
 <span className="has-text-danger icon">
  <p class="fa fa-home"></p> 
</span></p></div>
<address>
    <p>{this.state.users.address.street}</p>
    <p>{this.state.users.address.suite}</p>
    <p>{this.state.users.address.city}</p>
    <p>{this.state.users.address.zipcode}</p>
    </address>
  </div>
</article>
  
  {/*  Company ---------------------   */}
  
  
  
  <article class="message is-info">
  <div class="message-header">
    <p><strong>Company</strong></p>
    <button class="delete" aria-label="delete" onClick={this.hideCompany}></button>
  </div>
  <div class="message-body" id="COMP">
  <div>
  <span class="icon has-text-info">
  <h class="fas fa-info-circle"></h>

</span>
</div>
    <p>{this.state.users.company.name}</p>
    <p>{this.state.users.company.suite}</p>
    <p>{this.state.users.company.catchPhrase}</p>
    <p>{this.state.users.company.bs}</p>
    
  </div>
</article>
  
  
  
  
  
  </div>
  );
        }//end Of Detail page 
        
        
       
           else
           {
            return(
                <div className="card is-mobile">
                <div className="message is-primary">     
 <header className="message-header">
<strong> {this.state.users.name}</strong>
</header>           
            
            
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
 
 
    <li class="is-active">
      <a>
      
        <span class="icon has-text-info"><i class="fas fa-image"></i></span>
        <span  onClick={this.function2}>Details</span>
      </a>
    </li>
    <li>
    
      <a>
        <span class="icon is-small"><i class="fas fa-music"></i></span>
       <div>
        <span>Portfolio</span>
       
       </div>
      </a>
      
    </li>
    </ul>
   </div>
   </div> 
                <SingleUserStock userId={this.props.match.params.id} />
                
                </div>
                
                );
            
        }// end Portfolio
       
    } 
    
}
export default SingleUser;







