import React from 'react';
import './chart.css';
import SectionTitleComponent from '../sectionTitle/SectionTitleComponent';
import PropTypes from 'prop-types';
import GradeTableComponent from '../gradeTable/GradeTableComponent';

const ChartComponent = props => {
  const { data } = props;
  const isMethod = data.type === 'methods';
  const isReadings = data.type === 'readings';

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
        <GradeTableComponent isChart={true} />
      </section>
    </div>
  );
};

ChartComponent.propTypes = {
  data: PropTypes.object
};

export default ChartComponent;
