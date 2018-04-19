import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PanelCard from './components/panelCard'

export default class App extends Component {
  render() {
    const { isMobile } = this.props;

    return (
      <div className="container text-center">
        <div className="row">
          <div className="col-md-2"></div>
        <div className="col-md-8">
                  <PanelCard/>


            </div>
              <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  isMobile: PropTypes.bool.isRequired
};
