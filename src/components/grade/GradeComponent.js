import React from 'react';
import PropTypes from 'prop-types';
import './grade.css';
import GradeTableComponent from '../gradeTable/GradeTableComponent';

const GradeComponent = props => {
  return (
    <div className="gradepopup">
      <div className="header">
        <GradeTableComponent
          setSelectedGrade={props.setSelectedGrade}
          className="grade--popup"
          grade={props.grade}
        />
        <div className="header__link">
          <p>VOCABULARY</p>
          <p>CLOSE READING EXPERIENCE</p>
          <p>ARTICLES</p>
          <div className="header__action">
            <p>BROWSE</p> <p>&#9658;</p>
          </div>
        </div>
      </div>
      {props.grade}
    </div>
  );
};

GradeComponent.propTypes = {
  grade: PropTypes.string,
  setSelectedGrade: PropTypes.func
};

export default GradeComponent;
