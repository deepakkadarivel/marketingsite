import React from 'react';
import './contact.css';
import SectionTitleComponent from '../sectionTitle/SectionTitleComponent';

const Contact = () => {
  return (
    <div className="contact">
      <SectionTitleComponent
        subHeader={'SOMEONE WAS LISTENING TO \n YOUR NEEDS?'}
        content={'We look forward to hearing from you!'}
      />

      <div className="contact__content">
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
          41 UNION SQUARE WEST,
          <br />
          SUITE 602 | NY, NY 10003
        </div>
      </div>
    </div>
  );
};

export default Contact;
