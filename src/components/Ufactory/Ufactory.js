import React, { Component } from 'react'
import './css.css';
import utils from '../../library'


class Ufactory extends Component {
   

    componentDidMount(){
        this.loadFeed("default",'all')
       }
    
       async loadFeed(blck,who){
        await utils.loadUnofficialEvents(blck,who,document.getElementById("factory_flyer"))
       }
    
    render(){
        console.log(this.props.update) 
        return ( 
        <>
        <div id="ufactory_mainlabel">UNOFFICIAL RANK BADGES 🐾</div>
        <div id="factory_flyer">        
            

             
        </div>
        </>
        );
    }


}




export default Ufactory