import React from 'react';
import './sideDrawer.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const SideDrawer = props => {
  return (
    <div className={`sidebar ${props.show ? 'sidebar--open' : ''}`}>
      <div className="close" onClick={props.drawerClickHandler} />
      <div className="sidebar__items">
        <Link to="/">
          <p>
            <span>>&nbsp;</span> Home
          </p>
        </Link>
        <Link to="/zinc">
          <p>
            <span>>&nbsp;</span>
            @ZincLearning
          </p>
        </Link>
        <Link to="/news">
          <p>
            <span>>&nbsp;</span>
            News
          </p>
        </Link>
        <Link to="/about">
          <p>
            <span>>&nbsp;</span>
            About
          </p>
        </Link>
        <Link to="/contact">
          <p>
            <span>>&nbsp;</span>
            Contact
          </p>
        </Link>
        <a href="https://games.zinclearninglabs.com/users/sign_in">
          <p>
            <span>>&nbsp;</span>
            Log in
          </p>
        </a>
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
  show: PropTypes.bool,
  drawerClickHandler: PropTypes.func
};

export default withRouter(SideDrawer);
