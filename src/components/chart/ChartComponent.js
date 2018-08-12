import React from 'react';
import './chart.css';
import SectionTitleComponent from '../sectionTitle/SectionTitleComponent';

const ChartComponent = () => {
  const data = {
    headers: [
      '',
      'Zinc',
      'Typical vocabulary program',
      'Typical reading program'
    ],
    rows: [
      {
        title: 'Vocabulary instruction',
        zincProg: true,
        vocabProgram: true,
        readingProg: false
      },
      {
        title: 'Spaced repetition of new words',
        zincProg: true,
        vocabProgram: true,
        readingProg: false
      },
      {
        title: 'Authentic, unaltered text from the "real world"',
        zincProg: true,
        vocabProgram: false,
        readingProg: false
      },
      {
        title: 'Text at a variety of levels',
        zincProg: true,
        vocabProgram: false,
        readingProg: true
      },
      {
        title: 'Gaming elements',
        zincProg: true,
        vocabProgram: true,
        readingProg: false
      },
      {
        title: 'Test prep',
        zincProg: true,
        vocabProgram: false,
        readingProg: false
      },
      {
        title: 'Close reading instruction',
        zincProg: true,
        vocabProgram: false,
        readingProg: false
      },
      {
        title: 'Detailed reporting',
        zincProg: true,
        vocabProgram: true,
        readingProg: true
      }
    ]
  };

  return (
    <div className="chart">
      <section className="chart__section chart--bg parallax">
        <SectionTitleComponent
          subHeader={'all your literacy needs were in one place?'}
        />
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
                  <td>{row.title}</td>
                  <td
                    className={
                      row.zincProg
                        ? `chart__table__correct`
                        : `chart__table__wrong`
                    }
                  >
                    {row.zincProg ? '\u2714' : '\u2717'}
                  </td>
                  <td
                    className={
                      row.vocabProgram
                        ? `chart__table__correct`
                        : `chart__table__wrong`
                    }
                  >
                    {row.vocabProgram ? '\u2714' : '\u2717'}
                  </td>
                  <td
                    className={
                      row.readingProg
                        ? `chart__table__correct`
                        : `chart__table__wrong`
                    }
                  >
                    {row.readingProg ? '\u2714' : '\u2717'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="fullCircle" />
        <div className="fullCircle1" />
      </section>
    </div>
  );
};

export default ChartComponent;
