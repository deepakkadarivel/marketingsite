import React, { Component } from 'react';
import './header.css';
import SectionTitleComponent from '../sectionTitle/SectionTitleComponent';
import GradeTableComponent from '../gradeTable/GradeTableComponent';
import GradeComponent from '../grade/GradeComponent';
import Backdrop from '../backdrop/Backdrop';
import Video from '../video/Video';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grade: ''
    };
  }

  render() {
    let text =
      'Let’s give students the knowledge, skills, and\npractice they need to achieve advanced literacy success.';
    let content = text.split('\n').map((i, key) => <p key={key}>{i}</p>);

    const setSelectedGrade = grade => {
      this.setState({
        grade
      });
    };

    return (
      <div className="header">
        <section className="header__section header--bg parallax">
          <SectionTitleComponent
            subHeader={'all of your students loved to read?'}
            content={content}
          />
          <GradeTableComponent setSelectedGrade={setSelectedGrade} />

          <Video src={'https://www.youtube.com/embed/ZsX0JzokWdU?ecver=1'} />
          {this.state.grade !== '' && (
            <Backdrop drawerClickHandler={() => setSelectedGrade('')} />
          )}
          {this.state.grade !== '' && (
            <GradeComponent
              grade={this.state.grade}
              setSelectedGrade={setSelectedGrade}
            />
          )}
        </section>
      </div>
    );
  }
}

export default HeaderComponent;
