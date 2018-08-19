import React from 'react';
import './sideDrawer.css';
import PropTypes from 'prop-types';

const SideDrawer = props => {
  return (
    <div className={`sidebar ${props.show ? 'sidebar--open' : ''}`}>
      <div className="sidebar__items">
        <a href="#">@ZincLearning</a>
        <a href="#">News</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Login</a>
      </div>

      <p className="sidebar__address">
        PARTNERSHIPS@ZINCLEARNINGLABS.COM
        <br />
        <br />
        <br />
        ZINC LEARNING LABS
        <br />
        41 UNION SQUARE WEST | SUITE 602 NY, NY 10003
      </p>
    </div>
  );
};

SideDrawer.propTypes = {
  show: PropTypes.bool
};

export default SideDrawer;
