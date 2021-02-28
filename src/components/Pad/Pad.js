import React, { Component } from 'react'
import Splash from '../Splash/Splash';
import Instructions from '../Instructions/Instructions';
import Avatar from '../Avatar/Avatar';
import Token from '../Token/Token';
import Bows from '../Bows/Bows';
import Factory from '../Factory/Factory';
import Ufactory from '../Ufactory/Ufactory';
import Create from '../Create/Create';
import Feed from '../Feed/Feed';
import Distribution from '../Distribution/Distribution';
import Friends from '../Friends/Friends';
import Roadmap from '../Roadmap/Roadmap';
import Empty from '../Empty/Empty';
import New from '../New/New';
import Manifest from '../Manifest/Manifest';
import Features from '../Features/Features';
import Opportunities from '../Opportunities/Opportunities';
import Dev from '../Dev/Dev';
import EmptyAvatar from '../EmptyAvatar/EmptyAvatar';
import UnderConstruction from '../UnderConstruction/UnderConstruction';

import './css.css'; 


class Pad extends Component {
    constructor() {
        super()
        this.state = {
          layout: "_1_",
          items: []
        }
      }

    layoutBack = (l) => {
        this.setState({
            layout : JSON.parse(l)
        })     
    }  

    enumBack = (e) => {
        this.setState({ layout : e })
    }

    itemsBack = (e) => {
      this.setState({ items : e })
  }
   

    render(){ 
      if(this.props.panel==="UnderConstruction")
      return (
        <div id="superpad">
          <div id="pad">
            <UnderConstruction update={this.props.update}></UnderConstruction>
          </div>
        </div>
      );
      if(this.props.panel==="Splash")
        return (
          <div id="superpad">
            <div id="pad" className="light lightblue">
              <Splash update={this.props.update}></Splash>
            </div>
          </div>
        );
       
       
        if(this.props.panel==="Instructions"){
          window.history.pushState('token_page', 'Token Display', '/curricular/')
      
        return (
          <div id="superpad">
            <div id="instructions_pad" className="light lightblue">
              <Instructions update={this.props.update}></Instructions>
            </div>           
          </div>
        );
        }

        if(this.props.panel==="Factory"){
          window.history.pushState('token_page', 'Token Display', '/curricular/')
      
        return (
          <div id="superpad">
            <div id="instructions_pad" className="light lightblue">
              <Factory update={this.props.update}></Factory>
            </div>           
          </div>
        );
        }

        if(this.props.panel==="Ufactory"){
          window.history.pushState('token_page', 'Token Display', '/curricular/')
      
        return (
          <div id="superpad">
            <div id="instructions_pad" className="light lightblue">
              <Ufactory update={this.props.update}></Ufactory>
            </div>           
          </div>
        );
        }
        if(this.props.panel==="Avatar"){
          window.history.pushState('token_page', 'Token Display', '/curricular/?account='+this.props.token)
        return (
          <div id="superpad">
            <div id="pad" className="pad light lightblue">
              
              <Avatar update={this.props.update}></Avatar>
            </div>           
          </div>
        );
        }

        if(this.props.panel==="Feed"){
          window.history.pushState('token_page', 'Token Display', '/curricular/')
        return (
          <div id="superpad">
            <div id="pad" className="pad light lightblue">
              
              <Feed update={this.props.update}></Feed>
            </div>           
          </div>
        );
        }
        if(this.props.panel==="Hats"){
          window.history.pushState('token_page', 'Token Display', '/curricular/')  
        return (
          <div id="superpad">
            <div id="pad" className="pad light lightblue">      
              <Bows update={this.props.update}></Bows>
            </div>           
          </div>
        );
        }
        if(this.props.panel==="Roadmap"){
          window.history.pushState('token_page', 'Token Display', '/curricular/')  
        return (
          <div id="superpad">
            <div id="pad" className="pad light lightblue">      
              <Roadmap update={this.props.update}></Roadmap>
            </div>           
          </div>
        );
        }
        if(this.props.panel==="Features"){
          window.history.pushState('token_page', 'Token Display', '/curricular/')  
        return (
          <div id="superpad">
            <div id="pad" className="pad light lightblue">      
              <Features update={this.props.update}></Features>
            </div>           
          </div>
        );
        }
        if(this.props.panel==="Manifest"){
          window.history.pushState('token_page', 'Token Display', '/curricular/')  
        return (
          <div id="superpad">
            <div id="pad" className="pad light lightblue">      
              <Manifest update={this.props.update}></Manifest>
            </div>           
          </div>
        );
        }
        if(this.props.panel==="Opportunities"){
          window.history.pushState('token_page', 'Token Display', '/curricular/')  
        return (
          <div id="superpad">
            <div id="pad" className="pad light lightblue">      
              <Opportunities update={this.props.update}></Opportunities>
            </div>           
          </div>
        );
        }
        
        if(this.props.panel==="Dev"){
          window.history.pushState('token_page', 'Token Display', '/curricular/')  
        return (
          <div id="superpad">
            <div id="pad" className="pad light lightblue">      
              <Dev update={this.props.update}></Dev>
            </div>           
          </div>
        );
        }

        if(this.props.panel==="Token"){
        window.history.pushState('token_page', 'Token Display', '/?token='+this.props.stateX.token);
        return (
          <div id="superpad">
            <div id="pad">
              <Token update={this.props.update} token={this.props.stateX.token}></Token>
            </div>           
          </div>
        );}

        if(this.props.panel==="New"){
          window.history.pushState('token_page', 'Token Display', '/');
          return (
            <div id="superpad">
              <div id="pad">
                <New update={this.props.update}></New>
              </div>           
            </div>
          );}
 
          
           
               
                 
                        
                            if(this.props.panel==="Distribution"){
                              return (
                                <div id="superpad">
                                  <div id="pad">
                                    <Distribution update={this.props.update}></Distribution>
                                  </div>           
                                </div>
                              );}
                             
                            
                                  if(this.props.panel==="Friends"){
                                    return (
                                      <div id="superpad">
                                        <div id="pad">
                                          <Friends update={this.props.update}></Friends>
                                        </div>           
                                      </div>
                                    );}
                                    if(this.props.panel==="Empty"){
                                      return (
                                        <div id="superpad">
                                          <div id="pad">
                                            <Empty update={this.props.update}></Empty>
                                          </div>           
                                        </div>
                                      );}
                                      if(this.props.panel==="EmptyAvatar"){
                                        return (
                                          <div id="superpad">
                                            <div id="pad" className="light lightblue text white">
                                              <EmptyAvatar update={this.props.update}></EmptyAvatar>
                                            </div>           
                                          </div>
                                        );}
  
 if(this.props.panel==="create"){
   if(this.props.to){
    window.history.pushState('create_page', 'Create Page', '/curricular/?cx='+this.props.token+'&to='+this.props.to)  
   }else{
    window.history.pushState('create_page', 'Create Page', '/curricular/?cx='+this.props.token)  
  
   }
    return (
   <div id="superpad">
    <div id="pad" className="pad light lightblue">      
    <Create update={this.props.update} to={this.props.to}></Create>
    </div>           
    </div>
   );
   }                              
                                         
                                          
                                          
    }

