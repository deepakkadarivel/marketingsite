import React, { Component } from 'react';
import './toolbar.css';
import DrawerToggleButton from '../sideDrawer/DrawerToggleButton';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ToolbarComponent extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__logo" />
        <div className="nav__items">
          <Link to="/signup">Sign up for a Demo</Link>
          <a href="https://games.zinclearninglabs.com/users/sign_in">Login</a>
        </div>
        <div>
          <DrawerToggleButton
            drawerClickHandler={() => this.props.drawerClickHandler()}
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
