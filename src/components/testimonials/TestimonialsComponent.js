import React from 'react';
import './testimonials.css';
import SectionTitleComponent from '../sectionTitle/SectionTitleComponent';

const TestimonialsComponent = () => {
  return (
    <div className="testimonials">
      <section className="testimonials__section testimonials--bg parallax">
        <SectionTitleComponent
          subHeader={'teachers and students loved the same tool?'}
        />
        <div className="testimonials__section__content">
          <div className="user--image" />

          <div className="user--content">
            <p className="user--content__name">Jason Bowen</p>
            <p className="user--content__profession">
              8th grade English teacher
            </p>
            <p className="user--content__location">Salinas, California</p>
            <p className="user--content__comment">
              "Zinc is thorough, user-friendly and competitive."
            </p>
            <p className="user--content__summary">
              <span>
                <b>School/Population: </b>
              </span>
              97% English Language Learners or former English Language Learners
            </p>
            <p className="user--content__summary">
              <span>
                <b>Zinc use: </b>
              </span>
              Vocabulary instruction for English Language Learners
            </p>

            <p className="user--content__summary">
              Our students are being challenged to read higher-level texts, as
              well as to learn new vocabulary. With this practice, in many cases
              students have been able to provide the definitions to words that
              come up in our readings and share them with the class .
            </p>
          </div>

          <div className="testimonials__section__right" onClick={() => {}} />
          <div className="testimonials__section__left" onClick={() => {}} />
        </div>
      </section>
    </div>
  );
};

export default TestimonialsComponent;
