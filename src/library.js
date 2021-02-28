import Web3 from 'web3'

const library = {

    getUrlVars: function (){
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    },

    formatURL: function (url){
        return("https://gateway.ipfs.io/ipfs/"+url);
      },

      jumpsocial: function (add){
        window.open(add)
    },

     jump: function(){
        window.open('https://etherscan.io/address/0x7d410AFA45377006A0F79Ae6157A6A873Bfa5567')
    },

    jump: function (addr){
        window.open('/smartshop/?shop='+addr)
    },

    jumpBox: function (addr){
        window.open('https://ropsten.etherscan.io/address/'+addr)
    },

    copyBoxAddress: function (addr){
        var copyText = document.createElement('textarea')
        copyText.value = addr;
        document.getElementById("home").appendChild(copyText)
        copyText.focus();
        copyText.select();
        copyText.setSelectionRange(0, 99999) /*For mobile devices*/
        document.execCommand("copy")
        document.getElementById("home").removeChild(copyText)
    },

    countAndOpen: function (a,b,c,d){
        if(b>0){
           try{
            document.getElementById(c).innerHTML=b+" "+d
            setTimeout(function (){library.countAndOpen(a,b-1,c,d)},1000)
           }catch(e){}
        }else{
            window.open(a)
            document.getElementById(c).innerHTML="enable popus to complete sharing"
            document.getElementById("count_done").style.display='inline'
    }  

    return true;
    },

    

    getRandomColor: function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      },

      nameOf: async function (token){
        let name
        await window.ethereum.enable().then(async function (accounts) { 
            const { REACT_APP_ABI } = process.env; 
            const tkn = new web3.eth.Contract(JSON.parse(REACT_APP_ABI), token) 
            try{name = await tkn.methods.name().call()}catch(e){}
        })
        return name
    },

    symbolOf: async function (token){
        let symbol
        await window.ethereum.enable().then(async function (accounts) { 
            const { REACT_APP_ABI } = process.env; 
            const tkn = new web3.eth.Contract(JSON.parse(REACT_APP_ABI), token) 
            try{symbol = await tkn.methods.symbol().call()}catch(e){}
        })
        return symbol
    },

    balanceOf: async function (user,token){
        let bal=1
        await window.ethereum.enable().then(async function (accounts) { 
            const { REACT_APP_ABI } = process.env; 
            const tkn = new web3.eth.Contract(JSON.parse(REACT_APP_ABI), token) 
            let dec = await tkn.methods.decimals().call()
            bal = await tkn.methods.balanceOf(user).call()/Math.pow(10,dec)
        })
        return bal

    },

    decimals: async function (token){
        let decimals=18
        await window.ethereum.enable().then(async function (accounts) { 
            const { REACT_APP_ABI } = process.env; 
            const tkn = new web3.eth.Contract(JSON.parse(REACT_APP_ABI), token) 
            let decimals = await tkn.methods.decimals().call()
        })
        return decimals

    },

    ETHBalance: async function (){
        let bal=0
    await window.ethereum.enable().then(async function (accounts) { 
        await web3.eth.getBalance(accounts[0],async  function(err, result) {
            if (err) {
                console.log(err)
            } else {
                bal=await web3.utils.fromWei(result, "ether")
            }
        })
    })
    return bal
},

getCookie: function (cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
},

uri2url(uri){
    let addr="https://ipfs.io/"+uri.substring(7)
    return addr
},

itemMetaJSON: async function(uri){
    let ima
    let addr="https://ipfs.io/"+uri.substring(7)

    await fetch(addr).then(response => response.json()).then(
        response => {
            ima=response
        })

return ima
},

itemImage: async function(uri){
    let ima
    let addr="https://ipfs.io/"+uri.substring(7)
    await fetch(addr).then(response => response.json()).then(
        response => {

            ima="https://ipfs.io/"+response["image"].substring(7)
        })
return ima
},

collectionImage: async function(uri){
    let ima
    let addr="https://ipfs.io/"+uri.substring(7)
    await fetch(addr).then(response => response.json()).then(
        response => {

            ima="https://"+response["image"].substring(8)
        })
return ima
},

