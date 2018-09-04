import React from 'react';
import './video.css';

const Video = props => {
  return (
    <div className="video">
      <video controls autoPlay src={props.src} />
    </div>
  );
};

export default Video;
