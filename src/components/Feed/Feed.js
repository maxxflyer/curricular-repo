import React, { Component, createElement } from 'react'
import './css.css';
import utils from './../../library'

import Icons from '../Icons/Icons'
import Web3 from 'web3'
import { splitUnit } from 'mathjs';

class PriceFeed extends Component {
    constructor(){
        super()
        this.state={
            defaultFrame:10000,
            feed:[],
            control:false
        }
    }
   componentDidMount(){
       let who="all"
       if(utils.getUrlVars()["feed"])who=utils.getUrlVars()["feed"]
      //this.loadFeed("default",who,false)
   }

   async scan(){
       document.getElementById("PriceFeed_feed").setAttribute("state",document.getElementById("PriceFeed_feed").getAttribute("state")+1)
       document.getElementById("PriceFeed_feed").innerHTML=""
       
       let block=document.getElementById("PriceFeed_blockinput").value
     
       this.loadFeed(block,"all",true)
   }

   async getBlock(){
      let _block=await utils.getBlock()
      
        try{document.getElementById("PriceFeed_blockinput").value=parseInt(_block)-10000}catch(e){}
        return _block
   }

   async load(token){
        let element=document.getElementById("PriceFeed_feed")
        element.innerHTML=""
        let tot=await utils.loadAllUnofficialTransfers(token,"default","all",element);
        document.getElementById("PriceFeed_notfound").innerHTML=""
        document.getElementById("PriceFeed_amountfeed").innerHTML=tot
        if(tot==0){
            document.getElementById("PriceFeed_notfound").innerHTML="nothing 💔 found"
            document.getElementById("PriceFeed_amountfeed").innerHTML=0
        }
   }

   async loadFeed(blck,who,listen){
    //let state=document.getElementById("PriceFeed_feed").getAttribute("state")
    //if(state=="0")document.getElementById("PriceFeed_feed").setAttribute("state",state++)
    
    let tot=await utils.loadAllUnofficialTransfers("0x76604Ff7F0C7432A75B63F4794509ECffCC041FD",blck,who,document.getElementById("PriceFeed_feed"));
/*
    const propertyValues = await utils.loadEvents(blck,who);
    if(listen){
        let scanning
        if(document.getElementById("PriceFeed_feed").getAttribute("scan")!="")scanning=document.getElementById("PriceFeed_feed").getAttribute("scan").split(",")
        if(document.getElementById("PriceFeed_feed").getAttribute("scan")=="")scanning=[]
        
        let arr=who.split(",")
        for(let x=0;x<arr.length;x++){
            if(!scanning.includes(arr[x])){
            scanning.push(arr[x])      
            document.getElementById("PriceFeed_feed").setAttribute("scan",scanning)
            utils.loadNewEvents(blck,"all",document.getElementById("PriceFeed_feed"))
            }
        }
    }
    let arr=Object.values(propertyValues)
    console.log(arr)
    let arr2=[]
    if(arr!="x"){
        if(arr.length>0){
            document.getElementById("PriceFeed_notfound").innerHTML=""
            document.getElementById("PriceFeed_amountfeed").innerHTML=arr.length
            for(let i=arr.length-1;i>=0;i--){
                if(document.getElementById("PriceFeed_feed").getAttribute("state")==state){

                    let f=utils.getAvatar(arr[i]["returnValues"][0])
                    
                    let l=document.createElement('div')
                    l.setAttribute("class","CXto")
                    l.append(f)
                    const uri = await utils.itemMeta(arr[0]["returnValues"][1])       
                    const itemMeta = await utils.itemMetaJSON(uri) 
                    const _image=utils.uri2url(itemMeta["image"])
                    var img = document.createElement('img')
                    img.src = _image
                    img.setAttribute("class","feed_logo")
                    var dv = document.createElement("div");
                    dv.setAttribute("class","feed_box darkblue")
                    dv.setAttribute("onclick","window.open('curricular/?account="+arr[i]["returnValues"][0]+"')")
                    dv.append(img)
                    dv.append(l)
                    //if(code==4)f=await minifeed.display(arr[i].returnValues.token,arr[i].returnValues.list,false)

                    if(document.getElementById("PriceFeed_feed").childElementCount==0)document.getElementById("PriceFeed_notfound").innerHTML=""
                    document.getElementById("PriceFeed_feed").append(dv);

                }else{
                    i=-1
                }
            }
        }
    
    
    }
    this.setState({feed:arr2})
    */
   document.getElementById("PriceFeed_notfound").innerHTML=""
   document.getElementById("PriceFeed_amountfeed").innerHTML=tot
   if(tot==0){
    document.getElementById("PriceFeed_notfound").innerHTML="nothing 💔 found"
    document.getElementById("PriceFeed_amountfeed").innerHTML=0
    }
   }

