import React, { Component } from 'react';
import './testimonials.css';
import SectionTitleComponent from '../sectionTitle/SectionTitleComponent';
import Jason from '../../assets/images/users/Jason.JPG';
import dave from '../../assets/images/users/dave.png';
import Jane from '../../assets/images/users/Jane.png';
import julie from '../../assets/images/users/julie.png';
import Swobodzinski from '../../assets/images/users/Swobodzinski.png';
import Curtis from '../../assets/images/users/Curtis.png';
import Greg from '../../assets/images/users/Greg.png';
import student_testimonial_1 from '../../assets/images/testimonials/student_testimonial_1.jpg';
import student_testimonial_2 from '../../assets/images/testimonials/student_testimonial_2.jpg';
import student_testimonial_3 from '../../assets/images/testimonials/student_testimonial_3.jpg';
import student_testimonial_4 from '../../assets/images/testimonials/student_testimonial_4.jpg';
import student_testimonial_5 from '../../assets/images/testimonials/student_testimonial_5.jpg';
import student_testimonial_6 from '../../assets/images/testimonials/student_testimonial_6.jpg';
import student_testimonial_7 from '../../assets/images/testimonials/student_testimonial_7.jpg';
import student_testimonial_8 from '../../assets/images/testimonials/student_testimonial_8.jpg';
import student_testimonial_9 from '../../assets/images/testimonials/student_testimonial_9.jpg';
import student_testimonial_10 from '../../assets/images/testimonials/student_testimonial_10.jpg';

