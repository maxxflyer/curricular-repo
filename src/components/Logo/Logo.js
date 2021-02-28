import React, { Component } from 'react'
import Web3 from 'web3';
import './css.css';
class Logo extends Component {
  

    componentDidMount() {
        window.ethereum.enable()
    }

    async my_avatar(){
        window.ethereum.enable().then(async function (accounts) {
        window.history.pushState('avatar_page', 'AVATAR PAGE', '/smartshop/?account='+accounts[0])
      })
        this.props.update("EmptyAvatar")
      }

 async jump(){
    window.ethereum.enable().then(async function (accounts) {
        
        window.history.pushState('account_page', 'ACCOUNT PAGE', '/happyfarm/?account='+accounts[0]) 
    })
    this.props.update("Empty")
 }

 async my_avatar(){
    window.ethereum.enable().then(async function (accounts) {
    window.history.pushState('avatar_page', 'AVATAR PAGE', '/smartshop/?account='+accounts[0])
  })
    this.props.update("EmptyAvatar")
  }

    render(){
        return (
        <div id="curricular" opacity="1" >
            <div id="curricular_logo"  alt="curricular"   onClick={() => this.props.update("Curricular")}>🎓</div><div id="curricular_label" className="text white"> Curricular</div><div id="menu_button" className="light lightblue text black">MENU</div>
            <div id="curricular_menu" className="dark darkblue">
                <div className="menu_row">
                    <div className="curricular_menu_link lhovermenu lighthover  curricular_dir_button float_left" href="https://uniswap.info/token/0x801f90f81786dc72b4b9d51ab613fbe99e5e4ccd"   onClick={() => this.props.update("Factory")}>FACTORY<br></br><img className="curricular_dir_icon"  alt="token" src="https://i.imgur.com/Nlfo18K.png"/></div>
                    <div className="curricular_menu_link lhovermenu lighthover  curricular_dir_button float_left" onClick={() => this.props.update("New")}>NEW<br></br><img className="curricular_dir_icon"  alt="FEED" src="https://raw.githubusercontent.com/b-u-i-d-l/ETHITEM/main/assets/img/logo.png"/></div> 
                    <div className="curricular_menu_link lhovermenu lighthover  curricular_dir_button float_left" onClick={() => this.props.update("Feed")}>FEED<br></br><img className="curricular_dir_icon"  alt="FEED" src="https://i.imgur.com/H2OA2BY.png"/></div> 
                    <div className="curricular_menu_link lhovermenu lighthover  curricular_dir_button float_left" onClick={() => this.my_avatar("Avatar")}>ACCOUNT<br></br><img className="curricular_dir_icon"  alt="ACCOUNT" src="https://i.imgur.com/YdWi6EE.png"/></div> 
                    

                    <div><a className="curricular_menu_link lhovermenu lighthover  curricular_dir_button float_right text white" href="https://github.com/HappyFarm-DFO/smartshop/" target="_blank" rel="noopener noreferrer">GITHUB<br></br><img className="curricular_dir_icon" alt="github" src="https://i.imgur.com/Roc9b0U.png"/></a></div>
                    <div><a className="curricular_menu_link lhovermenu lighthover  curricular_dir_button float_right text white" href="https://discord.gg/F3Cqksx" target="_blank" rel="noopener noreferrer">DISCORD<br></br><img alt="discord" className="curricular_dir_icon" src="https://i.imgur.com/tZbrqGS.png"/></a></div>               
                    <div className="curricular_menu_link lhovermenu lighthover  curricular_dir_button float_right"     onClick={() => window.open("https://dapp.dfohub.com/?addr=0x703De1282c0390Eb6AF741Ac6A5C8eF88161cae3")}>DFO<br></br><img className="curricular_dir_icon"  alt="dfo" src="https://i.imgur.com/YMxB90E.png"/></div>
                    <div><a className="curricular_menu_link lhovermenu lighthover  curricular_dir_button float_right text white" onClick={() => this.props.update("Roadmap")}>ROADMAP<br></br><img className="curricular_dir_icon" alt="github" src="https://i.imgur.com/WJpyYGg.png"/></a></div>  

              
                </div>
                <div className="menu_row">
                <div className="curricular_menu_link lhovermenu lighthover  curricular_dir_button float_left" href="https://uniswap.info/token/0x801f90f81786dc72b4b9d51ab613fbe99e5e4ccd"   onClick={() => this.props.update("Ufactory")}>uFACTORY<br></br><img className="curricular_dir_icon"  alt="token" src="https://i.imgur.com/Nlfo18K.png"/></div>
                
                <div className="curricular_menu_link lhovermenu lighthover  curricular_dir_button float_right" onClick={() => this.props.update("Dev")}>DEVS<br></br><img className="curricular_dir_icon"  alt="DEVELOPMENT" src="https://i.imgur.com/6PWYs90.png"/></div>
                <div className="curricular_menu_link lhovermenu lighthover  curricular_dir_button float_right" href="https://uniswap.info/token/0x801f90f81786dc72b4b9d51ab613fbe99e5e4ccd"   onClick={() => this.props.update("Hats")}>TOKEN<br></br><img className="curricular_dir_icon"  alt="token" src="https://i.imgur.com/wlum6zh.png"/></div> 
                <div className="curricular_menu_link lhovermenu lighthover curricular_dir_button float_right" onClick={() => this.props.update("Manifest")}>MANIFEST<br></br><img className="curricular_dir_icon"  alt="MANIFEST" src="https://i.imgur.com/RE78h1z.png"/></div>
                
                <div className="curricular_menu_link lhovermenu lighthover  curricular_dir_button float_right" onClick={() => this.props.update("Features")}>FEATURES<br></br><img className="curricular_dir_icon"  alt="HOW" src="https://i.imgur.com/IsNw0g0.png"/></div>
                
</div>
            </div>
        </div>
        );
    }
}
export default Logo