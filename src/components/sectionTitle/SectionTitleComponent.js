import React from 'react';
import './sectionTitle.css';
import PropTypes from 'prop-types';

const SectionTitleComponent = props => {
  return (
    <div className="section">
      <p className="section__header">
        what <span>if</span>
      </p>
      <p className="section__sub-header">{props.subHeader}</p>
      <p className="section__content">{props.content}</p>
    </div>
  );
};

SectionTitleComponent.propTypes = {
  subHeader: PropTypes.string.isRequired,
  content: PropTypes.string
};

export default SectionTitleComponent;
