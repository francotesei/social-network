import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PanelCard extends Component {
  constructor(props){
    super(props)
    this.renderPanelView = this.renderPanelView.bind(this);
    this.state = {panelData:[]}
    this.pushMsg = this.pushMsg.bind(this);
    this.summitPost = this.summitPost.bind(this);


  }

  pushMsg(msg){

    this.state.panelData.push(msg)
  }

  summitPost(e){
    console.log("hola",e)
    if(e.key == 'ENTER'){
      this.pushMsg(e.target.value)
    }
  }

  renderPanelView(){
    let views = this.state.panelData.map((data)=>{
    return (  <div className="panel panel-default">
      <div className="panel-body">
        {data}
      </div>
    </div>)
    })
    return views;

  }
  render() {


    return (
      <div>


  {this.renderPanelView()}

 <input type="text" onKeyPress={()=>{console.log("hola")}} className="form-control" placeholder="post" />
      </div>
    );
  }
}

PropTypes.propTypes = {

};
