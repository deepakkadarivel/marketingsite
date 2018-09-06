import React from 'react';
import './news.css';
import { Masonry, Tile } from '../masonry/Masonry';
import SectionTitleComponent from '../sectionTitle/SectionTitleComponent';

import News_Clore_Reading_Beta from '../../assets/images/news/News_Clore_Reading_Beta.jpg';
import News_Demo_Night from '../../assets/images/news/News_Demo_Night.jpg';
import News_Dont_Ignore from '../../assets/images/news/News_Dont_Ignore.jpg';
import News_Ed_Tech_Innovation from '../../assets/images/news/News_Ed_Tech_Innovation.jpg';
import News_Education_Dive from '../../assets/images/news/News_Education_Dive.jpg';
import News_Research_Recognized from '../../assets/images/news/News_Research_Recognized.jpg';
import News_Tough_Talk from '../../assets/images/news/News_Tough_Talk.jpg';
import News_Veritas_Is_Now_Zinc from '../../assets/images/news/News_Veritas_Is_Now_Zinc.jpg';
import News_Zinc_LitLife from '../../assets/images/news/News_Zinc_LitLife.jpg';
import News_Zinc_Featured_In_District from '../../assets/images/news/News_Zinc_Featured_In_District.jpg';
import News_Zinc_Goes_Global from '../../assets/images/news/News_Zinc_Goes_Global.jpg';
import News_Zinc_In_EdTech from '../../assets/images/news/News_Zinc_In_EdTech.jpg';
import News_Zinc_Presents from '../../assets/images/news/News_Zinc_Presents.jpg';
import News_Zinc_Takes_On from '../../assets/images/news/News_Zinc_Takes_On.jpg';
import News_Zinc_Weights_In from '../../assets/images/news/News_Zinc_Weights_In.jpg';
import leap_innovations from '../../assets/images/news/leap_innovations.jpg';

