import React from 'react';
import './stepper.css';
import SectionTitleComponent from '../sectionTitle/SectionTitleComponent';

const StepperComponent = () => {
  return (
    <div className="stepper">
      <section className="stepper__section stepper--bg parallax">
        <SectionTitleComponent
          subHeader={'you had a proven methodology that works?'}
        />
      </section>
    </div>
  );
};

export default StepperComponent;
