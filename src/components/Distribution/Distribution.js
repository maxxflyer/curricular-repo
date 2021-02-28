import React, { Component } from 'react'
import './css.css';


class Distribution extends Component {
   
    render(){
        console.log(this.props.update) 
        return ( 
        <div id="Distribution_flyer">
            <span id="Distribution_mainImage" aria-labelledby="jsx-a11y/accessible-emoji" role="img">🏡</span> 
            <div className="Distribution_mainlabel">🚜 HappyFarm</div>
            <br></br>
            <div className="Distribution_mainlabel">Voting Power Distribution Model</div>
            <img id="Distribution_image" src="https://i.imgur.com/co5AuFN.png"></img>    
        </div>
        );
    }


}




export default Distribution