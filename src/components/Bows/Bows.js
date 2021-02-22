import React, { Component } from 'react'
import './css.css';


class Bows extends Component {
   
    render(){
        console.log(this.props.update) 
        return ( 
            <div>
                <div id="bows_flyer" className="text white">
                    <div id="bows_mainlabel">🎓 Hats</div>
                    <div id="bows_sublabel">Hats Distribution/Work Logic</div>
                    <div className="bows_panel dark darkblue text white">
                        <div className="instructions_title light lightblue text black">💦 DISTRIBUTION</div>
                        <br></br><br></br>
                        Hats tokens are the equities of the Curricular Org.
                        <br></br>
                        <br></br>
                        1M Hats supply.
                        <br></br>
                        <br></br>
                        15k Hats to DFOHUB.
                        <br></br>
                        <br></br>
                        Token distribution will be defined soon and designed to intercept BEANS, BUIDL, ARTE, and UNIFI hodlers
                        <br></br>
                        <br></br>
                        Airdrop?
                        <br></br>
                        Farming?
                        <br></br>
                        Crafting?
                        <br></br><br></br><br></br>
                        <div  className="instructions_title light lightblue black">🤹 LOGIC</div>
                        <br></br><br></br>
                        If you own Hats you own part of the Organization.<br></br>
                        Hats holders must vote to accept new extensions/factories in the protocol.<br></br>
                        Hats holders must vote to define the business model logic:<br></br><br></br>
                        <i>
                        Development (Incentives - Outsourcing - Hiring)<br></br>
                        Promotion (Hackathons)<br></br>
                        more...<br></br>
                        <br></br>
                        </i>
                    </div>
                </div>
                <br></br>
                <br></br>
            </div>
        );
    }


}




export default Bows