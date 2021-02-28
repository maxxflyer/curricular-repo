import Web3 from 'web3'
import context from '../../context'
import utils from '../../library'

const feed = {

    feedClickFinder: async function(token,list,ftypeicon){
        let ima=document.createElement("img")
        ima.className="feed_loadericon"
        ima.src="https://i.imgur.com/MwfJBZA.gif"
        ftypeicon.innerHTML=""
        ftypeicon.append(ima)
        try{
    let master=await utils.master(list)
    let boxes=await utils.loadOwnerBoxes(master)
    let modules=[]
    for(let i=0;i<boxes.length;i++){
        try{
        let a=await utils.loadModulesList(boxes[i])
        modules=modules.concat(a)}catch(e){}
    }

    let shop=""
    for(let i=0;i<modules.length;i++){
        try{
        let priceList=await utils.prices(modules[i])
        if(priceList==list){
            shop=modules[i]
            i=modules.length
        }
    }catch(e){}
    }

    
    try{
        let index=await utils.priceIndex(list,token)
        window.open("/smartshop/?shop="+shop+"&index="+index)
    }catch(e){
        window.open("/smartshop/?shop="+shop)
    }
    
    
    ftypeicon.innerHTML="🎟️"
        }catch(e){}
    },

    display: async function (token,list,isnew){
        let element=document.createElement("div")
        let id=Math.random(1)+token+list
        element.id=id
        let left=document.createElement("div")
        left.innerHTML="👻"
        try{left.innerHTML=utils.getAvatar(await utils.master(list))}catch(e){}
        left.className="Feed_avatar"
        let right=document.createElement("div")
        await window.ethereum.enable().then(async function (accounts) { 
            if(isnew){
                right.className="feed_element_new dark darkhover text white"
            }else{
                right.className="feed_element dark darkblue text white"
            }
            
            let coll
            try{
                coll=await utils.item2collection(token)
                let collURI=await utils.checkITEM(coll)

                let ima=await utils.collectionImage(collURI)
 
                let cicon=document.createElement("img")
                cicon.className="feed_element_icon"
                cicon.src=ima
                right.append(cicon)
            }catch(e){}

            let ficon=document.createElement("img")
            ficon.className="feed_element_icon"
            let ima="https://dapp.dfohub.com/assets/img/default-logo.png"
            ficon.src=ima
            try{
                let uri=await utils.itemMeta(token)
                let ima=await utils.itemImage(uri)
                ficon.src=ima
            }catch(e){console.log(e)}
            
            right.append(ficon)
            let nam="token_name"
            let sym="symbol"

            let fname=document.createElement("div")
            fname.className="feed_element_name text white"
            try{nam=await utils.nameOf(token)}catch(e){}
            try{sym=await utils.symbolOf(token)}catch(e){}
            
            fname.textContent=nam+" ["+sym+"]"
            right.append(fname)
            let ftypeicon=document.createElement("div")
            right.addEventListener("click", () => feed.feedClickFinder(token,list,ftypeicon))
            ftypeicon.className="feed_element_type_icon"
            ftypeicon.textContent="🎟️"
            right.append(ftypeicon)
            let ethicon=document.createElement("img")
            ethicon.className="feed_element_ethicon"
            ethicon.src="https://i.imgur.com/FPL7c5a.png"
            right.append(ethicon)
            let pric="0"
            let fprice=document.createElement("div")
            fprice.className="feed_element_price text white"
            try{pric=(await utils.price(list,token))/context.units()}catch(e){}
            fprice.textContent=pric
            right.append(fprice)
            element.append(left)
            element.append(right)
        })
        return element;
    }

}

const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
export default feed