setCookie: function(cname, cvalue,id) {
    let s=library.getCookie(cname)
    let arr=s.split(",")
    let arr2=[]
    let t=false
    for(let i=0;i<arr.length;i++){
        if(arr[i]==cvalue+"_"+id){
            t=true
        }else{
            arr2.push(arr[i])
        }
    }
    if(!t){
        arr2.push(cvalue+"_"+id)
    }
    document.cookie = cname + "=" + arr2.toString() + "; path=/"
    
},

checkFavorite: function (addr,index){
    let s=library.getCookie("favorite")
    let arr=s.split(",")
    let t=false
    document.getElementById("favorite_"+index).style.opacity=0.3
    for(let i=0;i<arr.length;i++){
        if(arr[i]==addr+"_"+index)
            document.getElementById("favorite_"+index).style.opacity=1
    }
},

checkGhost: function (addr,index){
    let s=library.getCookie("ghost")
    let arr=s.split(",")
    let t=false
    try{document.getElementById("ghost_"+index).style.opacity=0.3}catch(e){}
    for(let i=0;i<arr.length;i++){
        if(arr[i]==addr+"_"+index)
        try{document.getElementById("ghost_"+index).style.opacity=1}catch(e){}
    }
},
checkGhostFavorite: function (addr,index){
    
    let s=library.getCookie("ghost")
    let arr=s.split(",")
    let t=false
    let Tindex=index.substring(0,index.lastIndexOf("x"))+"x"+index.substring(index.lastIndexOf("x")+1,index.length)
    try{document.getElementById("favorite_"+Tindex).style.opacity=0.3}catch(e){}
    for(let i=0;i<arr.length;i++){

        let Tarr=arr[i].substring(0,arr[i].lastIndexOf("x"))+"xy"+arr[i].substring(arr[i].lastIndexOf("x")+1,arr[i].length)

        
        if(Tarr==addr+"_"+index)
            document.getElementById("favorite_"+Tindex).style.opacity=1
    }
},

ticket: function (ticket){
    const { REACT_APP_TICKETABI } = process.env; 
    const tick = new web3.eth.Contract(JSON.parse(REACT_APP_TICKETABI), ticket)
    return tick
},

ticket2Box: async function (ticket){
    const { REACT_APP_TICKETABI } = process.env; 
    let box
    await window.ethereum.enable().then(async function (accounts) { 
    const tick = new web3.eth.Contract(JSON.parse(REACT_APP_TICKETABI), ticket)
    box = await tick.methods.box().call()
    })
    return box
},

isOwner: async function(who){
    let b=false
    await window.ethereum.enable().then(async function (accounts) { 
    const { REACT_APP_OWNERSHIPABI } = process.env;
        const { REACT_APP_OWNERSHIP } = process.env;
        const ownership = new web3.eth.Contract(JSON.parse(REACT_APP_OWNERSHIPABI), REACT_APP_OWNERSHIP)   
        try{
        let owned=await ownership.methods.owned(who,0).call()
        if(owned[1]>0)b=true
        }catch(e){}
    })
    return b
},

master: async function (contr_A){
    const { REACT_APP_MASTER } = process.env; 
    let master
    await window.ethereum.enable().then(async function (accounts) { 
    const tickC = new web3.eth.Contract(JSON.parse(REACT_APP_MASTER), contr_A)
    master = await tickC.methods.master().call()
    })
    return master
},

ticketCode: async function (ticket){
    const { REACT_APP_BOOK } = process.env; 
    const { REACT_APP_BOOKABI } = process.env; 
    let code
    await window.ethereum.enable().then(async function (accounts) { 
    const book = new web3.eth.Contract(JSON.parse(REACT_APP_BOOKABI), REACT_APP_BOOK)
    code = await book.methods.code(ticket).call()
    })
    return code
},

token: function (address){
    const { REACT_APP_ABI } = process.env; 
    const tkn = new web3.eth.Contract(JSON.parse(REACT_APP_ABI), address) 
    return tkn
},

