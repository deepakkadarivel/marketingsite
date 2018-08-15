import React from 'react';
import './sideDrawer.css';
import PropTypes from 'prop-types';

const SideDrawer = props => {
  return (
    <div className={`sidebar ${props.show ? 'sidebar--open' : ''}`}>
      <div className="sidebar__logo" />
      <div className="sidebar__items">
        <a href="#">News</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Login</a>
        <a href="#">Sign up for a Demo</a>
      </div>
    </div>
  );
};

SideDrawer.propTypes = {
  show: PropTypes.bool
};

export default SideDrawer;
