import React from 'react';
import './backdrop.css';
import PropTypes from 'prop-types';

const Backdrop = props => (
  <div className="backdrop" onClick={props.drawerClickHandler} />
);

Backdrop.propTypes = {
  drawerClickHandler: PropTypes.func
};

export default Backdrop;
