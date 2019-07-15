import React, {Component} from 'react';  // presentational, does not contain state, thats why make it function
import { NavLink } from 'react-router-dom';




class HeaderBar extends Component{

constructor(props)
{
  super(props);
  this.state ={isToggleOn:true};

  this.handleClick = this.handleClick.bind(this);

}

//https://codepen.io/gaearon/pen/xEmzGg?editors=0010
handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }

    ));
  }



render()
{
return (


<nav class="navbar is-link">

  <div class="navbar-brand">

<dl>
  <h2 className="is-centered"> Abdullah Binmahfouz   </h2>
  <br/>

   <i>


    </i>

    </dl>

    <div class="navbar-burger burger " onClick={this.handleClick} data-target="navbarExampleTransparentExample">

      <span></span>
      <span></span>
      <span></span>

    </div>
  </div>

  <div id="navbarExampleTransparentExample" class={this.state.isToggleOn ? "navbar-menu " : "navbar-menu is-active "}>
      <div class="navbar-end">
      <div class="navbar-brand">
      <div class="navbar-item has-dropdown is-hoverable">

          <a class="navbar-link is-hidden-touch">
              Menu
          </a>


    <div class="navbar-dropdown is-boxed">

      <NavLink className="navbar-item"
             to={ {pathname: "/home"}}>Home</NavLink>



       <NavLink className="navbar-item"
          to={ {pathname:"/users"}}>Users</NavLink>



       <NavLink className="navbar-item "
          to={ {pathname:"/companies"}}>Stocks</NavLink>



      <NavLink className="navbar-item "
          to={ {pathname:"/about"}}>About</NavLink>

    </div>


    </div>
    </div>
    </div>
    </div>


</nav>

);}//end of the render

}//end of the class



export default HeaderBar;
