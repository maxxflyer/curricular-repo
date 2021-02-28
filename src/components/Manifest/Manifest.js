import React, { Component } from 'react'
import './css.css';

class Manifest extends Component {
   
    render(){
        console.log(this.props.update) 
        return ( 
            <div>
                <div id="bows_flyer" className="text white">
                    <div id="bows_mainlabel">🎈 MANIFEST</div>
                    <div id="bows_sublabel">Decentralized Org Phylosophy</div>
                    <div className="bows_panel dark darkblue text white">
                        <div className="instructions_title light lightblue text black">🔒 PRINCIPLES</div>
                        <br></br><br></br>
                        Curricular is autonomous.
                        <br></br>
                        <br></br>
                        Curricular is decentralized.
                        <br></br>
                        <br></br>
                        Curricular is a tokenized Org ruled by Hats tokens.
                        <br></br>
                        <br></br>
                        Curricular is a modular and open protocol.
                        <br></br>
                        <br></br>
                        Anyone can propose a new official curricular factory. 
                        <br></br>
                        <br></br>
                        Factories creators can establish their own business model.
                        <br></br>
                        <br></br>
                        Curricular is fair and applies symbolic fees for further R&D
                        <br></br><br></br>
                        
                        
                    </div>
                </div>
                <br></br><br></br>
            </div>
        );
    }

}

export default Manifest