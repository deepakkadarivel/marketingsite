import React from 'react';
import './video.css';

const Video = props => {
  return (
    <div className="video">
      <iframe
        className="player"
        type="text/html"
        width="100%"
        height="100%"
        src={props.src}
        frameborder="0"
      />
    </div>
  );
};

export default Video;
