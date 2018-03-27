import React, { Component } from 'react';



class UserDetails extends Component {


    handleItemChange(value, identifier) {
        let newUser = this.state.user;
        newUser[identifier] = value;
        this.setState({ user: newUser });
    }

    constructor(props) {
        super(props);
        this.state = { user: props.user };
        this.handleItemChange = this.handleItemChange.bind(this);
    }






    /* This lifecycle function is called when a component receives new
props values. Our parent component passes a user object to this
component, so we need to update state when the props value changes.
*/


    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({ user: nextProps.user });
        }
    }

    /* Called when the user changes the content in a UserDetailItem control.
     */

    render() {
        return (


 
            
          
                            
<div></div>
           
                            
                            
          



        );
    }
}
export default UserDetails;