metadata: async function (addr,addr2){
    let mtdt
    await window.ethereum.enable().then(async function (accounts) { 
    const { REACT_APP_METAABI } = await process.env;
    const { REACT_APP_META } = await  process.env;      
    const metadata = new web3.eth.Contract(JSON.parse(REACT_APP_METAABI), REACT_APP_META) 
    mtdt=await metadata.methods.meta(addr).call()
    if(!(mtdt.length>0))if(addr!=addr2)mtdt=await metadata.methods.meta(addr2).call()
    })
    return mtdt
},

loadMetaName: async function(addr){
    let ipfsMeta=await library.metadata(addr,addr)
    let shopName="."
    await fetch(library.formatURL(ipfsMeta)).then(response => response.json()).then(
        response => {
            shopName=response[0]["name"]  
        })
        return shopName
},

loadOwnerBoxes: async function(master){
    let boxes=[]
    await window.ethereum.enable().then(async function (accounts) {
    const { REACT_APP_OWNERSHIPABI } = await process.env;    
    const { REACT_APP_OWNERSHIP } = await process.env;  
    const ownership = new web3.eth.Contract(JSON.parse(REACT_APP_OWNERSHIPABI), REACT_APP_OWNERSHIP) 
    let ta=await ownership.methods.owned(master,0).call()
    for(let i=0;i<ta[1];i++){
        try{
            let tb=await ownership.methods.owner(master,i).call()
            boxes.push(tb)
        }catch(e){}
    }
    })
    return boxes
},


loadModulesList: async function(box){
    let modules=[]
    await window.ethereum.enable().then(async function (accounts) {
    const { REACT_APP_HAPPYBOXABI } = await process.env;    
    const boxC = new web3.eth.Contract(JSON.parse(REACT_APP_HAPPYBOXABI), box) 
    let top=1

    for(let i=0;i<top;i++){
        try{
            let modu=await boxC.methods.modules_list(i).call()
            modules.push(modu)
            top++
        }catch(e){}
    }
    })
    return modules
},

loadOwnerColors: async function(){
    await window.ethereum.enable().then(async function (accounts) {
    library.setBackground(library.metadata(accounts[0],accounts[0]))
    })
},

loadShopColors: async function(addr){
    library.setBackground(library.metadata(addr,addr))
},

setBackground: async function (meta){
    let light=meta["light"]
    if(light)light=light.substring(0,7)
    let dark=meta["dark"]  
    if(dark)dark=dark.substring(0,7)
    let text=meta["text"]  
    if(text)text=text.substring(0,7)
let editCSS = document.createElement('style')
editCSS.innerHTML = ".light {background-color: "+light+"; }";
document.body.appendChild(editCSS);
editCSS = document.createElement('style')
editCSS.innerHTML = ".dark {background-color: "+dark+"; border: solid 3px "+dark+"}";
document.body.appendChild(editCSS);
editCSS = document.createElement('style')
editCSS.innerHTML = ".text {color: "+text+";}";
document.body.appendChild(editCSS);
editCSS = document.createElement('style')
editCSS.innerHTML = ".dhover:hover{background: "+dark+"; border: solid 0px black;}";
document.body.appendChild(editCSS);
editCSS = document.createElement('style')
editCSS.innerHTML = ".lhoverx:hover{background: "+light+";}";
document.body.appendChild(editCSS);
let tl=light
if(light=="fff")tl="ccc"
if(light=="ffffff")tl="ccc"
editCSS.innerHTML = ".lhovermenu:hover {background: "+tl+";}";
document.body.appendChild(editCSS);
},


