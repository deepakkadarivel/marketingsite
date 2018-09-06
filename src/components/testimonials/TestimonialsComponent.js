import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      type: 'image',
      img: student_testimonial_1,
      id: 1
    },
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
      type: 'comment',
      toMe: 'Thorough, user-friendly, and competitive.',
      howIUse:
        "I use Zinc in a variety of ways, mainly for vocabulary. I have assigned it as homework, it has been used as a warm-up, and I always have it as an assignment posted as early-finisher work. It’s also helping me differentiate instruction, as many self-motivated students take it upon themselves to learn new words without my direction. \n  usually teach my students a set number of words per week, then assign Zinc to cover other words I know are important, but don't have time to teach. \n The reports can be run by class to see who has completed the assignments and what their performance was. With this feature, I’m able to quickly assign articles, have Zinc grade them, then enter those grades into the grade book, holding students more accountable.",
      impact:
        'Some teachers are in competition with each other over whose students are in the top ten on the leaderboard. Our students are being challenged to read higher-level texts, as well as to learn new vocabulary. With this practice, in many cases students have been able to provide the definitions to words that come up in our readings and share them with the class because they first learned the word in Zinc.'
    },
    {
      type: 'image',
      img: student_testimonial_6,
      id: 6
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
      type: 'comment',
      toMe: 'Innovative, engaging, fun.',
      howIUse:
        'We use Zinc 2-3 times a week, primarily as "Do-Nows" and as homework assignments. Each activity takes roughly 10-minutes. ',
      impact:
        'Zinc helps students stay engaged in their vocabulary instruction. It also helps us to give more immediate feedback. Our classroom has become a place where 100% of the class will engage in vocabulary instruction. Gone are the days of forcing kids to learn and review content area terms. \n It has been wonderful to see the healthy competition that comes from the class rankings. Students really are motivated to go back and play multiple decks even when they’re not explicitly assigned. This never used to happen with our previous vocabulary routines.'
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
      type: 'comment',
      toMe: 'Effective, excellent, and efficient.',
      howIUse:
        'Zinc is assigned weekly and counts towards a homework grade. At the beginning of the year students have two weeks to complete an article, and once I believe students have the hang of it, students complete an article each week.',
      impact:
        'Zinc solves the problem of students reading. Most of my students are resistant to reading anything and Zinc as homework helps. The vocabulary part of Zinc helps with standardized testing and understanding things better in other classes. Zinc has helped students improve vocabulary, and, for some, encouraged a desire to read. Parents are also supportive of Zinc. \n Due to my being excited about using Zinc and seeing the improvement with numerous students, other students began to take it seriously. Over 75% of my students will now complete their assignments. This has resulted in students being willing to read articles assigned in other classes and staying in touch with current events! Wow! Reading levels improved based on standardized tests and lexile levels. Students were no longer afraid of taking the tests. '
    },
    {
      type: 'image',
      img: student_testimonial_7,
      id: 7
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
      type: 'comment',
      toMe: 'Empathetic, passionate, and devoted.',
      howIUse:
        'I use the articles throughout my work with students (usually 3-12 months) to improve comprehension and expose students to new ideas and different styles of writing. I love the app and the company’s philosophy. \n I check the predictions students type in. They give you real insight into quality of comprehension.',
      impact:
        'I’ve seen many students’ verbal scores increase after spending a few months reading the articles on the app!Yes, I’ve seen many SAT reading scores jump up significantly after using Zinc’s app.  \n Students feel more able to read from different news sources, more willing to find new resources.'
    },
    {
      type: 'image',
      img: student_testimonial_3,
      id: 3
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
      type: 'comment',
      toMe: 'Challenging, relevant, and engaging.',
      howIUse:
        'I use Zinc for extra credit vocabulary practice to support my core curricula. It’s great for students who have completed assignments in class or as homework for students who need/want extra credit.',
      impact:
        'I have seen my students learn an amazing amount of grade-level content words. My Intermediate ELLS are mastering rhetorical and figurative terms to prepare for state EOC exams. One of my novice ESL students is ranked #34 in the top leaderboard on Zinc. He has learned 1,345 words this semester alone! I would say that Zinc vocabulary has greatly impacted students’ content vocabulary skills, which will in turn affect their reading levels. \n Using ZInc as extra credit also helps motivate the students. Some students even become competitive with each other for points or words learned.'
    },
    {
      type: 'image',
      img: student_testimonial_8,
      id: 8
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
      type: 'comment',
      toMe: 'Exciting, knowledge and helpful.',
      howIUse:
        'I use Zinc’s vocabulary and articles three times per week for 25 minutes each time. Zinc makes it easier to study for vocabulary words. It also is a great way to find interesting articles to read! In addition it aligns with the common core standards. We had to choose from different articles from a variety of different resources. We had to also find information that would align to our common core state standards. With Zinc, we are automatically aligned! \n The vocabulary is great for students to learn as all the words are aligned with the common core standards. Make sure you allow time in the classroom for students to complete the vocabulary decks along with reading the interesting articles!',
      impact:
        'Since Zinc, our scores have increased on our statndardized tests! The students are having more fun learning! Most importantly, ALL students are engaged! \n I have a student that was not interested in his learning and since Zinc, he has started to participate and has really learned and understands the importance of our vocabulary! Through reading several articles in a week and learning the vocabulary, many of our students are able to read at a faster rate through our reading circles. \n State and district tests have improved since Zinc. The program has allowed our students to improve their understandings of complex sentences and texts. Zinc is AWESOME!'
    },
    {
      type: 'image',
      img: student_testimonial_4,
      id: 4
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
      type: 'comment',
      toMe: 'stimulating, exciting, and applicable.',
      howIUse:
        'I use Zinc about twice a week, as in-class work to reinforce the topic of the unit. It helps my solve the problem of finding companion articles and topics for our thematic units.',
      impact:
        'The classroom runs smoother because the information is centrally located and the students know that on certain days just come in and start doing their Zinc work. \n Zinc has helped me raise my A.I.R test scores because Zinc mimics the way the AIR test is given. It helps my solve the problem of finding companion articles and topics for our thematic units. \n I have told, showed, and trained several colleagues on the benefits of Zinc.'
    },
    {
      type: 'image',
      img: student_testimonial_9,
      id: 9
    },
    {
      type: 'image',
      img: student_testimonial_5,
      id: 5
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
                    <Link
                      className="user--content__more"
                      to={{
                        pathname: '/testimonial',
                        state: { testimonial: this.state.currentTestimonial }
                      }}
                    >
                      {'Read More >>>'}
                    </Link>
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
