import React, { Component } from 'react';
import './toolbar.css';
import DrawerToggleButton from '../sideDrawer/DrawerToggleButton';
import PropTypes from 'prop-types';

class ToolbarComponent extends Component {
  render() {
    return (
      <div className="nav">
        <div>
          <DrawerToggleButton
            drawerClickHandler={this.props.drawerClickHandler}
          />
        </div>
        <div className="nav__logo" />
        <div className="nav__items">
          <a href="#">News</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Login</a>
          <a href="#">Sign up for a Demo</a>
        </div>
      </div>
    );
  }
}

ToolbarComponent.propTypes = {
  drawerClickHandler: PropTypes.func
};

export default ToolbarComponent;