setGhostBackground: async function (_dark,_light,_text){
    let light=_light
    if(light)light=light.substring(0,6)
    let dark=_dark
    if(dark)dark=dark.substring(0,6)
    let text=_text
    if(text)text=text.substring(0,6)
    let editCSS = document.createElement('style')
    editCSS.innerHTML = ".light {background-color: #"+light+"; }";
    document.body.appendChild(editCSS);
    editCSS = document.createElement('style')
    editCSS.innerHTML = ".dark {background-color: #"+dark+"; border: solid 3px #"+dark+";}";
    document.body.appendChild(editCSS);
    editCSS = document.createElement('style')
    editCSS.innerHTML = ".text {color: #"+text+";}";
    document.body.appendChild(editCSS);
    editCSS = document.createElement('style')
    editCSS.innerHTML = ".dhover:hover {background: #"+dark+"; border: solid 0px black;}";
    document.body.appendChild(editCSS);
    editCSS = document.createElement('style')
    editCSS.innerHTML = ".lhoverx:hover {background: #"+light+";}";
    document.body.appendChild(editCSS);
    editCSS = document.createElement('style')
    let tl=light

    if(light=="fff")tl="ccc"
    if(light=="ffffff")tl="ccc"
    editCSS.innerHTML = ".lhovermenu:hover {background: #"+tl+";}";
    document.body.appendChild(editCSS);
    },

price: async function (list,token){
    let price

    await window.ethereum.enable().then(async function (accounts) { 
        const { REACT_APP_PriceListABI } = process.env;
        const listC = new web3.eth.Contract(JSON.parse(REACT_APP_PriceListABI), list)
        price=await listC.methods.price(token).call()
    })

    return price
},

priceIndex: async function (list,token){
    let index

    await window.ethereum.enable().then(async function (accounts) { 
        const { REACT_APP_PriceListABI } = process.env
        const listC = new web3.eth.Contract(JSON.parse(REACT_APP_PriceListABI), list)
        let listing=await listC.methods.priceListing(0).call()
        for(let i=0;i<listing[2];i++){
            listing=await listC.methods.priceListing(i).call()
            if(listing[0]==token){
                index=i
                i=listing.length
            }
        }
    })

    return index
},

listingAmount: async function (list){
    let tot=0

    await window.ethereum.enable().then(async function (accounts) { 
        const { REACT_APP_PriceListABI } = process.env
        const listC = new web3.eth.Contract(JSON.parse(REACT_APP_PriceListABI), list)
        let listing=await listC.methods.priceListing(0).call()
        tot=listing[2]
    })

    return tot
},


prices: async function (ticket){
    let priceList
    await window.ethereum.enable().then(async function (accounts) { 
        const { REACT_APP_TICKETABI } = process.env;
        const tick = new web3.eth.Contract(JSON.parse(REACT_APP_TICKETABI), ticket)
        priceList=await tick.methods.prices().call()
    })

    return priceList
},

tokenByIndex: async function (list,index){
    let token

    await window.ethereum.enable().then(async function (accounts) { 
        const { REACT_APP_PriceListABI } = process.env
        const listC = new web3.eth.Contract(JSON.parse(REACT_APP_PriceListABI), list)
        let listing=await listC.methods.priceListing(index).call()
        token=listing[0]
    })

    return token
},

happybox: function (address){
    const { REACT_APP_HAPPYBOXABI } = process.env;
    const happybox = new web3.eth.Contract(JSON.parse(REACT_APP_HAPPYBOXABI), address)
    return happybox
},


loadNewEvents: async function(block,who,element){
    let feed="x"
    await window.ethereum.enable().then(async function (accounts) { 
        try{
            const { REACT_APP_DIRECT_FACTORY_ABI } = process.env; 
            const { REACT_APP_DIRECT_FACTORY } = process.env; 
            let mevents = new web3.eth.Contract(JSON.parse(REACT_APP_DIRECT_FACTORY_ABI), REACT_APP_DIRECT_FACTORY)
       let filt={}
  if(who!="all")filt={filter: {token : who.split(",")}}
  
        let eventz = await mevents.events.cx(filt,
        async function(error, event){ 
            let code=4
            
            try{code=await library.ticketCode(event.returnValues.list)}catch(e){}

            //if(code==4)f=await Ticket1_0feed.display(event.returnValues.token,event.returnValues.list,true)
         
                    
                    let l=document.createElement('div')
                    l.setAttribute("class","CXto")
                    l.append(library.getAvatar(event.returnValues[0]))
                    console.log(event.returnValues)
                    const uri = await library.itemMeta(event.returnValues[1])       
                    const itemMeta = await library.itemMetaJSON(uri) 
                    const _image=library.uri2url(itemMeta["image"])
                    var img = document.createElement('img')
                    img.src = _image
                    img.setAttribute("class","feed_logo")
                    var dv = document.createElement("div");
                    dv.setAttribute("class","feed_box darkblue")
                    dv.setAttribute("onclick","window.open('curricular/?account="+who+"')")
                    dv.append(img)
                    dv.append(l)
                    //if(code==4)f=await minifeed.display(arr[i].returnValues.token,arr[i].returnValues.list,false)

                    if(document.getElementById("PriceFeed_feed").childElementCount==0)document.getElementById("PriceFeed_notfound").innerHTML=""
                    
            
            if(element.childElementCount==0)document.getElementById("PriceFeed_notfound").innerHTML=""
            element.insertBefore(dv, element.childNodes[0] || null);
            //element.append(f)
        })
            
        }catch(e){console.log(e.toString())}
    })
    return feed
},


