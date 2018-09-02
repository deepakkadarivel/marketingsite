import React, { Component } from 'react';
import './gradeTable.css';
import PropTypes from 'prop-types';

class GradeTableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ''
    };
  }
  render() {
    const grades = ['ms', 'hs', 'ell'];
    const setSelected = grade => {
      this.setState({
        selected: grade
      });
    };
    return (
      <table
        className={`grade ${this.props.className} ${
          this.props.isChart ? 'grade--chart' : ''
        }`}
      >
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
            {grades.map(grade => (
              <td
                className={`grade__cell grade__cell--body ${
                  this.props.className
                }__${this.props.grade === grade ? this.props.grade : ''}`}
                key={grade}
                onClick={() => {
                  this.props.setSelectedGrade(grade);
                  setSelected(grade);
                }}
              >
                {grade}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  }
}

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
