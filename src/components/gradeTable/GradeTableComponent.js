import React from 'react';
import './gradeTable.css';
import PropTypes from 'prop-types';

const GradeTableComponent = props => {
  return (
    <table className="grade">
      <thead>
        <tr>
          <th className="grade__cell grade__cell--head" colSpan={4}>
            see zinc in action:
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="grade__cell grade__cell--body">
            <p>grade</p>6
          </td>
          <td className="grade__cell grade__cell--body">
            <p>grade</p>8
          </td>
          <td className="grade__cell grade__cell--body">hs</td>
          <td className="grade__cell grade__cell--body">ell</td>
        </tr>
      </tbody>
    </table>
  );
};

GradeTableComponent.propTypes = {
  content: PropTypes.string
};

export default GradeTableComponent;
