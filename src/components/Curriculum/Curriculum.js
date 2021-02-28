import React, { Component } from 'react'
import Web3 from 'web3';
import './css.css';

class Curriculum extends Component {
 

    render(){
        return ( 
        <div className="curriculum_panel">
             CURRICULUM
             <br></br><br></br>
            <div id="earth" className="curriculum_row">
            <div className="curriculum_row_label">Earth</div>
            <div className="curriculum_row_item">
                <div className="curriculum_row_icon">🌼</div>
                <div className="curriculum_row_value">0</div>
            </div>
            <div className="curriculum_row_item">
                <div className="curriculum_row_icon">🌈</div>
                <div className="curriculum_row_value">0</div>
            </div>
            <div className="curriculum_row_item">
                <div className="curriculum_row_icon">🐳</div>
                <div className="curriculum_row_value">0</div>
            </div>
            <div className="curriculum_row_item">
                <div className="curriculum_row_icon">🍂</div>
                <div className="curriculum_row_value">0</div>
            </div>
            </div>
            <div id="friend" className="curriculum_row">
            <div className="curriculum_row_label">Friend</div>
            <div className="curriculum_row_item">
                <div className="curriculum_row_icon">😺</div>
                <div className="curriculum_row_value">0</div>
            </div>
            <div className="curriculum_row_item">
                <div className="curriculum_row_icon">👺</div>
                <div className="curriculum_row_value">0</div>
            </div>
            <div className="curriculum_row_item">
                <div className="curriculum_row_icon">👽</div>
                <div className="curriculum_row_value">0</div>
            </div>
            <div className="curriculum_row_item">
                <div className="curriculum_row_icon">👤</div>
                <div className="curriculum_row_value">0</div>
            </div>
            </div>
            <div id="meme" className="curriculum_row">
            <div className="curriculum_row_label">Meme</div>
            <div className="curriculum_row_item">
                <div className="curriculum_row_icon">🏆</div>
                <div className="curriculum_row_value">0</div>
            </div>
            <div className="curriculum_row_item">
                <div className="curriculum_row_icon">🦄</div>
                <div className="curriculum_row_value">0</div>
            </div>
            <div className="curriculum_row_item">
                <div className="curriculum_row_icon">🤡</div>
                <div className="curriculum_row_value">0</div>
            </div>
            <div className="curriculum_row_item">
                <div className="curriculum_row_icon" onClick={() => window.open("/curricular//curricular/?cx=0x0975ea7f20405af7Aa46FA41464f6d69d7aac4d6")}>💩</div>
                <div className="curriculum_row_value">0</div>
            </div>
            </div>
            <div id="social" className="curriculum_row">
            <div className="curriculum_row_label">Social</div>
            <div className="curriculum_row_item">
                <div className="curriculum_row_icon">🤹</div>
                <div className="curriculum_row_value">0</div>
            </div>
            <div className="curriculum_row_item">
                <div className="curriculum_row_icon">💞</div>
                <div className="curriculum_row_value">0</div>
            </div>
            <div className="curriculum_row_item">
                <div className="curriculum_row_icon">🔑</div>
                <div className="curriculum_row_value">0</div>
            </div>
            <div className="curriculum_row_item">
                <div className="curriculum_row_icon">🥇</div>
                <div className="curriculum_row_value">0</div>
            </div>
            </div>
            
        </div>
        );
    }


}




const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")

export default Curriculum