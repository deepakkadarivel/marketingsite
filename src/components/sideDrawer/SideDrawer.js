import React from 'react';
import './sideDrawer.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const SideDrawer = props => {
  return (
    <div className={`sidebar ${props.show ? 'sidebar--open' : ''}`}>
      <div className="sidebar__items">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/zinc">
          <p>@ZincLearning</p>
        </Link>
        <Link to="/news">
          <p>News</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/contact">
          <p>Contact</p>
        </Link>
        <a href="https://games.zinclearninglabs.com/users/sign_in">
          <p>Login</p>
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
  show: PropTypes.bool
};

export default withRouter(SideDrawer);