class TestimonialsComponent extends Component {
  testimonials = [
    {
      name: 'Jason Bowen',
      profession: 'Role: 8th grade English teacher',
      location: 'Location: Salinas, California',
      comment: 'Zinc is thorough, user-friendly and competitive.',
      school:
        'School/Population: 97% English Language Learners or former English Language Learners',
      zincUsage: 'Vocabulary instruction for English Language Learners',
      summary:
        'Our students are being challenged to read higher-level texts, as well as to learn new vocabulary. With this practice, in many cases students have been able to provide the definitions to words that come up in our readings and share them with the class.',
      img: Jason,
      type: 'comment'
    },
    {
      type: 'image',
      img: student_testimonial_1,
      id: 1
    },
    {
      name: 'Dave Diem',
      profession:
        'Role: 9th grade Global Studies teacher with 14 years of experience',
      location: 'Location: New York, NY',
      comment: 'Zinc is innovative, engaging and fun.',
      school: 'School/Population: Career and Technical Education (CTE)',
      zincUsage: 'Content area (not ELA) vocabulary instruction',
      summary:
        'It has been wonderful to see the healthy competition. Students really are motivated to go back and play multiple decks even when they’re not explicitly assigned. This never used to happen with our previous vocabulary routines.',
      img: dave,
      type: 'comment'
    },
    {
      type: 'image',
      img: student_testimonial_2,
      id: 2
    },
    {
      name: 'Jean Trahant',
      profession: 'Role: 6th grade ELA teacher',
      location: 'Location: Suburban Illinois',
      comment: 'Zinc is effective, excellent and efficient.',
      school:
        'School/Population: Large suburban with 75-80% free and reduced lunch',
      zincUsage: 'Supplemental reading and standardized test prep',
      summary:
        'Wow! Reading levels improved based on standardized tests and lexile levels. Students were no longer afraid of taking the tests.',
      img: Jane,
      type: 'comment'
    },
    {
      type: 'image',
      img: student_testimonial_3,
      id: 3
    },
    {
      name: 'Julie Wright',
      profession: 'Role: Test-Prep Tutor',
      location: 'Location: New York, NY',
      comment: 'Zinc is empathetic, passionate, and devoted.',
      school: 'School/Population: Middle and High School One-on-One Students',
      zincUsage: 'Reading supplement for private test-prep tutoring',
      summary:
        'I’ve seen many students’ [SAT/ACT] verbal scores increase after spending a few months reading the articles on the app!',
      img: julie,
      type: 'comment'
    },
    {
      type: 'image',
      img: student_testimonial_4,
      id: 4
    },
    {
      name: 'Julie Swobodzinski',
      profession: 'Role: 10th English Language Development, English II Teacher',
      location: 'Location: North Carolina',
      comment: 'School/Population: Urban High School',
      school: 'Urban High School',
      zincUsage: 'Vocabulary supplement to support core curriculum',
      summary:
        "Zinc helps with enriching students' vocabulary and content skills. I have seen my students learn an amazing amount of grade-level content words. My Intermediate ELLS are mastering rhetorical and figurative terms to prepare for state EOC exams. I would say that Zinc vocabulary has greatly impacted students’ content vocabulary skills, which will in turn affect their reading levels.",
      img: Swobodzinski,
      type: 'comment'
    },
    {
      type: 'image',
      img: student_testimonial_5,
      id: 5
    },
    {
      name: 'Curtis Eccles',
      profession: 'Role: 9th and 10th grade ELA with 22 years of experience',
      location: 'Location: Washington state',
      comment: 'Zinc is exciting, knowledge and helpful.',
      school: 'School/Population: Small rural',
      zincUsage: 'Standards-aligned reading and vocabulary supplement',
      summary:
        'With Zinc, we are automatically aligned! Since Zinc, our scores have increased on our state tests! The students are having more fun learning! Most importantly, ALL students are engaged!',
      img: Curtis,
      type: 'comment'
    },
    {
      type: 'image',
      img: student_testimonial_6,
      id: 6
    },
    {
      name: 'Greg Jones',
      profession:
        'Role: 10th grade English teacher with 17 years of experience',
      location: 'Location: Cincinnati, OH',
      comment: 'Zinc is stimulating, exciting, and applicable.',
      school:
        'School/Population: Urban high school, 99% free and reduced lunch',
      zincUsage:
        'Integrated reading and writing to supplement core curriculum and for test prep',
      summary:
        'Zinc has helped me raise my A.I.R test scores. The classroom runs smoother because the information is centrally located and the students know that on certain days just come in and start doing their Zinc work.',
      img: Greg,
      type: 'comment'
    },
    {
      type: 'image',
      img: student_testimonial_7,
      id: 7
    },
    {
      type: 'image',
      img: student_testimonial_8,
      id: 8
    },
    {
      type: 'image',
      img: student_testimonial_9,
      id: 9
    },
    {
      type: 'image',
      img: student_testimonial_10,
      id: 10
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
            <div className="quote--image" />

            {this.state.currentTestimonial.type === 'comment' && (
              <div className="user--content">
                <p className="user--content__summary">
                  {this.state.currentTestimonial.summary}
                </p>

                <p className="user--content__comment">
                  {this.state.currentTestimonial.comment}
                </p>
                <div className="user--content__info">
                  <div>
                    <p>{this.state.currentTestimonial.name}</p>
                    <p>{this.state.currentTestimonial.profession}</p>
                    <p>{this.state.currentTestimonial.school}</p>
                    <p>{this.state.currentTestimonial.location}</p>
                    <p className="user--content__use">
                      <span>
                        <b>Zinc use: </b>
                      </span>
                      {this.state.currentTestimonial.zincUsage}
                    </p>
                    <div className="user--content__more">Read More >>></div>
                  </div>
                  <img
                    className="user--content__info__img"
                    src={this.state.currentTestimonial.img}
                    alt={this.state.currentTestimonial.name}
                  />
                </div>
              </div>
            )}
            {this.state.currentTestimonial.type === 'image' && (
              <img
                className="student--story"
                src={this.state.currentTestimonial.img}
                alt={this.state.currentTestimonial.id}
              />
            )}
          </div>
          <div className="testimonials__section__left" onClick={setPrev} />
          <div className="testimonials__section__right" onClick={setNext} />
        </section>
      </div>
    );
  }
}

export default TestimonialsComponent;
