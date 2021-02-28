import React, { Component } from 'react'
import './css.css';

class Dev extends Component {
   
    render(){
        console.log(this.props.update) 
        return ( 
            <div>
                <div id="bows_flyer" className="text white">
                    <div id="bows_mainlabel">💀 JOIN OPEN DEVELOPMENT</div>
                    <div id="bows_sublabel">All Opportunities for Remote Devs</div>
                    <div className="bows_panel dark darkblue text white">
                        <div className="instructions_title light lightblue text black">🌷 JOBS OFFER</div>
                        <br></br><br></br>
                        Under Construction
                        <br></br>
                        <br></br><br></br>
                        <div className="instructions_title light lightblue text black">🔫 RULES</div>
                        <br></br><br></br>
                        Join Discord server
                        <br></br>
                        <br></br>
                    </div>
                </div>
                <br></br>
                <br></br>
            </div>
        );
    }

}

export default Dev