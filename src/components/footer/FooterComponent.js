import React from 'react';
import './footer.css';

const FooterComponent = () => {
  return (
    <div className="footer">
      <section className="footer__section">
        <div className="footer__section__actions">
          <button className="button">sign up for a demo</button>
          <button className="button">join today</button>
        </div>
        <div className="footer__section__address">
          <p>
            41 Union Square West, Suite 602 <br /> New York, NY | 10003
          </p>
          <br />
          <p>
            support@zinclearninglabs.com <br /> 212.924.3040
          </p>
        </div>
      </section>
    </div>
  );
};

export default FooterComponent;
