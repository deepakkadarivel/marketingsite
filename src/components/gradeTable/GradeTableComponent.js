import React from 'react';
import './gradeTable.css';
import PropTypes from 'prop-types';

const GradeTableComponent = props => {
  return (
    <table className={`grade ${props.isChart ? 'grade--chart' : ''}`}>
      <thead>
        <tr>
          <th className="grade__cell grade__cell--head" colSpan={4}>
            <div className="content">
              <div className="content__eye" />
              <p className="content__text">see zinc in action:</p>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="grade__cell grade__cell--body">ms</td>
          <td className="grade__cell grade__cell--body">hs</td>
          <td className="grade__cell grade__cell--body">ell</td>
        </tr>
      </tbody>
    </table>
  );
};

GradeTableComponent.propTypes = {
  content: PropTypes.string,
  isChart: PropTypes.bool
};

GradeTableComponent.DefaultProps = {
  isChart: false
};

export default GradeTableComponent;