let brakePoints = [750];
const newsImages = [
  {
    img: leap_innovations,
    heading: 'Zinc Is a Proud New Member of the LEAP Pilot Network',
    date: 'May 03, 2018',
    description:
      "Zinc is thrilled to have been chosen as one of twelve ed tech tools invited to join LEAP Innovation's Pilot Network. Read more about their work and the upcoming pilots here!",
    link:
      'https://www.prnewswire.com/news-releases/twelve-new-edtech-tools-make-the-cut-for-chicago-teachers-according-to-leading-education-nonprofit-300622998.html'
  },
  {
    img: News_Clore_Reading_Beta,
    heading: 'CLOSE READING EXPERIENCE BETA IS HERE',
    date: 'Febuary 5, 2018',
    description:
      'We’re excited to announce the launch of our newest literacy tool, the Zinc Close Reading Experience, which uses interactive, student-led video lessons to teach close reading with commonly taught texts like Romeo and Juliet and Dr. Martin Luther King’s “I Have a Dream” speech. Through guided practice, the feature will help students learn and/ or reinforce necessary skills for effective reading. Learn more',
    link: 'https://games.zinclearninglabs.com/r/demo/crg/passage/33'
  },
  {
    img: News_Demo_Night,
    heading: 'DEMO NIGHT IN NYC!',
    date: 'December 19, 2016',
    description:
      'Zinc was thrilled to demo at the New York Tech Alliance’s  nal event of 2016, a night devoted to innovative ed tech solutions and presented in partnership with the New York City Department of Education’s iZone. If you weren’t able to attend, but want to see what you missed, you can check out the recording',
    link: 'https://vimeo.com/196638406'
  },
  {
    img: News_Dont_Ignore,
    heading: 'DON’T IGNORE THE ELEPHANT IN THE ROOM',
    date: 'December 5, 2017',
    description:
      'Jay Willis recently interviewed Zinc’s founder, Matt Bardin, on the key element of education: literacy. “Most people think of test prep as a bunch of tricks and shortcuts and I learned pretty quickly that those don’t work. What I came to realize was a lot of it came down to how people read and think, but mostly how they read,” Matt says. Listen to the full interview'
  },
  {
    img: News_Ed_Tech_Innovation,
    heading: 'ED TECH INNOVATION',
    date: 'September 21, 2016',
    description:
      'Zinc is based in the heart of Manhattan with of ces right on Union Square, and as New Yorkers, we’re thrilled to have our programs expand into our hometown’s schools!\n' +
      'The New York City Department of Education (NYC DOE), the largest district in the nation, serves over 1 million students in nearly 2,000 schools. Given this massive reach, we’re thrilled to be part of the district’s Short Cycle Evaluation Challenge (SCEC) run through the iZone,\n' +
      'a branch of the DOE which was created to use innovation to foster personalized learn- ing and college readiness. The SCEC is one of iZone’s initia- tives that helps schools to get the right technology into their classrooms quickly through a structured 90-day pilot and supplemented with profession- al development opportunities with the iZone team and Zinc.\n' +
      'This year, we’ll be working\n' +
      'with math, history and biology teachers at Clara Barton High School in Brooklyn and English, ESL and history teachers at the Business of Sports School in Manhattan. Throughout the pi- lot, the Center for Children and Technology will collect data, which will be synthesized at the close to determine Zinc’s ef - cacy and impact. This data will also contribute to the Learning Assembly’s ed-tech-pilot tool kit, which will bene t educators around the country. The iZone SCEC is funded by the Bill and Melinda Gates Foundation.'
  },
  {
    img: News_Education_Dive,
    heading: 'EDUCATION DIVE ON ZINC’S SPRINGBOARD INTEGRATION',
    date: 'July 21, 2016',
    description:
      'Education Dive shared the scoop on Zinc and the College Board',
    link:
      'https://www.educationdive.com/press-release/20160608-college-board-and-zinc-learning-labs-integrate-innovative-reading-platform/'
  },
  {
    img: News_Research_Recognized,
    heading: 'RESEARCH RECOGNIZED',
    date: 'November 15, 2016',
    description:
      'Digital Promise, the organization known for its commitment to advancing educational innovation to strengthen learning, recently recognized Zinc for efforts to build our Reading Labs tools with a strong research foundation.\n' +
      'Zinc is unique in its combination of in-context vocabulary and diverse content - and this mix wasn’t a random decision! We chose to link these two components because research consistently shows that students need to know at least 90-95% of words in a text in order to comprehend what they’re reading. Researchers also  nd that explicit vocabulary instruction is crucial, even for secondary school students. Our experi- ences as educators con rm the importance of word and term knowledge for reading success.\n' +
      'To learn more about the adolescent literacy research upon which we based Zinc, start by checking out\n' +
      'this report from the US Department of Education’s Institute of Education Sciences'
  },
  {
    img: News_Tough_Talk,
    heading: 'TOUGH TALK ON USING TECH TO ACHIEVE ADVANCED LITERACY TODAY',
    date: 'July 31, 2017',
    description:
      'Edtech Digest recently interviewed Zinc’s founder, Matt Bardin, on his views on literacy, edtech and the future of reading. Check out the full piece',
    link: 'https://edtechdigest.blog/2017/07/20/advancing-literacy/'
  },
  {
    img: News_Veritas_Is_Now_Zinc,
    heading: 'VERITAS IS NOW ZINC!',
    date: 'August 15, 2015',
    description:
      'We’re happy to announce that Veritas Learning Labs will now be known as Zinc Learning Labs.\n' +
      'We develop digital tools to im- prove reading comprehension, because we know that reading comprehension is the secret element that makes students succeed in school, on tests and in life.\n' +
      'The mineral zinc, though unher- alded, has been used for mil- lennia to strengthen and trans- form precious metals. Zinc also plays a crucial but largely un- noticed role in the functioning of most proteins in our bodies. Over two billion people world- wide suffer from zinc de cien- cies which lead to weakness and lack of growth.\n' +
      'Nothing else is changing about our company. The Veritas URLs will re-direct.\n' +
      'Henceforth, we’ll be known as Zinc.'
  },
  {
    img: News_Zinc_LitLife,
    heading: 'ZINC & LITLIFE JOIN FORCES TO IMPROVE MIDDLE SCHOOL LITERACY',
    date: 'September 6, 2017',
    description:
      'Great lit minds think alike.\n' +
      'Zinc and LitLife, a nationally recognized organization dedicated to innovative approaches in professional development for literacy education, announced we’ll be joining efforts to achieve our shared mission of improving adolescent literacy. More on the partnership',
    link:
      'https://www.educationdive.com/press-release/20170906-litlife-adds-zinc-learning-labs-online-literacy-tools-to-boost-middle-scho/'
  },
  {
    img: News_Zinc_Featured_In_District,
    heading: 'ZINC’S FEATURED IN DIS- TRICT ADMINISTRATION',
    date: 'June 13, 2016',
    description:
      'We’re thrilled to share our exciting news with the admin community! Check out the full article'
  },
  {
    img: News_Zinc_Goes_Global,
    heading: 'ZINC GOES GLOBAL',
    date: 'July 5, 2016',
    description:
      'We’re thrilled to contribute for the second year in a row to the SAT program at the I Know I Can Summer Academies (IKIC) at Ramallah Friends School in Palestine. This program, found- ed in 2011 by Teach For Amer- ica alum and current Manager of Teacher Leadership Develop- ment, Michael Madormo, works to prepare students in the re- gion for the rigor of the SAT using a unique,  nely-craft-\n' +
      'ed approach. Speci cally, IKIC seeks not only to move scores, but also to strengthen cultural connections and build critical consciousness. Given the diver- sity of topics in Zinc’s articles and their cultural relevance, our program is a great complement to IKIC’s admirable mission. In addition, the IKIC program em- phasizes joy and teamwork as one of its three key values, a fo- cus perfectly aligned to the Zinc philosophy that learning should be fun and engaging. Through gaming components, healthy competition, and fresh, authen- tic content, we seek to keep excitement in learning - and even test prep. We’re eager to watch how IKIC students grow this summer with the support of their amazing and dedicated teachers and the Zinc tools.'
  },
  {
    img: News_Zinc_In_EdTech,
    heading: 'ZINC IN EDTECH REVIEW',
    date: 'August 1, 2016',
    description:
      'EdTechReview (ETR), the Delhi start-up for education tech- nology news and community, whom EdSurge labels as their “Indian Twin,” recently published a comprehensive Zinc review. Highlights include a reference to the program as “a great way for both educators and stu- dents to keep in a loop and work together,” and a sugges- tion that the reports allow all teachers and students, to an- alyze “weak and strong areas and work accordingly.” Check out the full review',
    link:
      'http://edtechreview.in/reviews/2456-zinc-reading-labs-to-enhance-college-ready-reading-and-thinking-skills#.V5scjjB50OU.twitter'
  },
  {
    img: News_Zinc_Presents,
    heading: 'ZINC PRESENTS AT THE 2018 ASU GSV SUMMIT',
    date: 'April 20, 2018',
    description:
      'Check out Zinc’s Founder and President, Matt Bardin, dis- cussing Zinc’s Reading Revolu- tion HERE',
    link:
      'https://www.youtube.com/watch?v=LgYXxtXZPqs&list=PLIxIt1uiA-hh2wS3lvQnHdLBu9oQjtjag&index=90#newspage042018'
  },
  {
    img: News_Zinc_Takes_On,
    heading: 'ZINC TAKES ON DISTRICT DISRUPTION',
    date: 'April 25, 2017',
    description:
      'Zinc’s experience with the\n' +
      'New York City Department of Education’s iZone led to some big insight into how districts across the country can disrupt the education technology status quo. Check out these pearls of wisdom in an EdSurge article, written by Zinc’s Director of Business Development, Colette Coleman',
    link:
      'https://www.edsurge.com/news/2017-04-15-can-a-district-disrupt-the-edtech-industry'
  },
  {
    img: News_Zinc_Weights_In,
    heading: 'ZINC WEIGHS IN ON THE NEW SAT IN US NEWS & WORLD REPORT',
    date: 'March 4, 2016',
    description:
      'The exciting shift to the new SAT is upon us! Learn more about this change and hear in- sights from Zinc’s Founder and President, Matt Bardin, a test prep expert with over 20 years of experience in this article out of US News',
    link:
      'https://www.usnews.com/news/articles/2016-03-03/the-debut-of-the-new-sat?int=a14709'
  }
];

const News = () => {
  return (
    <div className="news">
      <SectionTitleComponent
        subHeader={'YOU WERE JOINING A MEANINGFUL COMMUNITY?'}
      />
      <div className="news__container">
        <Masonry brakePoints={brakePoints}>
          {newsImages.map((image, id) => {
            return <Tile key={id} src={image} isNews={true} />;
          })}
        </Masonry>
      </div>
    </div>
  );
};

export default News;
