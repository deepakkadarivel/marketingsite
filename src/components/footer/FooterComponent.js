import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
  return (
    <div className="footer">
      <section className="footer__section">
        <div className="footer__section__actions">
          <div className="button">
            <span className="sign-up" />
            <Link to="/signup">sign up for a demo</Link>
          </div>
          <div className="button">
            <span className="email" />
            PARTNERSHIPS@ZINCLEARNINGLABS.COM
          </div>
          <div className="button">
            <span className="phone" />
            212.924.3040
          </div>
          <div className="button">
            <span className="location" />
            ZINC LEARNING LABS
            <br />
            41 UNION SQUARE WEST | SUITE 602 | NY, NY 10003
          </div>
        </div>
      </section>
    </div>
  );
};

export default FooterComponent;
