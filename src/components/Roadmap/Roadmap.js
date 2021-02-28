import React, { Component } from 'react'
import './css.css';

class Roadmap extends Component {
   
    render(){
        console.log(this.props.update) 
        return ( 
            <div>
                <div id="bows_flyer" className="text white">
                    <div id="bows_mainlabel">🔮 ROADMAP</div>
                    <div id="bows_sublabel">Community Curated</div>
                    <div className="bows_panel dark darkblue text white">
                        <div className="instructions_title light lightblue text black">🏰 PLATFORM</div>
                        <br></br><br></br>
                        🎓 Direct Curricular Emission
                        <br></br>
                        <br></br>
                        👻 Account Management
                        <br></br>
                        <br></br>
                        💫 Contract Based Emission
                        <br></br>
                        <br></br>
                        🤖 ECO Autonomous Curricular Microservices
                        <br></br>
                        <br></br>
                        🎭 Custom Showcasing/Sharing
                        <br></br>
                        <br></br>
                        
                        <i>For an updated list and for the creation of a new modules please refer to: https://discord.gg/F3Cqksx</i>
                        <br></br>
                        <br></br></div>
                </div>
                <br></br>
                        <br></br>
            </div>
        );
    }

}

export default Roadmap