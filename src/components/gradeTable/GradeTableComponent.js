import React, { Component } from 'react';
import './gradeTable.css';
import PropTypes from 'prop-types';

const GradeTableComponent = props => {
  const grades = ['ms', 'hs', 'ell'];
  return (
    <table
      className={`grade ${props.className} ${
        props.isChart ? 'grade--chart' : ''
      }`}
    >
      <thead>
        <tr>
          <th className="grade__cell grade__cell--head" colSpan={4}>
            <div className="content">
              <div className="content__eye" />
              <p className="content__text">see zinc in action</p>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {grades.map(grade => (
            <td
              className={`grade__cell grade__cell--body ${props.className}__${
                props.grade === grade ? props.grade : ''
              }`}
              key={grade}
              onClick={() => props.setSelectedGrade(grade)}
            >
              {grade}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

GradeTableComponent.propTypes = {
  content: PropTypes.string,
  isChart: PropTypes.bool,
  setSelectedGrade: PropTypes.func,
  className: PropTypes.string,
  grade: PropTypes.string
};

GradeTableComponent.DefaultProps = {
  isChart: false,
  grade: ''
};

export default GradeTableComponent;
