import React from 'react';
import { NavLink } from 'react-router-dom'; 



    const HeaderMenu = function (props) {
return (
    
<nav className="navbar has-shadow">
<div className="navbar-tabs">

<NavLink className="navbar-item is-tab "
to={ {pathname: "/home"}}></NavLink>
<NavLink className="navbar-item is-tab "
to={ {pathname:"/users"}}></NavLink>
<NavLink className="navbar-item is-tab "
to={ {pathname:"/companies"}}></NavLink>
<NavLink className="navbar-item is-tab "
to={ {pathname:"/portfolio"}}></NavLink>
</div>
</nav>

);
};

 
export default HeaderMenu;