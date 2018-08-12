import React from 'react';
import './chart.css';
import SectionTitleComponent from '../sectionTitle/SectionTitleComponent';

const ChartComponent = () => {
  return (
    <div className="chart">
      <section className="chart__section chart--bg parallax">
        <SectionTitleComponent
          subHeader={'all your literacy needs were in one place?'}
        />
        <table className="chart__table">
          <thead>
            <tr>
              <th />
              <th>Zinc</th>
              <th>Typical vocabulary program</th>
              <th>Typical reading program</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vocabulary instruction</td>
              <td className="chart__table__correct">&#10004;</td>
              <td className="chart__table__correct">&#10004;</td>
              <td className="chart__table__wrong">&#10007;</td>
            </tr>
            <tr>
              <td>Spaced repetition of new words</td>
              <td className="chart__table__correct">&#10004;</td>
              <td className="chart__table__correct">&#10004;</td>
              <td className="chart__table__wrong">&#10007;</td>
            </tr>
            <tr>
              <td>Authentic, unaltered text from the “real world”</td>
              <td className="chart__table__correct">&#10004;</td>
              <td className="chart__table__wrong">&#10007;</td>
              <td className="chart__table__wrong">&#10007;</td>
            </tr>
            <tr>
              <td>Text at a variety of levels</td>
              <td className="chart__table__correct">&#10004;</td>
              <td className="chart__table__wrong">&#10007;</td>
              <td className="chart__table__correct">&#10004;</td>
            </tr>
            <tr>
              <td>Gaming elements</td>
              <td className="chart__table__correct">&#10004;</td>
              <td className="chart__table__correct">&#10004;</td>
              <td className="chart__table__wrong">&#10007;</td>
            </tr>
            <tr>
              <td>Test prep</td>
              <td className="chart__table__correct">&#10004;</td>
              <td className="chart__table__wrong">&#10007;</td>
              <td className="chart__table__wrong">&#10007;</td>
            </tr>
            <tr>
              <td>Close reading instruction</td>
              <td className="chart__table__correct">&#10004;</td>
              <td className="chart__table__wrong">&#10007;</td>
              <td className="chart__table__wrong">&#10007;</td>
            </tr>
            <tr>
              <td>Detailed reporting</td>
              <td className="chart__table__correct">&#10004;</td>
              <td className="chart__table__correct">&#10004;</td>
              <td className="chart__table__correct">&#10004;</td>
            </tr>
          </tbody>
        </table>

        <div className="fullCircle" />
        <div className="fullCircle1" />
      </section>
    </div>
  );
};

export default ChartComponent;