totalSupply: async function (token){
    let tot
    await window.ethereum.enable().then(async function (accounts) { 
    const { REACT_APP_ABI } = process.env;
    const tkn = new web3.eth.Contract(JSON.parse(REACT_APP_ABI), token)                
    let tot = await tkn.methods.totalSupply().call()
    })
    return tot
},

checkITEM: async function(address){
    let meta 
    await window.ethereum.enable().then(async function (accounts) { 
        const { REACT_APP_COLLECTION_URI } = process.env; 
        let token = new web3.eth.Contract(JSON.parse(REACT_APP_COLLECTION_URI), address)
        meta = await token.methods.uri().call()
    })
    return meta
},

item2collection: async function(address){
    let collection 
    await window.ethereum.enable().then(async function (accounts) { 
        const { REACT_APP_INTEROPERABLE } = process.env; 
        let inter = new web3.eth.Contract(JSON.parse(REACT_APP_INTEROPERABLE), address)
        collection = await inter.methods.mainInterface().call()
    })
    return collection
},

collectionMeta: async function(address){
    let meta 
    await window.ethereum.enable().then(async function (accounts) { 
        try{
        const { REACT_APP_INTEROPERABLE } = process.env; 
        let inter = new web3.eth.Contract(JSON.parse(REACT_APP_INTEROPERABLE), address)
        let collection = await inter.methods.mainInterface().call()
        let id=await inter.methods.objectId().call()
        const { REACT_APP_ITEMMODEL } = process.env; 
        let itemmodel = new web3.eth.Contract(JSON.parse(REACT_APP_ITEMMODEL), collection)
        meta=await itemmodel.methods.uri(id).call()
        }catch(e){console.log(e.toString())}
    })
    return meta
},



getBlock: async function(){
    let _block=0
    let block
    await window.ethereum.enable().then(async function (accounts) { 
        block=await web3.eth.getBlock("latest")
        _block=block.number
     })  
     return _block
},



