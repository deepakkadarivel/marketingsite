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

      <div className="stepper__section__actions">
        <div className="action">
          <div className="action__item test" />
          <span className="action__text">Test</span>
        </div>
        <div className="action">
          <div className="action__item teach" />
          <span className="action__text">Teach</span>
        </div>
        <div className="action">
          <div className="action__item train" />
          <span className="action__text">Train</span>
        </div>
        <div className="action">
          <div className="action__item target" />
          <span className="action__text">Target</span>
        </div>
      </div>

      <p className="stepper__section__text">
        Zinc addresses the literacy needs of all middle and high school
        students, from reluctant readers to high-achievers. First, our quick
        diagnostics TEST to establish independent reading levels. Then Zinc
        TEACHES students close reading strategies and new vocabulary. With these
        new skills and words, students then TRAIN their reading abilities with a
        wide selection of leveled, authentic texts. After each reading, students
        take a short assessment, which generates robust data to TARGET
        instruction and monitor progress.
      </p>

      <div className="stepper__bg" />
    </div>
  );
};

export default StepperComponent;
