import React from 'react';
import './about.css';
import SectionTitleComponent from '../sectionTitle/SectionTitleComponent';

const About = () => {
  return (
    <div className="about">
      <SectionTitleComponent
        subHeader={'YOU HAD A PARTNER IN STUDENT SUCCESS?'}
      />
      <div className="about__content">
        <p>
          Picture this: It’s the period right after lunch, the bell to start
          class just rang, and a room full of 10th graders is sitting in
          complete silence, eyes glued to their screens. No, they’re not
          watching the latest Logan Paul video on YouTube. They’re reading—and
          not a graphic novel, scores from the game or text messages. They’re
          reading—and understanding—articles from top sites around the web that
          we adults who love to read visit regularly.{' '}
        </p>
        <br />
        <p>
          When it’s time to stop reading these educational, thought-provoking
          and mind-opening articles, there are loud groans of disappointment.
          These teens actually want more time to read!*
        </p>
        <br />
        <p>
          This scene isn’t a pipe dream, but a reality in classes using Zinc
          today.{' '}
        </p>
        <br />
        <p>
          We at Zinc are passionate about creating a world where all students
          love to read and have the skills to do so successfully, and our online
          tools are making this mission a reality. We’re a team of former and
          current educators passionate about the power of advanced literacy and
          students’ right to an education that equips them with it.
        </p>
        <br />
        <h4>
          * Based on the following quote from teacher/Zinc user Susan Van Doren:
        </h4>
        <p>
          <i>
            I use Zinc as a warm-up with my students for the first 10-15 minutes
            of class. Even with the rambunctious after-lunch class, time on Zinc
            calms the kids down and gets them into student mode. The room gets
            so quiet that you can hear a pin drop. When it's time to move on
            from Zinc to the main lesson, I almost don't want to interrupt - I
            feel like I'm having to wake a sleeping baby. When I do tell them
            that Zinc time is over, I hear loud groans of disappointment: they
            actually want more time to read and study vocabulary!
          </i>
        </p>
      </div>
    </div>
  );
};

export default About;
