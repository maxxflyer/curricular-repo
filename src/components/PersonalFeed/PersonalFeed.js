import React, { Component } from 'react'
import Web3 from 'web3';
import './css.css';
import utils from '../../library'


class PersonalFeed extends Component {



   componentDidMount(){
    let who="all"
    if(utils.getUrlVars()["feed"])who=utils.getUrlVars()["feed"]
    this.loadFeed("default",who)
   }

   async loadFeed(blck,who){

    const propertyValues = await utils.loadPersonalEvents(blck,utils.getUrlVars()["account"],document.getElementById("personalfeed_panel"));
    await utils.loadAllPersonalEvents(blck,utils.getUrlVars()["account"],document.getElementById("personalfeed_panel"))
    
    let arr=Object.values(propertyValues)
    console.log("zzz")
    console.log(arr)
    let arr2=[]
    if(arr!="x"){
        if(arr.length>0){
            
            for(let i=arr.length-1;i>=0;i--){
               
                    const uri = await utils.itemMeta(arr[0]["returnValues"][1])       
                    const itemMeta = await utils.itemMetaJSON(uri) 
                    const _image=utils.uri2url(itemMeta["image"])
                    var img = document.createElement('img')
                    img.src = _image
                    img.setAttribute("class","personalfeed_logo")
                    var imbox = document.createElement("div");
                    imbox.setAttribute("class","personalfeed_logobox")
                    var dv = document.createElement("div");
                    dv.setAttribute("class","feed_box darkblue")
                    dv.setAttribute("onclick","window.open('https://ropsten.etherscan.io/address/"+arr[i]["returnValues"][0]+"')")
                    imbox.append(img)

                    dv.append(imbox)
                   
                    if(document.getElementById("PriceFeed_feed").childElementCount==0)document.getElementById("PriceFeed_notfound").innerHTML=""
                    document.getElementById("PriceFeed_feed").append(dv);
            }
                
        }
    if(arr.length==0){
    document.getElementById("PriceFeed_notfound").innerHTML="nothing 💔 found"
    document.getElementById("PriceFeed_amountfeed").innerHTML=0
    }
    
    }
    this.setState({feed:arr2})
   }

   

    render(){
        return ( 
        <>
        <div className="personalfeed_panel" id="personalfeed_panel">
            <img src="https://i.imgur.com/4Hwk4fU.png" className="add_curricular" onClick={() => this.props.update("New")}></img>
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

export default PersonalFeed