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
    const {panelData} = this.state;
    panelData.push(msg);
    console.log(msg)
    this.setState({panelData:panelData});
    console.log(this.state)
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
