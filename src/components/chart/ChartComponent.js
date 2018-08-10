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
      </section>
    </div>
  );
};

export default ChartComponent;
