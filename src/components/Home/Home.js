import React, { Component } from 'react'
import Lipshead from '../Lipshead/Lipshead';
import Pad from '../Pad/Pad';
import './css.css';
import utils from './../../library'


class Home extends Component { 
    constructor(props) {
        super(props)
        this.state = { panel: 'Splash' , token : '0x801F90f81786dC72B4b9d51Ab613fbe99e5E4cCD' , micro : "ProposalSoftInflator"}

    }

    update(panelx,tokenx){
        this.setState({panel:panelx,token:tokenx})
        window.history.pushState('new_panel', panelx, '/');
        console.log("changed page!",panelx);
     }
   

    render(){ 
        
        
       let panel=this.state.panel
       let token=this.state.token
       if(utils.getUrlVars()["cx"]){
          panel="create"
          token=utils.getUrlVars()["cx"]
         }
       if(utils.getUrlVars()["account"]){
          panel="Avatar"
          token=utils.getUrlVars()["account"]
         }

          let to=utils.getUrlVars()["to"]
        
        return (
        <div id="home" className="dark darkblue">
           <Lipshead update={this.update.bind(this)}></Lipshead>
           <Pad panel={panel} token={token} to={to} update={this.update.bind(this)}/>
        </div>);
    }
}



export default Home