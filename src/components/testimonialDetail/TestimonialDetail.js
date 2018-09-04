import React, { Component } from 'react';
import './testimonial.css';
import SectionTitleComponent from '../sectionTitle/SectionTitleComponent';
import { Link } from 'react-router-dom';

class TestimonialDetail extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { testimonial } = this.props.location.state
      ? this.props.location.state
      : {};

    let howIUse = testimonial.howIUse.split('\n').map((i, key) => (
      <div>
        <p key={key}>{i}</p>
        <br />
      </div>
    ));
    let impact = testimonial.impact.split('\n').map((i, key) => (
      <div>
        <p key={key}>{i}</p>
        <br />
      </div>
    ));

    return (
      <div className="testimonial">
        <div className="back" onClick={() => this.props.history.goBack()}>
          Back
        </div>
        <section className="testimonial__section testimonial--bg parallax">
          <SectionTitleComponent
            subHeader={'teachers and students loved the same tool?'}
          />
          <div className="testimonial__section__content">
            <div className="quote--image" />
            {this.props.location.state && (
              <div className="user--content">
                <div>
                  <p>{testimonial.name}</p>
                  <p>{testimonial.profession}</p>
                  <p>{testimonial.school}</p>
                  <p>{testimonial.location}</p>
                  <p className="user--content__use">
                    <span>
                      <b>Zinc use: </b>
                    </span>
                    {testimonial.zincUsage}
                  </p>
                </div>

                <div className="user--content__info">
                  <div className="user--content__info--detail">
                    <p className="user--content__summary">
                      <span>What Zinc is to me: </span>
                      {testimonial.toMe}
                    </p>
                    <p className="user--content__summary">
                      <span>How I use Zinc: </span>
                      {howIUse}
                    </p>
                    <p className="user--content__summary">
                      <span>Zinc’s impact: </span>
                      {impact}
                    </p>
                    <p className="user--content__summary">
                      <span>
                        Willing to chat with educators considering or new to
                        Zinc?{' '}
                      </span>
                      Yes!
                    </p>
                  </div>
                  <img
                    className="user--content__info__img"
                    src={testimonial.img}
                    alt={testimonial.name}
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default TestimonialDetail;
