import React from 'react';
import './header.css';
import SectionTitleComponent from '../sectionTitle/SectionTitleComponent';
import GradeTableComponent from '../gradeTable/GradeTableComponent';

const HeaderComponent = () => {
  let text =
    'Join our mission to give students the knowledge, skills, \npractice and imagination to achieve advanced literacy success.';
  let content = text.split('\n').map((i, key) => <p key={key}>{i}</p>);
  return (
    <div className="header">
      <section className="header__section header--bg parallax">
        <SectionTitleComponent
          subHeader={'all of your students loved to read?'}
          content={content}
        />
        <GradeTableComponent />
      </section>
    </div>
  );
};

export default HeaderComponent;
