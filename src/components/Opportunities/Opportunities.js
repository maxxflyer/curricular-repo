import React, { Component } from 'react'
import './css.css';

class Opportunities extends Component {
   
    render(){
        console.log(this.props.update) 
        return ( 
            <div>
                <div id="bows_flyer" className="text white">
                    <div id="bows_mainlabel">🎁 PROPS</div>
                    <div id="bows_sublabel">SmartShop Opportunities List</div>
                    <div className="bows_panel dark darkblue text white">
                        <div className="instructions_title light lightblue text white">🌈 FREE BOWS TOKENS</div>
                        <br></br><br></br>
                        Grab 100 free SmartShop Bows for each HappyFarm Beans you staked.
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="instructions_title light lightblue text white">🌾 OFFER LIQUIDITY</div>
                        <br></br><br></br>
                        You put the ETH and SmartShop puts the Bows.
                        <br></br>
                        <br></br>
                        A uniswap pool is created for one year.
                        <br></br>
                        <br></br>
                        At the end of the year you get back the ETH the Bows the fees and 100% Bows more (redeemable weekly, calculated according to the Bows you initially created liquidity for)
                        <br></br>
                        <br></br><br></br>
                        <div className="instructions_title light lightblue text white">🦄 ETHEREAN TURIST FOREVER</div>
                        <br></br><br></br>
                        Find a genuine idea for a new simple module and have it added to the ideas list
                        <br></br>
                        <br></br>
                        If your module is built by a Dev (anyone is free to book it and build it) you will get 1% of the fees produced by the module forever
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="instructions_title light lightblue text white">🔥 MORE...</div>
                        <br></br><br></br>
                        More offers will come from the community.
                    </div>
                </div>
            </div>
        );
    }

}

export default Opportunities