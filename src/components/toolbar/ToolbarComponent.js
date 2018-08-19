import React, { Component } from 'react';
import './toolbar.css';
import DrawerToggleButton from '../sideDrawer/DrawerToggleButton';
import PropTypes from 'prop-types';

class ToolbarComponent extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__logo" />
        <div className="nav__items">
          <a href="#">Sign up for a Demo</a>
          <a href="#">Login</a>
        </div>
        <div>
          <DrawerToggleButton
            drawerClickHandler={this.props.drawerClickHandler}
          />
        </div>
      </div>
    );
  }
}

ToolbarComponent.propTypes = {
  drawerClickHandler: PropTypes.func
};

export default ToolbarComponent;
