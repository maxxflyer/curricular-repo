import React, { Component } from 'react'
import './css.css';
import utils from './../../library'


class Create extends Component {

    constructor(props) {
        super(props)
        this.state = {image:"loading",description:"loading",name:"loading",extension:"0x6E78E5eB786858Dfe88CF8EA51e297AD21D8105c",tags:""}
       
    }
   
    async send(){
        let ext=this.state.extension
      await window.ethereum.enable().then(async function (accounts) {   
        let  direct_factory
        
        if(ext=="0xa3fF3FaFa598dFd6208d07006C9a5aD60DC7a24D"){
            direct_factory = utils.direct_factory() 
        }else{
            direct_factory = utils.load_factory(ext) 
        }
        await direct_factory.methods.send(getUrlVars()["cx"],document.getElementById("address_input").value).send({gas: 80000, from: accounts[0]})
    })

    }

    async componentDidMount(){
        const uri = await utils.itemMeta(getAddress())       
        const itemMeta = await utils.itemMetaJSON(uri) 
        const _image=utils.uri2url(itemMeta["image"])
        const _description=itemMeta["description"]
        const _extension=itemMeta["extensionAddress"]
        const _tags=itemMeta["keywords"]
        const _name=itemMeta["name"].replace(" (CURRICULAR.ETH)", "");
        if(this.props.to)document.getElementById("address_input").value=this.props.to
        this.setState({tags:_tags,image:_image,description:_description,name:_name,extension:_extension})
    }

    async getItem(){
       
    }

    render(){
        console.log(this.props.update) 
        let listtags
        if( this.state.tags)
        listtags = this.state.tags.split(",").map((d) => <div className="tag">{d}</div>);
        return ( 
        <div>
            <div id="create_flyer">
            <div className="create_mainlabel">{this.state.name}</div>
            <img id="create_image"  src={this.state.image} onClick={() =>  window.open("https://ethitem.com/?interoperable="+getUrlVars()["cx"])}></img>
            <div id="HappyFarm_tags"><div id="tags_container">{listtags}</div></div>
            <div className="clear"></div>
            <div id="HappyFarm_sublabel">{this.state.description}</div>
            <input id="address_input" type="text" className="address_input"></input>
            <div className="minilabel">address</div>
            <div className="clear"></div>
            <div className="create_button" onClick={() => this.send()}>SEND</div>
            <div className="create_button disabled" onClick={() => this.props.update("Features")}>CUSTOM</div>
            <div className="create_button" onClick={() => this.props.update("Factory")}>back</div>
<img className="itemslogo" src="https://raw.githubusercontent.com/b-u-i-d-l/ETHITEM/main/assets/img/logo.png" onClick={() =>  window.open("https://ethitem.com/")}></img>

            
        </div>
        <div className="vspacer"></div>
        <div className="dapps">
        <div className="dapps_mainlabel">dapps</div>
        <div className="dapps_mainlabel2"></div>
        <div className="dapps_mainlabel">tools</div>
        <div className="dapps_mainlabel2"></div>
        </div>
      <br></br>
        </div>
        );
    }


}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getImage() {
    var t=getUrlVars()
    var tt=""
    if(t["curriculum"]=="entertainer")tt="🤹"
    if(t["curriculum"]=="pr")tt="💞"
    if(t["curriculum"]=="townkey")tt="🔑"
    if(t["curriculum"]=="medal")tt="🥇"

    if(t["curriculum"]=="cup")tt="🏆"
    if(t["curriculum"]=="clown")tt="🤡"
    if(t["curriculum"]=="unicorn")tt="🦄"
    if(t["curriculum"]=="shit")tt="💩"

    if(t["curriculum"]=="idea")tt="💡"
    if(t["curriculum"]=="whitehat")tt="🎓"
    if(t["curriculum"]=="blackhat")tt="🔫"
    if(t["curriculum"]=="help")tt="🚑"
    return tt;
}

function getName() {
    return getUrlVars()["curriculum"];
}

function getAddress() {
    return getUrlVars()["cx"];
}


export default Create