   toggleControl(){
       if(this.state.control){
           this.setState({control:false})
       }else{
        this.setState({control:true})

       }
   }

    render(){
        console.log(this.props.update) 



        return ( 
            <center>
            <div className="PriceFeed_panel">
            <div className="Feed_header left"><Icons icon="feed" d="50"/>
                <select className="PriceFeed_panel_label" name="cars" id="cars">
                    <option value="rank">Direct Rank</option>
                </select>
            </div>
            <div className="icon_right right" onClick={() => this.toggleControl()}><Icons icon="lens" d="50 right"/><div id="PriceFeed_amountfeed" className="PriceFeed_amountfeed">0</div></div>
            <div className="clear"></div>
            <div id="PriceFeed_menu">
            <div className="menu_icon disabled" onClick={() => this.load("0x0975ea7f20405af7Aa46FA41464f6d69d7aac4d6")}>🌼</div> 
            <div className="menu_icon disabled" onClick={() => this.load("0x0975ea7f20405af7Aa46FA41464f6d69d7aac4d6")}>🌈</div> 
            <div className="menu_icon disabled" onClick={() => this.load("0x0975ea7f20405af7Aa46FA41464f6d69d7aac4d6")}>🐳</div> 
            <div className="menu_icon disabled" onClick={() => this.load("0x0975ea7f20405af7Aa46FA41464f6d69d7aac4d6")}>🍂</div> 
            <div className="menu_icon" onClick={() => this.load("0x0975ea7f20405af7Aa46FA41464f6d69d7aac4d6")}>🏆</div> 
            <div className="menu_icon" onClick={() => this.load("0x0975ea7f20405af7Aa46FA41464f6d69d7aac4d6")}>🦄</div> 
            <div className="menu_icon" onClick={() => this.load("0x0975ea7f20405af7Aa46FA41464f6d69d7aac4d6")}>🤡</div> 
            <div className="menu_icon" onClick={() => this.load("0x0975ea7f20405af7Aa46FA41464f6d69d7aac4d6")}>💩</div> 
            <div className="menu_icon disabled" onClick={() => this.load("0x0975ea7f20405af7Aa46FA41464f6d69d7aac4d6")}>🤹</div> 
            <div className="menu_icon disabled" onClick={() => this.load("0x0975ea7f20405af7Aa46FA41464f6d69d7aac4d6")}>💞</div> 
            <div className="menu_icon disabled" onClick={() => this.load("0x0975ea7f20405af7Aa46FA41464f6d69d7aac4d6")}>🔑</div> 
            <div className="menu_icon disabled" onClick={() => this.load("0x0975ea7f20405af7Aa46FA41464f6d69d7aac4d6")}>🥇</div> 
            <div className="menu_icon disabled" onClick={() => this.load("0x0975ea7f20405af7Aa46FA41464f6d69d7aac4d6")}>😺</div> 
            <div className="menu_icon disabled" onClick={() => this.load("0x0975ea7f20405af7Aa46FA41464f6d69d7aac4d6")}>👺</div> 
            <div className="menu_icon disabled" onClick={() => this.load("0x0975ea7f20405af7Aa46FA41464f6d69d7aac4d6")}>👽</div> 
            <div className="menu_icon disabled" onClick={() => this.load("0x0975ea7f20405af7Aa46FA41464f6d69d7aac4d6")}>👤</div>
            </div>
            <div className="clear"></div>
            {(this.state.control)?
            <div className="PriceFeed_controlpanel dark darkblue">
               

                <input type="text" id="PriceFeed_blockinput" className="PriceFeed_blockinput light lightblue text white right" defaultValue={""+(parseInt(this.getBlock())-this.state.defaultFrame)}></input>
                <div className="PriceFeed_blockinput_label text white right">from block:</div>
                <div className="PriceFeed_search_button light lightblue text white left" onClick={() => this.scan()}>👁️ SCAN</div>
                <div className="clear"></div>
            </div>
            :<></>
            }
            <div id="PriceFeed_feed" scan="">
               
            </div>
            <div id="PriceFeed_notfound" className="text white"></div>
            {(this.state.control)?
            <div className="PriceFeed_info dark darkblue white text">
                Each time you scan you overlay a real time listener to the previous ones.<br></br>Reload the page to erase previous listeners.
            </div>
            :<></>
            }
            </div>
            </center>
        );
    }

}
const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
export default PriceFeed