    jump = () => {
      return(
        window.open('[["pad"],'+JSON.stringify(this.state.layout).split('"_').join("{").split('_"').join("}")+']')
      );
    }

    renderLayoutString = () => {
      return ('[["pad"],'+JSON.stringify(this.state.layout).split('"_').join("{").split('_"').join("}"))+']';
    }

}



/*

import Panel2x1_ from '../panel2x1_/panel2x1_';
import Panel1x2_ from '../panel1x2_/panel1x2_';
import Panel3x1_ from '../panel3x1_/panel3x1_';
import Panel1x3_ from '../panel1x3_/panel1x3_';
import Hwings from '../Hwings/Hwings';
import Vwings from '../Vwings/Vwings';

      if(this.state.layout[0]=="1x2"){return (<div id="superpad"><div id="pad"><Panel1x2_ layoutBack={this.layoutBack} enumBack={this.enumBack} layout={this.state.layout}></Panel1x2_></div><div id="console"><div id="console_content">{this.renderLayoutString()}</div><div id="openLayout" onClick={() => {this.jump()}}>VIEW</div></div> 
        </div>);}
      if(this.state.layout[0]=="3x1"){return (<div id="superpad"><div id="pad"><Panel3x1_ layoutBack={this.layoutBack} enumBack={this.enumBack} layout={this.state.layout}></Panel3x1_></div><div id="console"><div id="console_content">{this.renderLayoutString()}</div><div id="openLayout" onClick={() => {this.jump()}}>VIEW</div></div> 
        </div>);}
      if(this.state.layout[0]=="1x3"){return (<div id="superpad"><div id="pad"><Panel1x3_ layoutBack={this.layoutBack} enumBack={this.enumBack} layout={this.state.layout}></Panel1x3_></div><div id="console"><div id="console_content">{this.renderLayoutString()}</div><div id="openLayout" onClick={() => {this.jump()}}>VIEW</div></div> 
         </div>);}
      if(this.state.layout[0]=="Hwings"){return (<div id="superpad"><div id="pad"><Hwings layoutBack={this.layoutBack} enumBack={this.enumBack} layout={this.state.layout}></Hwings></div><div id="console"><div id="console_content">{this.renderLayoutString()}</div><div id="openLayout" onClick={() => {this.jump()}}>VIEW</div></div> 
         </div>);}
      if(this.state.layout[0]=="Vwings"){return (<div id="superpad"><div id="pad"><Vwings layoutBack={this.layoutBack} enumBack={this.enumBack} layout={this.state.layout}></Vwings></div><div id="console"><div id="console_content">{this.renderLayoutString()}</div><div id="openLayout" onClick={() => {this.jump()}}>VIEW</div></div> 
      </div>);}
*/


export default Pad