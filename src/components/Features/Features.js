import React, { Component } from 'react'
import './css.css';

class Features extends Component {
   
    render(){
        console.log(this.props.update) 
        return ( 
            <div>
                <div id="bows_flyer" className="text white">
                    <div id="bows_mainlabel">💈 PLATFORM FUNCTIONALITIES</div>
                    <div id="bows_sublabel">All you can do in 🎓Curricular</div>
                    <div className="bows_panel dark darkblue text white">
                        <div className="instructions_title light lightblue text black">🎓 Emit as Individual or Company</div>
                        <br></br>
                        Anyone can generate Certified Curricular Badges and deliver them to any entity in order to testify a given experience.
                        <br></br><br></br><br></br>
                        <div className="instructions_title light lightblue text black">💫 Autonomous Procedural Emission</div>
                        <br></br>
                        Factories can be triggered by autonomous procedures, contracts and organizations governance.
                        <br></br><br></br><br></br>
                        <div className="instructions_title light lightblue text black">🎎 Run multiple collections</div>
                        <br></br>
                        You can create families of Curricula (called Collections) customized for different specific jobs. 
                        <br></br><br></br><br></br>
                        <div className="instructions_title light lightblue text black">🏠 Explore your collected skills</div>
                        <br></br>
                        Manage your Curricula with a simple interface.
                        <br></br><br></br><br></br>
                        <div className="instructions_title light lightblue text black">🦄 Showcase your skills</div>
                        <br></br>
                        Showcase ordered and selected skills and share them according to your needs.
                        <br></br><br></br><br></br>
                        <div className="instructions_title light lightblue text black">💎 Create Contract Based Curricula</div>
                        <br></br>
                        An R&D for a first final universal job contract standard procedure.
                        <br></br><br></br>
                        
                    </div>
                </div>
                <br></br><br></br>
            </div>
        );
    }

}

export default Features