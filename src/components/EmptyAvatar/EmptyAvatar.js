import React, { Component } from 'react'
import Avatar from '../Avatar/Avatar';
import './css.css';


class EmptyAvatar extends Component {
   
    render(){
        
        return ( 
            <Avatar update={this.props.update}></Avatar>
        );
        
    }


}




export default EmptyAvatar