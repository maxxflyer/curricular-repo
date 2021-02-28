import React, { Component } from 'react'
import Web3 from 'web3'
import './css.css';
class Icons extends Component {
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
        if(icon=="pen")iconAddress="https://i.imgur.com/KNIHLyM.png"
        if(icon=="chart")iconAddress="https://i.imgur.com/SeRFpqQ.png"
        if(icon=="thunder")iconAddress="https://i.imgur.com/ZlBHWnG.png"
        if(icon=="disable")iconAddress="https://i.imgur.com/oeYIoTc.png"
        if(icon=="install")iconAddress="https://i.imgur.com/RcXn63j.png"
        if(icon=="drops")iconAddress="https://i.imgur.com/aSkvRXG.png"
        if(icon=="ghost")iconAddress="https://i.imgur.com/jrsFDEc.png"
        if(icon=="frog")iconAddress="https://i.imgur.com/5W2meJ3.png"
        if(icon=="etherscan")iconAddress="https://cn.etherscan.com/images/brandassets/etherscan-logo-circle.png"
        if(icon=="ethitem")iconAddress="https://i.imgur.com/4ADKB00.png"
        if(icon=="feed")iconAddress="https://i.imgur.com/H2OA2BY.png"
        if(icon=="lens")iconAddress="https://i.imgur.com/FLHCYCu.png"
        if(icon=="clock")iconAddress="https://ipfs.io/ipfs/QmQ91SwgrYcYPjRJXY6KAYE3YtR4kDoj3tWLebLjxbpSjA"
        return iconAddress
    }
    
    render(){
        return ( <>
            <img src={this.iconAddress(this.props.icon)} className={"_"+this.props.d}></img>   
        </>
        );
    }
}





export default Icons