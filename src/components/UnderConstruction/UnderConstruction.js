import React, { Component } from 'react'
import './css.css';


class UnderConstruction extends Component {
   
    render(){
        console.log(this.props.update) 
        return ( 
        <div id="UnderConstruction_flyer">
            <br></br><br></br>
            <span id="UnderConstruction_image" aria-labelledby="jsx-a11y/accessible-emoji" role="img">💔</span>
            <div id="UnderConstruction_mainlabel">UnderConstruction</div>
            <div className="create_button lightblue" onClick={() => this.props.update("Factory")}>back</div>
        </div>
        );
    }


}




export default UnderConstruction