import React from 'react';
import SectionTitleComponent from '../sectionTitle/SectionTitleComponent';
import './method.css';
import PropTypes from 'prop-types';

const Method = prop => {
  let text = prop.method.text.split('\n').map((i, key) => <p key={key}>{i}</p>);
  return (
    <div className={`method method--${prop.method.icon}`}>
      <div className="method__content">
        <section>
          <SectionTitleComponent subHeader={prop.method.question} />
        </section>
        <div className="method__content--body">
          <div className="method__content--body__action">
            <div className={`item ${prop.method.icon}`} />
            <p className="text">{text}</p>
          </div>
          <div className="method__content--body__info">
            <p>{prop.method.answer}</p>
            {prop.method.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </div>
          <div className={`method__content--body__image ${prop.method.img}`} />
        </div>
      </div>
    </div>
  );
};

Method.propTypes = {
  method: PropTypes.object
};

export default Method;