loadAllUnofficialTransfers: async function(token,blck,who,element){
let feed
    let tot=0;
    await window.ethereum.enable().then(async function (accounts) { 
        try{
            const { REACT_APP_tokenABI } = process.env; 
            let mevents = new web3.eth.Contract(JSON.parse(REACT_APP_tokenABI),token)
            let block=(blck=="default")?parseInt(await library.getBlock())-100000:parseInt(blck)
            let eventz 
            
                let arr=[who]
                arr=who
                eventz = await mevents.getPastEvents('Transfer',
                { fromBlock: block, toBlock: 'latest'
                } , async function(error, event){ 
                    feed=event
                    console.log("loadAllUnofficialTransfer")
                    console.log(event)
tot=event.length
                    for(let i=event.length-1;i>=0;i--){

                        let from=library.getAvatar(event[i]["returnValues"][0])
                        from+=" >"
                        let to=library.getAvatar(event[i]["returnValues"][1])
                    
                        let r=document.createElement('div')
                        r.setAttribute("class","CXto")
                        r.append(to)
                        let l=document.createElement('div')
                        l.setAttribute("from",event[i]["returnValues"][0])
                        l.setAttribute("class","CXfrom")
                        l.append(from)
                        const uri = await library.itemMeta(token)       
                        const itemMeta = await library.itemMetaJSON(uri) 
                        const _image=library.uri2url(itemMeta["image"])
                        var img = document.createElement('img')
                        img.src = _image
                        img.setAttribute("class","feed_logo")
                        var dv = document.createElement("div");
                        dv.setAttribute("class","feed_box darkblue")
                        l.setAttribute("onclick","window.open('curricular/?account="+event[i]["returnValues"][0]+"')")
                        img.setAttribute("onclick","window.open('curricular/?cx="+token+"')")
                        r.setAttribute("onclick","window.open('curricular/?account="+event[i]["returnValues"][1]+"')")
                        
                        dv.append(l)
                        dv.append(img)
                        dv.append(r)
                        element.append(dv);

                        /*
                    const uri = await library.itemMeta(token)       
                    const itemMeta = await library.itemMetaJSON(uri) 
                    const _image=library.uri2url(itemMeta["image"])
                    var img = document.createElement('img')
                    img.src = _image
                    img.setAttribute("class","personalfeed_logo")
                    var imbox = document.createElement("div");
                    imbox.setAttribute("class","personalfeed_logobox")
                    var dv = document.createElement("div");
                    dv.setAttribute("class","feed_box darkblue")
                    imbox.setAttribute("onclick","window.open('/curricular/?cx="+event[i].returnValues[1]+"')")
                    imbox.append(img)
                    dv.append(imbox)
                    element.insertBefore(imbox, element.childNodes[0] || null);
*/
                    }
                })
            
            
        }catch(e){console.log("loadAllUnofficialTransfer "+e.toString())}
    })
    return tot
},



loadAllPersonalEvents: async function(blck,who,element){
    let feed="y"
    await window.ethereum.enable().then(async function (accounts) { 
        try{
            const { REACT_APP_UNOFFICIALABI } = process.env; 
            const { REACT_APP_UNOFFICIAL } = process.env; 
            let mevents = new web3.eth.Contract(JSON.parse(REACT_APP_UNOFFICIALABI),REACT_APP_UNOFFICIAL)
            let block=(blck=="default")?parseInt(await library.getBlock())-100000:parseInt(blck)
            let eventz 
            
                let arr=[who]
                arr=who
                eventz = await mevents.getPastEvents('ncx',
                {filter : { "who":who} , fromBlock: block, toBlock: 'latest'
                } , async function(error, event){ 
                    feed=event
                    console.log("loadAllPersonalEvents")
                    console.log(event)

                    for(let i=event.length-1;i>=0;i--){
                    const uri = await library.itemMeta(event[i].returnValues[1])       
                    const itemMeta = await library.itemMetaJSON(uri) 
                    const _image=library.uri2url(itemMeta["image"])
                    var img = document.createElement('img')
                    img.src = _image
                    img.setAttribute("class","personalfeed_logo")
                    var imbox = document.createElement("div");
                    imbox.setAttribute("class","personalfeed_logobox")
                    var dv = document.createElement("div");
                    dv.setAttribute("class","feed_box darkblue")
                    imbox.setAttribute("onclick","window.open('/curricular/?cx="+event[i].returnValues[1]+"')")
                    imbox.append(img)
                    dv.append(imbox)
                    element.insertBefore(imbox, element.childNodes[0] || null);

                    }
                })
            
            
        }catch(e){console.log("loadAllPersonalEvents "+e.toString())}
    })
    return feed
},


