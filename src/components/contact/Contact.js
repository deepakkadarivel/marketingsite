import React from 'react';
import './contact.css';
import SectionTitleComponent from '../sectionTitle/SectionTitleComponent';

const Contact = () => {
  return (
    <div className="contact">
      <SectionTitleComponent
        subHeader={'SOMEONE WAS LISTENING TO YOUR NEEDS?'}
        content={'We look forward to hearing from you!'}
      />
    </div>
  );
};

export default Contact;
