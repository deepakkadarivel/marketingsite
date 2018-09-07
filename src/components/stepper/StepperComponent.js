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
        question:
          'you could offer each student a personalized path to progress?',
        answer:
          "Zinc's short (under one class period) diagnostic sets the indepenedent reading level for each student. It features:",
        points: [
          'Short authentic fiction and non-fiction texts',
          'Separate adaptive tests for middle and high school students',
          'Multiple opportunities to re-test and level up later'
        ],
        img: method_test
      },
      {
        id: 1,
        icon: 'vocab',
        text: 'Teach \n Vocabulary',
        question: 'students knew the words and terms?',
        answer: 'Zinc offers explicit vocabulary instruction with:',
        points: [
          "Multi-modal vocabulary games, so students aren't just memorizing definitions",
          'Thousands of words and terms available to create customized sets',
          'Spaced repetition, so students see each word six times over two months',
          'Ready made sets for test prep and commonly taught texts'
        ],
        img: method_vocab,
        link: 'http://bit.ly/2AmgI82',
        linkName: 'PLAY GAME'
      },
      {
        id: 2,
        icon: 'reading',
        text: 'Teach \n Close Reading',
        question: 'all students mastered advanced close reading skills?',
        answer:
          'The reading skills that students master in primary school prepare them to read elementary level texts. Middle, high school and college-level reading, however, demand advanced skills. Our Close Reading Exercises offer:',
        points: [
          'Instruction on discrete close reading skills',
          'Interactive video lessons led by student teachers',
          'Alignment to commonly taught texts like Romeo and Juliet and The Giver',
          'Scaffolding as needed, leveled options, and the ability for students to work at their own pace'
        ],
        img: method_close_reading,
        link: 'http://bit.ly/2w9qxSl',
        linkName: 'PLAY GAME'
      },
      {
        id: 3,
        icon: 'train',
        text: 'Train',
        question: 'students could read texts they love?',
        answer:
          'Zinc links to hundreds of great articles, essays, excerpts and poems and provides short comprehension quizzes for each. Our reading offerings include:',
        points: [
          'Diverse, high-interest, authentic texts from 4th grade reading level up to college',
          'Embedded standardized testing strategies and practice',
          'The ability to sort by subject, difficulty level, length and standards'
        ],
        img: method_train,
        link: 'http://bit.ly/2NLWMNZ',
        linkName: 'BROWSE'
      },
      {
        id: 4,
        icon: 'target',
        text: 'Target',
        question: 'data-driven instruction was a click away?',
        answer:
          'Zinc leaderboards and reports let you and your students see exactly what needs to happen next. We provide:',
        points: [
          'Detailed reporting at the student, class and school level',
          'Reporting on mastery of reading skills and standards',
          'Leaderboards to motivate friendly competition'
        ],
        img: method_target
      }
    ];

    const methodToggleClickHandler = (method = {}) => {
      this.setState({ modalOpen: !this.state.modalOpen, method: method });
    };

    return (
      <div className="step">
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
                    <a
                      href={`#${method.icon}`}
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
            each reading, students take a short assessment, which generates
            robust data to TARGET instruction and monitor progress.
          </p>

          <div className="stepper__bg" />
        </div>

        {methods.map(method => (
          <Method method={method} />
        ))}
      </div>
    );
  }
}

export default StepperComponent;
