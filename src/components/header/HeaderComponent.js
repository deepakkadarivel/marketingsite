import React from 'react';
import './header.css';
import SectionTitleComponent from '../sectionTitle/SectionTitleComponent';

const HeaderComponent = () => {
  return (
    <div className="header">
      <section className="header__section header--bg parallax">
        <SectionTitleComponent
          subHeader={'all of your students loved to read?'}
          content={
            'Join our mission to give students the knowledge, skills, practice and imagination to achieve advanced literacy success.'
          }
        />
      </section>
    </div>
  );
};

export default HeaderComponent;
