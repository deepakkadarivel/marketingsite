import React from 'react';
import HeaderComponent from '../header/HeaderComponent';
import StepperComponent from '../stepper/StepperComponent';
import ChartComponent from '../chart/ChartComponent';
import TestimonialsComponent from '../testimonials/TestimonialsComponent';
import SpacerComponent from '../spacer/SpacerComponent';

import ZIA_Main_Page_interactive_close_reading_instruction_grab from '../../assets/images/spacers/ZIA_Main_Page_interactive_close_reading_instruction_grab.jpg';
import ZIA_Main_Page_leveled_real_world_texts_grab from '../../assets/images/spacers/ZIA_Main_Page_leveled_real_world_texts_grab.jpg';
import ZIA_Main_Page_SAT_prep_Vocab_5th_grade_grab from '../../assets/images/spacers/ZIA_Main_Page_SAT_prep_Vocab_5th_grade_grab.jpg';
import ZIA_Main_Page_student_performance_data_grab from '../../assets/images/spacers/ZIA_Main_Page_student_performance_data_grab.jpg';

const Home = () => {
  const methods = {
    contentSubHeader: 'all your literacy needs were in one place?',
    headers: [
      '',
      'Zinc',
      'Typical vocabulary program',
      'Typical reading program'
    ],
    rows: [
      {
        title: 'Vocabulary instruction',
        zincProg: true,
        vocabProgram: true,
        readingProg: false
      },
      {
        title: 'Spaced repetition of new words',
        zincProg: true,
        vocabProgram: true,
        readingProg: false
      },
      {
        title: 'Authentic, unaltered text from the "real world"',
        zincProg: true,
        vocabProgram: false,
        readingProg: false
      },
      {
        title: 'Text at a variety of levels',
        zincProg: true,
        vocabProgram: false,
        readingProg: true
      },
      {
        title: 'Gaming elements',
        zincProg: true,
        vocabProgram: true,
        readingProg: false
      },
      {
        title: 'Test prep',
        zincProg: true,
        vocabProgram: false,
        readingProg: false
      },
      {
        title: 'Close reading instruction',
        zincProg: true,
        vocabProgram: false,
        readingProg: false
      },
      {
        title: 'Detailed reporting',
        zincProg: true,
        vocabProgram: true,
        readingProg: true
      }
    ],
    type: 'methods'
  };

  const closeReading = {
    contentSubHeader: 'students had personalized close reading instruction?',
    headers: ['What Zinc Close Reading offers', 'HOW IT WORKS'],
    rows: [
      {
        title: 'Personalized learning',
        content:
          'Choose from lessons on fiction, non-fiction and poetry with a variety of reading levels, from 4th grade to post-secondary.'
      },
      {
        title: 'Explicit instruction',
        content:
          'Learn and then strengthen the skills that make strong readers enjoy reading, turning the words into meanings and appreciating the writer’s talents.'
      },
      {
        title: 'Engagement',
        content:
          'High school students and young adults present video lessons, and students interact with input from peers.'
      },
      {
        title: 'Scaffolding',
        content:
          'Students work at their own pace. When they make mistakes, hints and support guide them to the right answer and full comprehension.'
      }
    ],
    type: 'readings'
  };
  return (
    <div>
      <HeaderComponent />
      <StepperComponent />
      <SpacerComponent
        action={'STUDENT PERFORMANCE DATA'}
        img={ZIA_Main_Page_interactive_close_reading_instruction_grab}
        name={'performance'}
      />
      <ChartComponent data={methods} />
      <SpacerComponent
        action={'“LEVELED, “REAL WORLD” TEXTS'}
        img={ZIA_Main_Page_leveled_real_world_texts_grab}
        name={'performance'}
      />
      <ChartComponent data={closeReading} />
      <SpacerComponent
        action={'INTERACTIVE CLOSE READING INSTRUCTION'}
        img={ZIA_Main_Page_SAT_prep_Vocab_5th_grade_grab}
        name={'performance'}
      />
      <TestimonialsComponent />
      <SpacerComponent
        action={'SAT PREP: VOCABULARY - 5TH GRADE'}
        img={ZIA_Main_Page_student_performance_data_grab}
        name={'performance'}
      />
    </div>
  );
};

export default Home;
