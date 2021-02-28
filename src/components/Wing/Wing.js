import React, { Component } from 'react'
import Web3 from 'web3';
import './css.css';
class Wing extends Component {

  componentDidMount() {

    try{
      
   // this.loadBlockchainData()
    this.enable()
  }catch(e){}
}

async my_account(){
  window.ethereum.enable().then(async function (accounts) {
    window.history.pushState('account_page', 'ACCOUNT PAGE', '/smartshop/?account='+accounts[0]) 
})
this.props.update("Empty")
}

async my_avatar(){
  window.ethereum.enable().then(async function (accounts) {
  window.history.pushState('avatar_page', 'AVATAR PAGE', '/smartshop/?account='+accounts[0])
})
  this.props.update("EmptyAvatar")
}



    async loadBlockchainData() {
      window.ethereum.enable().then(async function (accounts) {
      const { REACT_APP_ABI } = process.env;
      const { REACT_APP_BOWS } = process.env;
      const bows = new web3.eth.Contract(JSON.parse(REACT_APP_ABI), REACT_APP_BOWS) 
      let supply = await bows.methods.balanceOf(accounts[0]).call()
      console.log("SUPPLY      "+supply)
      supply=supply/1000000000000000000
                    let supstr=supply.toString()
                    console.log("!!"+supstr.indexOf("."))
                    supstr=supstr.substring(0,supstr.indexOf(".")+3)  
      document.getElementById("beans_counter_label").innerHTML=supstr
      })
    }

    async enable(){
      window.ethereum.enable().then(async function (accounts) {
         console.log(accounts[0]);
         try{
          const { REACT_APP_ABI } = process.env;
          const { REACT_APP_BOWS } = process.env;
         const bows = new web3.eth.Contract(JSON.parse(REACT_APP_ABI), REACT_APP_BOWS) 
      let supply = await bows.methods.balanceOf(accounts[0]).call()
      console.log("SUPPLY      "+supply)
      supply=supply/1000000000000000000
                    let supstr=supply.toString()
                    console.log("!!"+supstr.indexOf("."))
                    supstr=supstr.substring(0,supstr.indexOf(".")+3)  
      document.getElementById("beans_counter_label").innerHTML=supstr
         document.getElementById('metamask').style.display="none";
         document.getElementById('hf_account').style.display="block";
         let res = accounts[0].substring(0, 6)+"..."+accounts[0].substring(38);
         let avatar="🐶";
         if(res.slice(-1)==="0")avatar="🐶"
         if(res.slice(-1)==="1")avatar="🐱"
         if(res.slice(-1)==="2")avatar="🐹"
         if(res.slice(-1)==="3")avatar="🐸"
         if(res.slice(-1)==="4")avatar="🐵"
         if(res.slice(-1)==="5")avatar="🐻"
         if(res.slice(-1)==="6")avatar="🐼"
         if(res.slice(-1)==="7")avatar="🐰"
         if(res.slice(-1)==="8")avatar="🐨"
         if(res.slice(-1)==="9")avatar="🐯"
         if(res.slice(-1)==="a")avatar="🦁"
         if(res.slice(-1)==="b")avatar="🐮"
         if(res.slice(-1)==="c")avatar="🐷"
         if(res.slice(-1)==="d")avatar="🐺"
         if(res.slice(-1)==="e")avatar="🐗"
         if(res.slice(-1)==="f")avatar="🐔"
         document.getElementById("wing_avatar").innerHTML = avatar;
         document.getElementById("hf_account_address").innerHTML = res;
         document.getElementById("hf_account_address").setAttribute("jump", accounts[0])
      }catch(e){console.log("wing.js enable()",e)}
      });
    }
    

    render(){
        return (<div id="login">
         
          <div id="lips_search_panel" className="text white"><div id="beans_counter_label">0.0</div><div id="beans_counter_image"><div id="lips_search_icon" alt="BEANS" src="https://i.imgur.com/Hs3uInv.png" onClick={() => window.open("https://ethitem.com/?collection=0x864d244700c49A01C627275F0ADE05F3e83A7aBc")}>🎓</div></div></div>
            <div id="metamask"><div id="connect_label">connect wallet</div><img id="metamask_logo" src="http://hivemuse.com/lips/2/metamask.png" alt="metamask" onClick={this.enable}/></div>
            <div className="hf_menu" id="hf_account" className="light lightblue"><div id="wing_avatar"  onClick={() => this.my_avatar("Avatar")}><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🐱</span></div><div id="hf_account_address"   onClick={jump}></div></div>
            <div id="ropsten_message" className="text white">WORKS ON ROPSTEN</div>
        </div>);
    }
}


        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")

  function jump(){
    window.open("https://ropsten.etherscan.io/address/"+document.getElementById("hf_account_address").getAttribute("jump"))
  }




export default Wing