import React from 'react';
import './spacer.css';

const SpacerComponent = props => {
  return (
    <div className="spacer">
      <div className="spacer__header">
        <p className="spacer__header__action-type">
          ZINC IN ACTION &nbsp; &nbsp; &nbsp; &nbsp;| &nbsp; &nbsp; &nbsp;
          &nbsp;
        </p>
        <p className="spacer__header__action">{props.action}</p>
      </div>
      <img className="spacer__img" src={props.img} alt={props.name} />
    </div>
  );
};

export default SpacerComponent;
