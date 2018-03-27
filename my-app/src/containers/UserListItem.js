import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class UserListItem extends Component {



    handlerSelectUser = (key) => {
        this.props.select(key);
    }

    render() {
        let classes = "panel-block is-link";
        classes += this.props.active;
        //console.log(this.props.identifier); 
        //console.log(); 
        return (


            <Link className={classes}
                        to={"/user/" + this.props.identifier}
                        //key={this.props.identifier}
                        >
                        
                       
                {this.props.children} 
                           </Link>
                           


        );
    }
}
export default UserListItem;
