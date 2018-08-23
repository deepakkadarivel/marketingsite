import React, { Component } from 'react';
import './stepper.css';
import SectionTitleComponent from '../sectionTitle/SectionTitleComponent';
import Backdrop from '../backdrop/Backdrop';
import Method from '../method/Method';

import method_test from '../../assets/images/methodology/methodology_slide-show_Test_grab.jpg';
import method_vocab from '../../assets/images/methodology/methodology_slide-show_Teach_Vocab_grab.jpg';
import method_close_reading from '../../assets/images/methodology/methodology_slide-show_Teach_CR_grab.jpg';
import method_target from '../../assets/images/methodology/methodology_slide-show_Target_grab.jpg';
import method_train from '../../assets/images/methodology/methodology_slide-show_Train_grab.jpg';

class StepperComponent extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
      method: {}
    };
  }

  render() {
    const methods = [
      {
        id: 0,
        icon: 'test',
        text: 'Test',
        question: 'YOU KNEW WHERE TO START WITH EACH STUDENT?',
        answer:
          'Zinc can offer your students a path to progress. Our short (under one class period) diagnostic sets a baseline level for each stu- dent.',
        points: [
          'short authentic fiction and non-fiction texts',
          'separate adaptive tests for middle and high school students',
          'multiple opportunities to retest and level up later'
        ],
        img: method_test
      },
      {
        id: 1,
        icon: 'vocab',
        text: 'Teach \n Vocabulary',
        question: 'STUDENTS KNEW THE WORDS AND TERMS?',
        answer:
          'Zinc offers explicit vocabulary/ terms instruction and engaging close reading skills lessons.',
        points: [
          'multi-modal vocabulary games with spaced repetition',
          'over 5000 words and terms let you use existing sets or make your own',
          'relatable presenters guide students through interactive close reading experiences to build comprehension skills'
        ],
        img: method_vocab
      },
      {
        id: 2,
        icon: 'reading',
        text: 'Teach \n Close Reading',
        question: 'ALL STUDENTS MASTERED CLOSE READING SKILLS?',
        answer:
          'Zinc links to hundreds of great articles, essays, excerpts and poems and provides short comprehension quizzes for each.',
        points: [
          'diverse, high-interest, authentic texts',
          ' embedded standardized testing strategies and practice',
          'sort by subject, difficulty level, length or use multiple article sets aligned to curricula'
        ],
        img: method_close_reading
      },
      {
        id: 3,
        icon: 'train',
        text: 'Train',
        question: 'STUDENTS COULD READ TEXTS THEY LOVE?',
        answer:
          'Zinc links to hundreds of great articles, essays, excerpts and poems and provides short comprehension quizzes for each.',
        points: [
          'diverse, high-interest, authentic texts',
          ' embedded standardized testing strategies and practice',
          'sort by subject, difficulty level, length or use multiple article sets aligned to curricula'
        ],
        img: method_train
      },
      {
        id: 4,
        icon: 'target',
        text: 'Target',
        question: 'DATA-DRIVEN INSTRUCTION WAS A CLICK AWAY?',
        answer:
          'Zinc leaderboards and reports let you and your students see exactly what needs to happen next.',
        points: [
          'see detailed reporting on each student, each class or your whole school',
          'aligned to TEKS, FLA and state standards',
          'leaderboards motivate friendly competition'
        ],
        img: method_target
      }
    ];

    const methodToggleClickHandler = (method = {}) => {
      this.setState({ modalOpen: !this.state.modalOpen, method: method });
    };

    return (
      <div className="stepper">
        {this.state.modalOpen && (
          <Backdrop drawerClickHandler={() => methodToggleClickHandler({})} />
        )}

        {this.state.modalOpen && <Method method={this.state.method} />}

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
                  <div
                    className={`action__item ${method.icon}`}
                    onClick={() => methodToggleClickHandler(method)}
                  />
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
