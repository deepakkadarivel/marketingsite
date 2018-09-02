import React, { Component } from 'react';
import './chart.css';
import SectionTitleComponent from '../sectionTitle/SectionTitleComponent';
import PropTypes from 'prop-types';
import GradeTableComponent from '../gradeTable/GradeTableComponent';
import GradeComponent from '../grade/GradeComponent';
import Backdrop from '../backdrop/Backdrop';

class ChartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grade: ''
    };
  }

  render() {
    const { data } = this.props;
    const isMethod = data.type === 'methods';
    const isReadings = data.type === 'readings';

    const setSelectedGrade = grade => {
      this.setState({
        grade
      });
    };

    return (
      <div className={`chart ${isMethod ? 'chart--bg' : ''}`}>
        <section className="chart__section">
          <SectionTitleComponent subHeader={data.contentSubHeader} />
          <table className="chart__table">
            <thead>
              <tr>
                {data.headers.map((header, i) => {
                  return (
                    <th
                      key={i}
                      className={isReadings ? 'readingHeader' : 'methodsHeader'}
                    >
                      {header}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, i) => {
                return (
                  <tr key={i}>
                    <td className={isReadings ? 'readingContent' : ''}>
                      <div className={isReadings ? 'readingContent--body' : ''}>
                        {isReadings ? <span className="check_dark" /> : ''}{' '}
                        <p>{row.title}</p>
                      </div>
                    </td>
                    {isMethod && (
                      <td
                        className={`chart__table__bg ${
                          row.zincProg
                            ? 'chart__table__correct'
                            : 'chart__table__wrong'
                        }`}
                      >
                        <div className={row.zincProg ? 'check' : 'x'} />
                      </td>
                    )}
                    {isMethod && (
                      <td
                        className={
                          row.vocabProgram
                            ? `chart__table__correct`
                            : `chart__table__wrong`
                        }
                      >
                        <div className={row.vocabProgram ? 'check' : 'x'} />
                      </td>
                    )}
                    {isMethod && (
                      <td
                        className={
                          row.readingProg
                            ? `chart__table__correct`
                            : `chart__table__wrong`
                        }
                      >
                        <div className={row.readingProg ? 'check' : 'x'} />
                      </td>
                    )}
                    {isReadings && (
                      <td className="readingContent">{row.content}</td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <GradeTableComponent
            setSelectedGrade={setSelectedGrade}
            isChart={true}
          />
          {this.state.grade !== '' && (
            <Backdrop drawerClickHandler={() => setSelectedGrade('')} />
          )}
          {this.state.grade !== '' && (
            <GradeComponent
              grade={this.state.grade}
              setSelectedGrade={setSelectedGrade}
            />
          )}
        </section>
      </div>
    );
  }
}

ChartComponent.propTypes = {
  data: PropTypes.object
};

export default ChartComponent;
