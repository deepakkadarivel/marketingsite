import React from 'react';
import './sectionTitle.css';
import PropTypes from 'prop-types';

const SectionTitleComponent = props => {
  let subHeader = props.subHeader
    .split('\n')
    .map((i, key) => <p key={key}>{i}</p>);
  return (
    <div className="section">
      <p className="section__header">
        what <span>if</span>
      </p>
      <p className="section__sub-header">{subHeader}</p>
      <p className={`section__content ${props.className}`}>{props.content}</p>
    </div>
  );
};

SectionTitleComponent.propTypes = {
  subHeader: PropTypes.string.isRequired,
  className: PropTypes.string
};

SectionTitleComponent.defaultProps = {
  content: ''
};

export default SectionTitleComponent;
