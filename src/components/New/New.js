import React, { Component } from 'react'
import Web3 from 'web3'
import ipfs from '../../ipfs'
import utils from '../../library'
import Base64Binary from './../../base64'
import './css.css';



class New extends Component {
state={
    cover:"https://ipfs.io/ipfs/QmasZhThNG8eN5drZwpwxMUSUQnWYH3t4hZW6fwrF9jsHi",
    image:""
}
  
  async ipfsImage(){

    const buffer0 = await Buffer.from(this.state.cover);
                console.log("IPFSIMAGE");
                await ipfs.add(buffer0).then(async (response) => {
                    
                let image="ipfs://ipfs/"+response["path"].toString()
                console.log(image);
                }).catch((err) => {       
                    console.error(err)   
                })
  }


async savePage(time){
        let image="ipfs.io/ipfs/QmWH231zunhwDiqtjem3Qj7GhSkkeEop5XV3j5AoLxNNJR"

        
        let myImage

        myImage.onload = async function(){
        console.log("image loaded")   
                let myCover = new Image(300, 300);
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = myCover.width;
                canvas.height = myCover.height;
       
                let baseSixtyFour=canvas.toDataURL().replace(/data:image\/png;base64,/,'');
                let byteArray = Base64Binary.decodeArrayBuffer(baseSixtyFour);  
                //var enc = new TextEncoder(); // always utf-8
                const buffer0 = await Buffer.from(byteArray);
                console.log("IPFS0");
                await ipfs.add(buffer0).then(async (response) => {
                    
                image="ipfs://ipfs/"+response["path"].toString()
                console.log(image);
                }).catch((err) => {       
                    console.error(err)   
                })
         
        };        
        myImage.src = '/smartshop/smartshop_twitter_base.jpg'
        
}

imageHandler  = (e) => {

    document.getElementById("wait").text="loading to IPFS, please wait..."
    document.getElementById("wait").style.display = "block";
    console.log("!")
    const reader = new FileReader();
    let t=this
reader.onload = async() => {
    console.log("!!")
    console.log(reader.result)
    if(reader.readyState === 2){
        var img = new Image()
        let myCover = new Image(300, 300);
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = myCover.width;
                canvas.height = myCover.height;
                this.setState({cover:reader.result})

            img.onload = async function() {
                ctx.drawImage(this, 0, 0, 300, 300);
            
                let baseSixtyFour=canvas.toDataURL().replace(/data:image\/png;base64,/,'');
                let byteArray = Base64Binary.decodeArrayBuffer(baseSixtyFour);
                const buffer0 = await Buffer.from(byteArray);
                console.log("IPFS0");
                let _image
                
                await ipfs.add(buffer0).then(async (response) => {
                    _image="ipfs://ipfs/"+response["path"].toString()
                    //t.setState({image:_image})
                    document.getElementById("Shop_meta_setmeta_button").style.opacity = "1.0";
                    document.getElementById("wait").style.display = "none";
                    document.getElementById("wait").text="loading to IPFS, please wait..."
                    document.getElementById("Shop_meta_setcover").setAttribute("imdata",_image)
                    console.log(_image);
                }).catch((err) => {       
                    console.error(err)   
                })
                
          }
        
        img.src = reader.result
        
                
                
    }
}
reader.readAsDataURL(e.target.files[0])

//let baseSixtyFour=canvas.toDataURL().replace(/data:image\/png;base64,/,'');
                
console.log("!")

}


async save(){
    document.getElementById("wait").innerHTML="please sign tx, then wait..."
    document.getElementById("wait").style.display = "block";
    await this.ipfsImage()
    let addr=""
    await window.ethereum.enable().then(async function (accounts) { 
        
        addr=accounts[0]
        
        let name=document.getElementById("Shop_meta_setname").value
        let symbol=document.getElementById("Shop_meta_setsymbol").value
        let desc=document.getElementById("Shop_meta_setdesc").value
        let cover=document.getElementById("Shop_meta_setcover").getAttribute("imdata")
        //cover="ipfs://ipfs/QmasZhThNG8eN5drZwpwxMUSUQnWYH3t4hZW6fwrF9jsHi"
        let info=document.getElementById("Shop_meta_setinfo").value
        let tags=document.getElementById("Shop_meta_settags").value
        let disc=document.getElementById("Shop_meta_setdiscord").value
        let twit=document.getElementById("Shop_meta_settwitter").value
        let twitch=document.getElementById("Shop_meta_settwitch").value
        let str={
        "image":cover,
        "image_data":cover,
        "name":name,
        "title": name,
        "description":desc,
        "symbol": symbol,
        "info":info,
        "keywords":tags,
        "background_color": "#ffffff",
        "discussionUri": "",
        "externalDNS": "",
        "externalENS": "curricular.eth",
        "repoUri": "",
        "decimals": 0,
        "hasDecimals": false,
        "version" : "curricular 1.0",
        "date" : Date.now(),
        "type" : "directrank",
        "originalCreator": addr,
        "author": addr,
        "extensionAddress": "0x6E78E5eB786858Dfe88CF8EA51e297AD21D8105c",
        "extensionCode": "",
        "external_url": "curricular.eth",
        "license_url": "ipfs://ipfs/QmbJWAESqCsf4RFCqEY7jecCashj8usXiyDNfKtZCwwzGb",
        "discord":disc,
        "twitter":twit,
        "twitch":twitch,
    }
        var enc = new TextEncoder(); // always utf-8
        const buffer = await Buffer.from(JSON.stringify(str));
        console.log("IPFS1");
        await ipfs.add(buffer).then(async (response) => {
          console.log(response["path"]);
          const {  REACT_APP_UNOFFICIALABI } = process.env;
          const { REACT_APP_UNOFFICIAL } = process.env;
          let unofficial = new web3.eth.Contract(JSON.parse(REACT_APP_UNOFFICIALABI), REACT_APP_UNOFFICIAL) 
 
          await unofficial.methods.mint(name,symbol,'ipfs://ipfs/'+response["path"].toString()).send({from: accounts[0] , gas: 1650000 })
          document.getElementById("wait").style.display = "none";
          document.getElementById("Shop_meta_setmeta_button").style.opacity="0.3"
        }).catch((err) => {
        
          console.error(err)
       
        })
       
      
    })  
}

check(x) {
    let elements = document.getElementsByClassName(x);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="red";
    }
}

    render(){
const {cover} = this.state.cover
        return ( 
            <>
        <div className="Shop_meta_row">        
            <div className="Shop_meta_panel dark darkblue text white">
  

               <span className=" right">New Item<img class="newitemslogo" src="https://raw.githubusercontent.com/b-u-i-d-l/ETHITEM/main/assets/img/logo.png"></img></span>
               <div className="clear"></div>
               <br></br>
               <div>
               <span>👻 name:</span><br></br>
               <input id="Shop_meta_setname" className="Shop_meta_setval light lightblue text " type="text" ></input>
               </div>
               <div>
               <span>🃏 symbol:</span><br></br>
               <input id="Shop_meta_setsymbol" className="Shop_meta_setval light lightblue text " type="text" ></input>
               </div>
               <div>
               <span>📜 description:</span><br></br>
               <input id="Shop_meta_setdesc" className="Shop_meta_setval light lightblue text " type="text" ></input>
               </div>
               <div>
               <span>🏷️ tags (comma separated): </span><br></br>
               <input id="Shop_meta_settags" className="Shop_meta_setval light lightblue text " type="text" ></input>
               </div>
               <div>
               <span>📰 info:</span><br></br>
               <input id="Shop_meta_setinfo" className="Shop_meta_setval light lightblue text " type="text" ></input>
               </div>

               <div>
               <span>🖼️ Cover (300px * 300px):</span><br></br>
                <input className="metacontent3" type="file" imdata="" id="Shop_meta_setcover" name="cover" accept="image/*" onChange={this.imageHandler}></input>
        
                <img id="cover_canvas" width="300" src={this.state.cover} height="300"></img>
                <div className="clear"></div>
               </div>
               <br></br>
               <div>
               <span>👾 discord server:</span><br></br>
               <div className="metacontent">https://discord.gg/</div><input id="Shop_meta_setdiscord" className="Shop_meta_setval_discord light lightblue text" type="text" ></input>
               <div className="clear"></div>
               </div>
               <div>
               <span>🐤 twitter:</span><br></br>
               <div className="metacontent">https://twitter.com/</div><input id="Shop_meta_settwitter" className="Shop_meta_setval_twitter light lightblue text" type="text" ></input>
               <div className="clear"></div>
               </div>
               <div>
               <span>📺 twitch:</span><br></br>
               <div className="metacontent">https://www.twitch.tv/</div><input id="Shop_meta_settwitch" className="Shop_meta_setval_twitter light lightblue text" type="text" ></input>
               <div className="clear"></div>
               </div>
               <input id="Shop_meta_setmeta_button" className="Shop_meta_setmeta_button light lightblue text white" type="button" value="🔥 mint" onClick={() => this.save()}></input>
               <div className="wait" id="wait">loading to IPFS, please wait...</div>
               <br></br><br></br>     
            </div>
        </div>
       </>
            
        );
    }


}

function jumpsocial(add){
    window.open(add)
}



function formatURL(url){
    return("https://gateway.ipfs.io/ipfs/"+url);
  }

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}


        
const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")




export default New