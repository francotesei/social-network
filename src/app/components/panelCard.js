import React, { Component } from 'react';
import PropTypes from 'prop-types';
import socketIOClient from "socket.io-client";
import {updateNetwork} from '../../core-utils/index';
const URL = 'http://localhost:3002';
export default class PanelCard extends Component {
  constructor(props){
    super(props)
    this.renderPanelView = this.renderPanelView.bind(this);
    this.state = {panelData:[]}
    this.pushMsg = this.pushMsg.bind(this);
    this.summitPost = this.summitPost.bind(this);


  }
  componentDidMount() {
   const { endpoint } = this.state;
   const socket = socketIOClient(URL);
   socket.on("FromAPI", data => this.setState({ response: data }));
 }

  pushMsg(msg){
    const {panelData} = this.state;
    panelData.push(msg);
    console.log(msg)
    this.setState({panelData:panelData});
    updateNetwork(panelData);

  }

  summitPost(e){
    if(e.key == 'Enter'){
      this.pushMsg(e.target.value)
    }
  }

  renderPanelView(){
    let views = this.state.panelData.map((data,key)=>{
    return (  <div key={key} className="panel panel-default">
      <div className="panel-body">
        {data}
      </div>
    </div>)
    })
    return views;

  }
  render() {
    console.log(this.state);


    return (
      <div>


  {this.renderPanelView()}

 <input type="text" onKeyPress={this.summitPost} className="form-control" placeholder="post" />
      </div>
    );
  }
}

PropTypes.propTypes = {

};
