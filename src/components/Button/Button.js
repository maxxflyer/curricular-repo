import React, { Component } from 'react'
import Web3 from 'web3'
import './css.css';
class Button extends Component {
    constructor(props){
        super()
    }

    iconAddress(icon){
        let iconAddress=''
        if(icon=="star")iconAddress="https://i.imgur.com/tOerThN.png"
        if(icon=="pill")iconAddress="https://i.imgur.com/RE369e3.png"
        if(icon=="box")iconAddress="https://i.imgur.com/536u0dq.png"
        if(icon=="copy")iconAddress="https://i.imgur.com/8B6sj3e.png"
        if(icon=="ticket")iconAddress="https://i.imgur.com/gZLdaPm.png"
        if(icon=="settings")iconAddress="https://i.imgur.com/IPKy1dx.png"
        if(icon=="drop")iconAddress="https://i.imgur.com/rHD8opD.png"
        return iconAddress
    }
    
    render(){
        return ( <>
            <div src={this.iconAddress(this.props.icon)} className={"_"+this.props.d}></div>   
        </>
        );
    }
}





export default Button