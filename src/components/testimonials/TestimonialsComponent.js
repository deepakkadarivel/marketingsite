import React, { Component } from 'react';
import './testimonials.css';
import SectionTitleComponent from '../sectionTitle/SectionTitleComponent';

class TestimonialsComponent extends Component {
  testimonials = [
    {
      name: 'Jason Bowen',
      profession: '8th grade English teacher',
      location: 'Salinas, California',
      comment: 'Zinc is thorough, user-friendly and competitive.',
      school:
        '97% English Language Learners or former English Language Learners',
      zincUsage: 'Vocabulary instruction for English Language Learners',
      summary:
        'Our students are being challenged to read higher-level texts, as well as to learn new vocabulary. With this practice, in many cases students have been able to provide the definitions to words that come up in our readings and share them with the class.'
    },
    {
      name: 'Dave Diem',
      profession: '8th grade English teacher',
      location: 'New York, NY',
      comment: 'Zinc is innovative, engaging and fun.',
      school: 'Diverse student-body; 25% students with special needs',
      zincUsage: 'Content area (not ELA) vocabulary instruction',
      summary:
        'It has been wonderful to see the healthy competition. Students really are motivated to go back and play multiple decks even when they’re not explicitly assigned. This never used to happen with our previous vocabulary routines.'
    },
    {
      name: 'Jean Trahant',
      profession: '6th grade ELA teacher',
      location: 'Suburban Illinois',
      comment: 'Zinc is effective, excellent and efficient.',
      school: 'Large suburban with 75-80% free and reduced lunch',
      zincUsage: 'Supplemental reading and standardized test prep',
      summary:
        'Wow! Reading levels improved based on standardized tests and lexile levels. Students were no longer afraid of taking the tests.'
    },
    {
      name: 'Julie Wright',
      profession: 'Test-Prep Tutor',
      location: 'New York, NY',
      comment: 'Zinc is empathetic, passionate, and devoted.',
      school: 'Middle and High School One-on-One Students',
      zincUsage: 'Reading supplement for private test-prep tutoring',
      summary:
        'I’ve seen many students’ [SAT/ACT] verbal scores increase after spending a few months reading the articles on the app!'
    },
    {
      name: 'Julie Swobodzinski',
      profession: '10th English Language Development, English II Teacher',
      location: 'North Carolina',
      comment: 'Zinc is challenging, relevant and engaging.',
      school: 'Urban High School',
      zincUsage: 'Vocabulary supplement to support core curriculum',
      summary:
        "Zinc helps with enriching students' vocabulary and content skills. I have seen my students learn an amazing amount of grade-level content words. My Intermediate ELLS are mastering rhetorical and figurative terms to prepare for state EOC exams. I would say that Zinc vocabulary has greatly impacted students’ content vocabulary skills, which will in turn affect their reading levels."
    },
    {
      name: 'Curtis Eccles',
      profession: '9th and 10th grade ELA with 22 years of experience',
      location: 'Washington state',
      comment: 'Zinc is exciting, knowledge and helpful.',
      school: 'Small rural',
      zincUsage: 'Standards-aligned reading and vocabulary supplement',
      summary:
        'With Zinc, we are automatically aligned! Since Zinc, our scores have increased on our state tests! The students are having more fun learning! Most importantly, ALL students are engaged!'
    },
    {
      name: 'Greg Jones',
      profession: '10th grade English teacher with 17 years of experience',
      location: 'Cincinnati, OH',
      comment: 'Zinc is stimulating, exciting, and applicable.',
      school: 'Urban high school, 99% free and reduced lunch',
      zincUsage:
        'Integrated reading and writing to supplement core curriculum and for test prep',
      summary:
        'Zinc has helped me raise my A.I.R test scores. The classroom runs smoother because the information is centrally located and the students know that on certain days just come in and start doing their Zinc work.'
    }
  ];

  constructor() {
    super();
    this.state = {
      position: 0,
      currentTestimonial: {}
    };
  }

  componentDidMount() {
    this.setState({
      currentTestimonial: this.testimonials[this.state.position]
    });
  }

  render() {
    const setPrev = () => {
      if (!(this.state.position <= 0)) {
        this.setState(
          {
            position: this.state.position - 1
          },
          () => {
            this.setState({
              currentTestimonial: this.testimonials[this.state.position]
            });
          }
        );
      }
    };

    const setNext = () => {
      if (!(this.state.position >= this.testimonials.length - 1)) {
        this.setState(
          {
            position: this.state.position + 1
          },
          () => {
            this.setState({
              currentTestimonial: this.testimonials[this.state.position]
            });
          }
        );
      }
    };

    return (
      <div className="testimonials">
        <section className="testimonials__section testimonials--bg parallax">
          <SectionTitleComponent
            subHeader={'teachers and students loved the same tool?'}
          />
          <div className="testimonials__section__content">
            <div className="user--image" />

            <div className="user--content">
              <p className="user--content__name">
                {this.state.currentTestimonial.name}
              </p>
              <p className="user--content__profession">
                {this.state.currentTestimonial.profession}
              </p>
              <p className="user--content__location">
                {this.state.currentTestimonial.location}
              </p>
              <p className="user--content__comment">
                {this.state.currentTestimonial.comment}
              </p>
              <p className="user--content__summary">
                <span>
                  <b>School/Population: </b>
                </span>
                {this.state.currentTestimonial.school}
              </p>
              <p className="user--content__summary">
                <span>
                  <b>Zinc use: </b>
                </span>
                {this.state.currentTestimonial.zincUsage}
              </p>

              <p className="user--content__summary">
                {this.state.currentTestimonial.summary}
              </p>
            </div>
          </div>
          <div className="testimonials__section__left" onClick={setPrev} />
          <div className="testimonials__section__right" onClick={setNext} />
        </section>
      </div>
    );
  }
}

export default TestimonialsComponent;
