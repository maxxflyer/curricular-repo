import React, { Component } from 'react'
import './css.css';


class Splash extends Component {
   
    render(){
        console.log(this.props.update) 
        return ( 
        <div>

        <div id="splash_flyer"><div id="splash_mainlabel">CURRICULAR</div>
            <div id="splash_image"  alt="NFT"  src="https://i.imgur.com/O9UT6cC.png"  onClick={() => this.props.update("Curricular")}>🎓</div>
            <div id="HappyFarm_sublabel">Open Planetary Curricular Protocol</div>
            <div className="splash_button" onClick={() => this.props.update("Features")}>SEE FEATURES</div>

        </div>
      
        </div>
        );
    }


}




export default Splash