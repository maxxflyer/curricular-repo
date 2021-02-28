import React, { Component } from 'react'
import './css.css';


class Friends extends Component {
   
    render(){
        console.log(this.props.update) 
        return ( 
        <div id="Friends_flyer">
            
            <span id="Friends_image" aria-labelledby="jsx-a11y/accessible-emoji" role="img">💔</span>
            <div id="Friends_mainlabel">UnderConstruction</div>
        </div>
        );
    }


}




export default Friends