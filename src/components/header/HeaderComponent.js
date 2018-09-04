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
      'Join our mission to give students the knowledge, skills, \npractice and imagination to achieve advanced literacy success.';
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

          <Video
            src={
              'blob:https://www.dropbox.com/0977e8ac-a4dc-4481-a321-d03bf4314f69'
            }
          />
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
