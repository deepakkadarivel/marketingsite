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
          <p className="action__text">Test</p>
        </div>
        <div className="action__item--link arrow" />
        <div className="action">
          <div className="action__item vocab" />
          <p className="action__text">
            Teach <br /> Vocabulary
          </p>
        </div>
        <div className="action__item--link arrow" />
        <div className="action">
          <div className="action__item reading" />
          <p className="action__text">
            Teach <br /> Close Reading
          </p>
        </div>
        <div className="action__item--link arrow" />
        <div className="action">
          <div className="action__item train" />
          <p className="action__text">Train</p>
        </div>
        <div className="action__item--link arrow" />
        <div className="action">
          <div className="action__item target" />
          <p className="action__text">Target</p>
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
