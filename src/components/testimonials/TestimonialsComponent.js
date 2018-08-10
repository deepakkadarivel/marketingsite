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
      </section>
    </div>
  );
};

export default TestimonialsComponent;
