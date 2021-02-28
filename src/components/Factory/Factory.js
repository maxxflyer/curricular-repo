import React, { Component } from 'react'
import './css.css';


class Factory extends Component {
   
    render(){
        console.log(this.props.update) 
        return ( 
        <div>

        <div id="factory_flyer">
            
            <div id="factory_mainlabel">DIRECT CURRICULAR BADGES 🐾</div>

            <div className="factory_sublabel">🌍 Earth</div>
            <div className="factory_row">
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","flower")}>🌼</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","rainbow")}>🌈</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","whale")}>🐳</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","leaf")}>🍂</div>
            </div>
            <div className="factory_sublabel">🐸 Meme</div>
            <div className="factory_row">
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","cup")}>🏆</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","unicorn")}>🦄</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","clown")}>🤡</div>
            <div className="curriculum_button" onClick={() => this.props.update("create","0x0975ea7f20405af7Aa46FA41464f6d69d7aac4d6")}>💩</div>
            </div>
            <div className="factory_sublabel">🎎 Social</div>
            <div className="factory_row">
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","entertainer")}>🤹</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","pr")}>💞</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","townkey")}>🔑</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","medal")}>🥇</div>
            </div>
            <div className="factory_sublabel">🍬 Friend</div>
            <div className="factory_row">
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","friend")}>😺</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","enemy")}>👺</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","frienemy")}>👽</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","unknown")}>👤</div>
            </div>
 

            <div className="factory_sublabel">⭐️ Special</div>
            <div className="factory_row">
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","idea")}>💡</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","whitehat")}>🎓</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","blackhat")}>☠️</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","help")}>🚑</div>
            </div>            
            <div className="clear"></div>
            <div className="factory_mainlabel2">AGREEMENT CURRICULAR BADGES 🐾</div>
            <div className="factory_sublabel">🎓 EDUCATION TRACKING</div>
            <div className="factory_row">
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","creator")}>💼</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","proposer")}>👀</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","voter")}>🦍</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","winner")}>🎪</div>
            </div>
            <div className="factory_sublabel">💫 UNIVERSAL JOBS STANDARDS</div>
            <div className="factory_row">
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","creator")}>👷</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","proposer")}>🕵️</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","voter")}>👮</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","winner")}>🎅</div>
            </div>
            <div className="factory_sublabel">💍 RELATIONSHIP</div>
            <div className="factory_row">
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","creator")}>👨‍👩‍👧‍👦</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","proposer")}>🎏</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","voter")}>🤸</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","winner")}>🤼</div>
            </div>
            <div className="clear"></div>
            <div className="factory_mainlabel2">CURRICULAR GEO_BADGES 🐾</div>
            <div className="factory_sublabel">🌌 FLAGS (claimable)</div>
            <div className="factory_row">
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","creator")}>💈</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","proposer")}>⛳️</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","voter")}>🗿</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","winner")}>🌋</div>
            </div>
            <div className="clear"></div>
            <div className="factory_mainlabel2">AUTO CURRICULAR BADGES 🐾</div>
            <div className="factory_sublabel">👻 ECO/DAO (machine triggered)</div>
            <div className="factory_row">
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","creator")}>👑</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","proposer")}>🔥</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","voter")}>❤️</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","winner")}>⭐️</div>
            </div>
            <div className="factory_sublabel">⛽️ DEFI (machine triggered)</div>
            <div className="factory_row">
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","creator")}>💎</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","proposer")}>💉</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","voter")}>💸</div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","winner")}>⚰️</div>
            </div>
            <div className="factory_sublabel">💣 IFTTT (machine triggered)</div>
            <div className="factory_row">
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","creator")}></div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","proposer")}></div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","voter")}></div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","winner")}></div>
            </div>
            <div className="clear"></div>
            <div className="factory_mainlabel2">CONDITIONAL CURRICULAR BADGES 🐾</div>
            <div className="factory_sublabel">🛠 CRAFTS</div>
            <div className="factory_row">
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","creator")}></div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","proposer")}></div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","voter")}></div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","winner")}></div>
            </div>
            <div className="clear"></div>
            <div className="factory_mainlabel2">PROCEDURAL CURRICULAR BADGES 🐾</div>
            <div className="factory_sublabel">⚗️ ALCHEMIES</div>
            <div className="factory_row">
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","creator")}></div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","proposer")}></div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","voter")}></div>
            <div className="curriculum_button disabled" onClick={() => this.props.update("UnderConstruction","winner")}></div>
            </div>
            
        </div>
      
        </div>
        );
    }


}




export default Factory