import React, { Component } from 'react'
import './css.css';


class Instructions extends Component {

    render(){
        console.log(this.props.update) 
        return ( 
        <div id="Instructions_panel">
            <div id="Instructions_mainlabel"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌈</span> Instructions</div>
                <div className="Instruction">
                    <div className="Instruction_image"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🚜</span></div>
                    <div className="Instruction_label">What is HappyFarm DFO?</div>
                    <div className="clear"></div>
                    <div className="Instruction_desc">HappyFarm is a Decentralized Flexible Organization ruled by BEANS<span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌱</span> tokens, oriented to DEFI and inhabited by a community of DEFI farmers to:
                    <br></br><i>
                    <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">☘️</span> Offer Individual Farming 
                    <br></br>          
                    <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🍀</span> Research Collective Farming
                    <br></br>
                    <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🎄</span> Build Farming Services for the public</i>
                    </div>
                    <input  className="Instruction_button2" type="button" value="👽 PAPER" onClick={() => jump("https://cdn.discordapp.com/attachments/751252665085984882/751253034906026126/HAPPYFARM.pdf")}/>
                    <input  className="Instruction_button3" type="button" value="👻👻👻 DFO" onClick={() => this.props.update("DFO")}/>
                </div>
                <div className="Instruction">
                    <div className="Instruction_image"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌱</span></div>
                    <div className="Instruction_label">What is Farming?</div>
                    <div className="clear"></div>
                    <div className="Instruction_desc">Farming is an innovative DEFI way of gaining tokens producing value to your favorite projects by:
                    <br></br><br></br><i>
                    <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🐳</span> Providing Liquidity
                    <br></br>          
                    <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🐘</span> Staking
                    <br></br>
                    <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🐷</span> and more...</i>
                    </div>
                    <input  className="Instruction_button" type="button" value="🚜 FARM NOW" onClick={() => this.props.update("HappyFarm")}/>
                </div>
                <div className="Instruction">
                    <div className="Instruction_image"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌾</span></div>
                    <div className="Instruction_label">What can I Farm?</div>
                    <div className="clear"></div>
                    <div className="Instruction_desc">You can farm ERC20 tokens or NFTs, from any of the offers coming from: the  or from , and also any asset of HappyFarm economy:
                    <br></br><i>
                    <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">👻</span> DFOHUB ecosystem offers
                    <br></br>          
                    <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌱</span> HappyFarm Economy Assets
                    <br></br>
                    <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">⚡️</span> HappyFarm offers or offers from external sources...</i>
                    </div>
                    <input  className="Instruction_button2" type="button" value="🚜 FARM NOW" onClick={() => this.props.update("HappyFarm")}/>
                    <input  className="Instruction_button3" type="button" value="👻 ACCOUNT" onClick={() => this.props.update("Beanometer")}/>
                </div>
                <div className="Instruction">
                    <div className="Instruction_image"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">💧</span></div>
                    <div className="Instruction_label">How Can I Farm?</div>
                    <div className="clear"></div>
                    <div className="Instruction_desc">You will need at least one ingredient depending on the offer, and you will have to stake it somehow in DFOHUB staking contract or uniswap or via combined logics. <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🍾</span>
                    <br></br><br></br>
                    
                    </div>
                    <input  className="Instruction_button" type="button" value="🥗 RECIPES" onClick={() => this.props.update("Math")}/>
                </div>
        </div>
        );
    }


}

function jump(page){
    window.open(page)
  }


export default Instructions