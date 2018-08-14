import React from 'react';
import './chart.css';
import SectionTitleComponent from '../sectionTitle/SectionTitleComponent';
import PropTypes from 'prop-types';

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
                return <th key={i}>{header}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, i) => {
              return (
                <tr key={i}>
                  <td className={isReadings ? 'readingContent' : ''}>
                    {row.title}
                  </td>
                  {isMethod && (
                    <td
                      className={
                        row.zincProg
                          ? `chart__table__correct`
                          : `chart__table__wrong`
                      }
                    >
                      {row.zincProg ? '\u2714' : '\u2717'}
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
                      {row.vocabProgram ? '\u2714' : '\u2717'}
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
                      {row.readingProg ? '\u2714' : '\u2717'}
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

        {isMethod && (
          <p className="methodsFooter">
            Students who love reading get higher test scores. Period. But Zinc
            also embeds numerous test taking strategies throughout the app.
          </p>
        )}

        <div
          className={`fullCircle ${isReadings ? 'fullCircle--readings' : ''}`}
        />
        <div
          className={`fullCircle1 ${isReadings ? 'fullCircle1--readings' : ''}`}
        />
      </section>
    </div>
  );
};

ChartComponent.propTypes = {
  data: PropTypes.object
};

export default ChartComponent;
