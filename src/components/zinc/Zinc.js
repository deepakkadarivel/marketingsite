import React, { Component } from 'react';
import './zinc.css';
import { Masonry, Tile } from '../masonry/Masonry';
import SectionTitleComponent from '../sectionTitle/SectionTitleComponent';

import tweet_Andy_Meyers from '../../assets/images/tweet/tweet_Andy_Meyers.jpg';
import tweet_Bess_McNamara_Dahmash from '../../assets/images/tweet/tweet_Bess_McNamara_Dahmash.jpg';
import tweet_Calesta_Mueller from '../../assets/images/tweet/tweet_Calesta_Mueller.jpg';
import tweet_Daly_TBK8 from '../../assets/images/tweet/tweet_Daly_TBK8.jpg';
import tweet_Daly_TBK8_2 from '../../assets/images/tweet/tweet_Daly_TBK8_2.jpg';
import tweet_Daly_TBK8_3 from '../../assets/images/tweet/tweet_Daly_TBK8_3.jpg';
import tweet_Kim_Ponderfl from '../../assets/images/tweet/tweet_Kim_Ponderfl.jpg';
import tweet_Kim_Ponderfl_2 from '../../assets/images/tweet/tweet_Kim_Ponderfl_2.jpg';
import tweet_Rithy_Som from '../../assets/images/tweet/tweet_Rithy_Som.jpg';
import tweet_Rithy_Som_2 from '../../assets/images/tweet/tweet_Rithy_Som_2.jpg';
import tweet_Stefan_Troutman from '../../assets/images/tweet/tweet_Stefan_Troutman.jpg';
import tweet_Sylvia_Ellison from '../../assets/images/tweet/tweet_Sylvia_Ellison.jpg';

let brakePoints = [750];
let zincImages = [
  { img: tweet_Calesta_Mueller },
  { img: tweet_Stefan_Troutman },
  { img: tweet_Rithy_Som },
  { img: tweet_Kim_Ponderfl },
  { img: tweet_Rithy_Som_2 },
  { img: tweet_Andy_Meyers },
  { img: tweet_Kim_Ponderfl_2 },
  { img: tweet_Sylvia_Ellison },
  { img: tweet_Daly_TBK8 },
  { img: tweet_Daly_TBK8_2 },
  { img: tweet_Daly_TBK8_3 },
  { img: tweet_Bess_McNamara_Dahmash }
];

class Zinc extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="zinc">
        <SectionTitleComponent
          subHeader={"YOU DIDN'T HAVE TO TAKE OUR WORD?"}
        />
        <div className="news__container">
          <Masonry brakePoints={brakePoints}>
            {zincImages.map((image, id) => {
              return <Tile key={id} src={image} />;
            })}
          </Masonry>
        </div>
      </div>
    );
  }
}

export default Zinc;
