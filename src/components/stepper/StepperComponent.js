import React, { Component } from 'react';
import './stepper.css';
import SectionTitleComponent from '../sectionTitle/SectionTitleComponent';

class StepperComponent extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false
    };
  }

  render() {
    const methods = [
      {
        id: 0,
        icon: 'test',
        text: 'Test'
      },
      {
        id: 1,
        icon: 'vocab',
        text: 'Teach \n Vocabulary'
      },
      {
        id: 2,
        icon: 'reading',
        text: 'Teach \n Close Reading'
      },
      {
        id: 3,
        icon: 'train',
        text: 'Train'
      },
      {
        id: 4,
        icon: 'target',
        text: 'Target'
      }
    ];

    const methodToggleClickHandler = () => {
      this.setState(prevState => {
        return { modalOpen: !prevState.sideDrawerOpen };
      });
    };

    return (
      <div className="stepper">
        <section className="stepper__section stepper--bg parallax">
          <SectionTitleComponent
            subHeader={'you had a proven methodology that works?'}
          />
        </section>

        <div className="stepper__section__actions">
          {methods.map(method => {
            let text = method.text
              .split('\n')
              .map((i, key) => <p key={key}>{i}</p>);
            return (
              <div className="action-container" key={method.id}>
                <div className="action">
                  <div className={`action__item ${method.icon}`} />
                  <p className="action__text">{text}</p>
                </div>
                {method.id !== 4 && (
                  <div className="action__item--link arrow" />
                )}
              </div>
            );
          })}
        </div>

        <p className="stepper__section__text">
          Zinc addresses the literacy needs of all middle and high school
          students, from reluctant readers to high-achievers. First, our quick
          diagnostics TEST to establish independent reading levels. Then Zinc
          TEACHES students close reading strategies and new vocabulary. With
          these new skills and words, students then TRAIN their reading
          abilities with a wide selection of leveled, authentic texts. After
          each reading, students take a short assessment, which generates robust
          data to TARGET instruction and monitor progress.
        </p>

        <div className="stepper__bg" />
      </div>
    );
  }
}

export default StepperComponent;
