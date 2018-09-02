import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './grade.css';
import GradeTableComponent from '../gradeTable/GradeTableComponent';
import MS_Vocab from '../../assets/images/MS_Vocab.jpg';
import MS_CRE from '../../assets/images/MS_CRE.jpg';
import MS_articles from '../../assets/images/MS_articles.jpg';
import HS_Vocab from '../../assets/images/HS_Vocab.jpg';
import HS_CRE from '../../assets/images/HS_CRE.jpg';
import HS_articles from '../../assets/images/HS_articles.jpg';
import ELL_Vocab from '../../assets/images/ELL_Vocab.jpg';
import ELL_CRE from '../../assets/images/ELL_CRE.jpg';
import ELL_articles from '../../assets/images/ELL_articles.jpg';

class GradeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'one'
    };
  }
  render() {
    const content = {
      ms: {
        one: 'VOCABULARY',
        oneImg: MS_Vocab,
        oneAction: 'PLAY GAME',
        oneUrl: 'http://bit.ly/2P0V8Zw',
        two: 'CLOSE READING EXPERIENCE',
        twoImg: MS_CRE,
        twoAction: 'PLAY GAME',
        twoUrl: 'http://bit.ly/2Ohsd3z',
        three: 'ARTICLES',
        threeImg: MS_articles,
        threeAction: 'BROWSE',
        threeUrl: 'http://bit.ly/2NML6us',
        id: 'ms'
      },
      hs: {
        one: 'VOCABULARY',
        oneImg: HS_Vocab,
        oneAction: 'PLAY GAME',
        oneUrl: 'http://bit.ly/2w6JTrt',
        two: 'CLOSE READING EXPERIENCE',
        twoImg: HS_CRE,
        twoAction: 'PLAY GAME',
        twoUrl: 'http://bit.ly/2v8An5U',
        three: 'ARTICLES',
        threeImg: HS_articles,
        threeAction: 'BROWSE',
        threeUrl: 'http://bit.ly/2v9tAIV',
        id: 'hs'
      },
      ell: {
        one: 'VOCABULARY',
        oneImg: ELL_Vocab,
        oneAction: 'PLAY GAME',
        oneUrl: 'http://bit.ly/2MaOSgL',
        two: 'CLOSE READING EXPERIENCE',
        twoImg: ELL_CRE,
        twoAction: 'PLAY GAME',
        twoUrl: 'http://bit.ly/2lfV91s',
        three: 'ARTICLES',
        threeImg: ELL_articles,
        threeAction: 'BROWSE',
        threeUrl: 'http://bit.ly/2MsjBKv',
        id: 'ell'
      }
    };

    const selection = content[this.props.grade];

    const setSelected = selected => {
      this.setState({
        selected
      });
    };

    return (
      <div className="gradepopup">
        <div className="header">
          <GradeTableComponent
            setSelectedGrade={this.props.setSelectedGrade}
            className="grade--popup"
            grade={this.props.grade}
          />
          <div className="header__link">
            <p
              onClick={() => setSelected('one')}
              className={
                this.state.selected === 'one' ? this.props.grade : 'white'
              }
            >
              <span
                className={
                  this.state.selected === 'one' ? this.props.grade : 'green'
                }
              >
                >&nbsp;
              </span>
              {selection.one}
            </p>
            <p
              onClick={() => setSelected('two')}
              className={
                this.state.selected === 'two' ? this.props.grade : 'white'
              }
            >
              <span
                className={
                  this.state.selected === 'two' ? this.props.grade : 'green'
                }
              >
                >&nbsp;
              </span>
              {selection.two}
            </p>
            <p
              onClick={() => setSelected('three')}
              className={
                this.state.selected === 'three' ? this.props.grade : 'white'
              }
            >
              <span
                className={
                  this.state.selected === 'three' ? this.props.grade : 'green'
                }
              >
                >&nbsp;
              </span>
              {selection.three}
            </p>
            <span className="green">>&nbsp;</span>
            <a
              className="header__action"
              href={selection[`${this.state.selected}Url`]}
            >
              <p>{selection[`${this.state.selected}Action`]}</p>
              <p>&#9658;</p>
            </a>
          </div>
        </div>
        <div
          className="close"
          onClick={() => this.props.setSelectedGrade('')}
        />
        <img
          className="popup--body"
          src={selection[`${this.state.selected}Img`]}
          alt={selection.id}
        />
      </div>
    );
  }
}

GradeComponent.propTypes = {
  grade: PropTypes.string,
  setSelectedGrade: PropTypes.func
};

export default GradeComponent;