loadUnofficialEvents: async function(blck,who,element){
    let feed="z"
    await window.ethereum.enable().then(async function (accounts) { 
        try{
            const { REACT_APP_UNOFFICIALABI } = process.env; 
            const { REACT_APP_UNOFFICIAL } = process.env; 
            let mevents = new web3.eth.Contract(JSON.parse(REACT_APP_UNOFFICIALABI),REACT_APP_UNOFFICIAL)
            let block=(blck=="default")?parseInt(await library.getBlock())-100000:parseInt(blck)
            let eventz 
            
                let arr=[who]
                arr=who
                eventz = await mevents.getPastEvents('ncx',
                { fromBlock: block, toBlock: 'latest'
                } , async function(error, event){ 
                    feed=event
                    console.log("loadUnofficialEvents")
                    console.log(event)

                    for(let i=event.length-1;i>=0;i--){
                    const uri = await library.itemMeta(event[i].returnValues[1])       
                    const itemMeta = await library.itemMetaJSON(uri) 
                    const _image=library.uri2url(itemMeta["image"])
                    var img = document.createElement('img')
                    img.src = _image
                    img.setAttribute("class","unofficial_personalfeed_logo")
                    var imbox = document.createElement("div");
                    imbox.setAttribute("class","unofficial_curriculum_button")
                    var dv = document.createElement("div");
                    dv.setAttribute("class","feed_box darkblue")
                    imbox.setAttribute("onclick","window.open('/curricular/?cx="+event[i].returnValues[1]+"')")
                    imbox.append(img)
                    dv.append(imbox)
                    element.append(imbox);

                    }
                })
            
            
        }catch(e){console.log("loadUnofficialEvents "+e.toString())}
    })
    return feed
},


loadPersonalEvents: async function(blck,who,element){
    let feed="x"
    await window.ethereum.enable().then(async function (accounts) { 
        try{
            const { REACT_APP_UNOFFICIALABI } = process.env; 
            const { REACT_APP_UNOFFICIAL } = process.env; 
            let mevents = new web3.eth.Contract(JSON.parse(REACT_APP_UNOFFICIALABI), REACT_APP_UNOFFICIAL)
            let filt={}
            if(who!="all")filt={filter: {token : who.split(",")}}
  
            let eventz = await mevents.events.ncx(filt,
            async function(error, event){ 
                    
                 
                    console.log(event.returnValues)
                    const uri = await library.itemMeta(event.returnValues[1])       
                    const itemMeta = await library.itemMetaJSON(uri) 
                    const _image=library.uri2url(itemMeta["image"])
                    var img = document.createElement('img')
                    img.src = _image
                    img.setAttribute("class","personalfeed_logo")
                    var imbox = document.createElement("div");
                    imbox.setAttribute("class","personalfeed_logobox")
                    var dv = document.createElement("div");
                    dv.setAttribute("class","feed_box darkblue")
                    imbox.setAttribute("onclick","window.open('/curricular/?cx="+event.returnValues[1]+"')")
                    imbox.append(img)

                    dv.append(imbox)
                    //if(document.getElementById("PriceFeed_feed").childElementCount==0)document.getElementById("PriceFeed_notfound").innerHTML=""
                    
            
           // if(element.childElementCount==0)document.getElementById("PriceFeed_notfound").innerHTML=""
            element.insertBefore(imbox, element.childNodes[0] || null);
            //element.append(f)
        })
            
        }catch(e){console.log(e.toString())}
    })
    return feed
},

loadEvents: async function(blck,who){
    let feed="x"
    await window.ethereum.enable().then(async function (accounts) { 
        try{
        const { REACT_APP_DIRECT_FACTORY_ABI } = process.env; 
        const { REACT_APP_DIRECT_FACTORY } = process.env; 
        let mevents = new web3.eth.Contract(JSON.parse(REACT_APP_DIRECT_FACTORY_ABI), REACT_APP_DIRECT_FACTORY)
  let block=(blck=="default")?parseInt(await library.getBlock())-10000:parseInt(blck)
  let eventz 
  if(who=="all"){
        eventz = await mevents.getPastEvents('allEvents',
        {fromBlock: block,
        toBlock: 'latest'} , function(error, event){ 
            feed=event
        })
    }else{
let arr=[]
arr=who.split(",")
        eventz = await mevents.getPastEvents('who',
        {filter : {token: arr} ,fromBlock: block, toBlock: 'latest'
        } , function(error, event){ 
            
            feed=event
            console.log(event)
        })
    }
            
            //const { REACT_APP_PriceListABI } = process.env; 
            //let prices = new web3.eth.Contract(JSON.parse(REACT_APP_PriceListABI), event.returnValues.owner)
            //let price=await prices.methods.price(event.returnValues.coin).call()
         
        
        }catch(e){console.log("loadEvents "+e.toString())}
    })
    return feed
},



