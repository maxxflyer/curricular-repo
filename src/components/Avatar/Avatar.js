import React, { Component } from 'react'
import Web3 from 'web3';
import './css.css';
import utils from './../../library'
import PersonalFeed from '../PersonalFeed/PersonalFeed'
import Curriculum from '../Curriculum/Curriculum'


class Avatar extends Component {
   state={avatar:"0xdA1Ec8F2Fb47e905079663bCEA69f1a2B010f2D3"}

    componentDidMount() {
        this.loadBlockchainData()
      
    }
    
    
        async loadBlockchainData() {
            let account
            window.ethereum.enable().then(async function (accounts) {
                account=accounts[0];
                if(getUrlVars()['account'])account=getUrlVars()['account']
                if(account=="undefined")account=accounts[0]
                window.history.pushState('avatar_page', 'Avatar Display', '/curricular/?account='+account)
                const { REACT_APP_ABI } = process.env;
                const { REACT_APP_BOWS } = process.env;
                const beans = new web3.eth.Contract(JSON.parse(REACT_APP_ABI), REACT_APP_BOWS) 
          
                if(account!=""){   
                    let avatar="👻";
                    let res=account
                    avatar=utils.getAvatar(res.toLowerCase());
                    document.getElementById("Avatar_face").innerHTML = '<span class="Avatar_face" aria-labelledby="jsx-a11y/accessible-emoji" role="img">'+avatar+'</span>';
                    document.getElementById("Avatar_name").innerHTML = avatar;
                    let avatar2=getFamily(res.toLowerCase());
                    document.getElementById("Avatar_family").innerHTML = avatar2;
                    document.getElementById("Avatar_signature").innerHTML = avatar+avatar2;
               }else{
                    document.getElementById("Avatar_face").innerHTML = '<span class="Avatar_face" aria-labelledby="jsx-a11y/accessible-emoji" role="img">👻</span>';
                    document.getElementById("Avatar_family").innerHTML = '<span class="Avatar_face" aria-labelledby="jsx-a11y/accessible-emoji" role="img">👻</span>';                 
                }
            })
            this.setState({avatar:account})
        }

    render(){
        return ( 
            <>
            <div className="avatar_left_col">
                <Curriculum></Curriculum>
            </div>
            <div className="cardpanel">
            <div id="Avatar_mainlabel">Official ID Card</div>
            <span id="Avatar_face" aria-labelledby="jsx-a11y/accessible-emoji" role="img" onClick={() => window.open('https://etherscan.com/address/'+getUrlVars()["account"])}></span>
            <div className="clear"></div>

            <PersonalFeed update={this.props.update} avatar={this.state.avatar}></PersonalFeed>
            <div className="clear"></div>
            <div id="Avatar_panel" className="Avatar_panel darkblue">
            
            <div className="Avatar_row">
            <div className="Avatar_label">First Name:</div>
            <span id="Avatar_name" className="Avatar_names" aria-labelledby="jsx-a11y/accessible-emoji" role="img">🐻</span>
            </div>
            <div className="clear"/>
            <div className="Avatar_row">
            <div className="Avatar_label">Family Name:</div>
            <span id="Avatar_family"  className="Avatar_names" aria-labelledby="jsx-a11y/accessible-emoji" role="img">🦁</span>
            </div>
            <div className="clear"/>
            <div className="Avatar_row">
            <div className="Avatar_label">Birth Place:</div>
            <span className="Avatar_names" aria-labelledby="jsx-a11y/accessible-emoji" role="img">Barn</span>
            </div>
            <div className="clear"/>
            <div className="Avatar_row">
            <div className="Avatar_label">Locality:</div>
            <span className="Avatar_names" aria-labelledby="jsx-a11y/accessible-emoji" role="img">⛰️</span>
            </div>
            <div className="clear"/>
            <div className="Avatar_row">
            <div className="Avatar_label">State:</div>
            <span className="Avatar_names" aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌄</span>
            </div>
            <div className="clear"/>
            <div className="Avatar_row">
            <div className="Avatar_signature">signature:</div>
            <div className="clear"/>
            <span  id="Avatar_signature" className="Avatar_signature" aria-labelledby="jsx-a11y/accessible-emoji" role="img">🐻🦁</span>
            </div>
            <br></br>
            <br></br>
            <br></br>
         
            <div className="clear"/>
        </div>
        </div>
        </>
        );
    }


}

function getAvatar(res){
    let avatar="👻";
    if(res.slice(-1)==="0")avatar="🐶";
    if(res.slice(-1)==="1")avatar="🐱";
    if(res.slice(-1)==="2")avatar="🐹";
    if(res.slice(-1)==="3")avatar="🐸";
    if(res.slice(-1)==="4")avatar="🐵";
    if(res.slice(-1)==="5")avatar="🐻";
    if(res.slice(-1)==="6")avatar="🐼";
    if(res.slice(-1)==="7")avatar="🐰";
    if(res.slice(-1)==="8")avatar="🐨";
    if(res.slice(-1)==="9")avatar="🐯";
    if(res.slice(-1)==="a")avatar="🦁";
    if(res.slice(-1)==="b")avatar="🐮";
    if(res.slice(-1)==="c")avatar="🐷";
    if(res.slice(-1)==="d")avatar="🐺";
    if(res.slice(-1)==="e")avatar="🐗";
    if(res.slice(-1)==="f")avatar="🐔";
    return avatar;
}

function getFamily(ress){
    
    let avatar="☠️";
    let res=ress.slice(-2)
    res = res.substring(0, 1);
    if(res.slice(-1)==="0")avatar="🐳";
    if(res.slice(-1)==="1")avatar="🦈";
    if(res.slice(-1)==="2")avatar="🐅";
    if(res.slice(-1)==="3")avatar="🐍";
    if(res.slice(-1)==="4")avatar="🐞";
    if(res.slice(-1)==="5")avatar="🐪";
    if(res.slice(-1)==="6")avatar="🦋";
    if(res.slice(-1)==="7")avatar="🐙";
    if(res.slice(-1)==="8")avatar="🐄";
    if(res.slice(-1)==="9")avatar="🐇";
    if(res.slice(-1)==="a")avatar="🐖";
    if(res.slice(-1)==="b")avatar="🐏";
    if(res.slice(-1)==="c")avatar="🐐";
    if(res.slice(-1)==="d")avatar="🦎";
    if(res.slice(-1)==="e")avatar="🐠";
    if(res.slice(-1)==="f")avatar="🦍";
    return avatar;
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")

export default Avatar