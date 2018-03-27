


import React, {Component} from 'react';
//import { NavLink } from 'react-router-dom';
class UserDetailItem extends Component {

constructor(props) {
super(props);
this.handleChange = this.handleChange.bind(this); 
this.state = { currentValue: props.currentValue };

}

handleChange(e) {
// save the new value in our state
this.setState({ currentValue: e.target.value });
// and call the event handler passed to us by the parent
this.props.handleTextChange(e.target.value, this.props.identifier);
}



   render() {
         
      return (
              <div>
             
     <div> 
              <div>
               <h
                    type={this.props.type}
                    ref={this.props.identifier}
                    placeholder={this.props.place}
                    value={this.props.currentValue}
                    onChange= {this.handleChange}
                    />
                    
 <span>
<i></i>
</span>  
</div>
</div>
</div>

);
}
}
export default UserDetailItem;










