import React from 'react';
import './drawerToggleButton.css';
import PropTypes from 'prop-types';

const DrawerToggleButton = props => {
  return (
    <button className="toggle-button" onClick={props.drawerClickHandler}>
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
    </button>
  );
};

DrawerToggleButton.propTypes = {
  drawerClickHandler: PropTypes.func
};

export default DrawerToggleButton;