itemMeta: async function(address){
    let meta 
    await window.ethereum.enable().then(async function (accounts) { 
        try{
        const { REACT_APP_INTEROPERABLE } = process.env; 
        let inter = new web3.eth.Contract(JSON.parse(REACT_APP_INTEROPERABLE), address)
        let collection = await inter.methods.mainInterface().call()
        let id=await inter.methods.objectId().call()
        const { REACT_APP_ITEMMODEL } = process.env; 
        let itemmodel = new web3.eth.Contract(JSON.parse(REACT_APP_ITEMMODEL), collection)
        meta=await itemmodel.methods.uri(id).call()
        //let factmeta=await itemmodel.methods.factory().call()
        //alert(factmeta)
        }catch(e){console.log("LIBRARY - itemMeta:"+e.toString())}
    })
    return meta
},

priceList: async  function (address){
    let priceList
    await window.ethereum.enable().then(async function (accounts) { 
    const { REACT_APP_PriceListABI } = process.env; 
    priceList = new web3.eth.Contract(JSON.parse(REACT_APP_PriceListABI), address)
    })

return priceList
},

priceIndex: async  function (list_address,token){
    let priceList
    let index
    await window.ethereum.enable().then(async function (accounts) { 
    const { REACT_APP_PriceListABI } = process.env; 
    priceList = new web3.eth.Contract(JSON.parse(REACT_APP_PriceListABI), list_address)
    let ta = await priceList.methods.priceListing(0).call()
    for(let i=0;i<ta[2];i++){
        let tb = await priceList.methods.priceListing(i).call()
        if(tb[0]==token){
            index=i
            i=ta[2]
        }
    }
    })

return index
},

extractReferral: async  function (){
    let ref
    await window.ethereum.enable().then(async function (accounts) { 
    const { REACT_APP_REFERRALABI } = process.env; 
    const { REACT_APP_REFERRAL } = process.env; 
    const refs = new web3.eth.Contract(JSON.parse(REACT_APP_REFERRALABI), REACT_APP_REFERRAL) 
    let tot = await refs.methods.amount().call()
    let extr=Math.floor(Math.random() * (tot))
  
    ref = await refs.methods.lister(extr).call()
 
    })

return ref[0]
},

getAvatar: function (resp){
    let res
    if(resp)res=resp.toLowerCase()
    if(!resp)res="xxx"
    let curr="0xa3fF3FaFa598dFd6208d07006C9a5aD60DC7a24D"
    

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
    if(res==curr.toLowerCase())avatar="🎓";
    return avatar;
},

getIcon: function (icon){
    let iconImage="👻";
    if(icon=="box")iconImage="🐶";
    if(icon=="star")iconImage="⭐️";
    return iconImage;
},

direct_factory: function (){
    const { REACT_APP_DIRECT_FACTORY_ABI } = process.env;
    const { REACT_APP_DIRECT_FACTORY } = process.env;
    const factory = new web3.eth.Contract(JSON.parse(REACT_APP_DIRECT_FACTORY_ABI), REACT_APP_DIRECT_FACTORY)
    return factory
},

load_factory: function (factor){
    const { REACT_APP_DIRECT_FACTORY_ABI } = process.env;
    const factory = new web3.eth.Contract(JSON.parse(REACT_APP_DIRECT_FACTORY_ABI), factor)
    return factory
},

toHex: function(str) {
        return Array.from(str).map(c => 
          c.charCodeAt(0) < 128 ? c.charCodeAt(0).toString(16).padStart(2, '0') :
          encodeURIComponent(c).replace(/\%/g,'').toLowerCase()
        ).join('');
},

fromHex: function(hex) {
        return decodeURIComponent('%' + hex.match(/.{1,2}/g).join('%'));
      },


clean: function(text) {
        return text.replace(/[`~$%^&*()|+\-=?;'"<>\{\}\[\]\\]/gi, '');
      }





}


const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
export default library