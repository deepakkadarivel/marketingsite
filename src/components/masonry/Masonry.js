import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './masonry.css';

class Masonry extends Component {
  constructor(props) {
    super(props);
    this.state = { columns: 1 };
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  getColumns(w) {
    return (
      this.props.brakePoints.reduceRight((p, c, i) => {
        return c < w ? p : i;
      }, this.props.brakePoints.length) + 1
    );
  }

  onResize() {
    const columns = this.getColumns(
      this.refs.Masonry ? this.refs.Masonry.offsetWidth : ''
    );
    if (columns !== this.state.columns) {
      this.setState({ columns: columns });
    }
  }

  mapChildren() {
    let col = [];
    const numC = this.state.columns;
    for (let i = 0; i < numC; i++) {
      col.push([]);
    }
    return this.props.children.reduce((p, c, i) => {
      p[i % numC].push(c);
      return p;
    }, col);
  }

  render() {
    return (
      <div className="masonry" ref="Masonry">
        {this.mapChildren().map((col, ci) => {
          return (
            <div className="column" key={ci}>
              {col.map((child, i) => {
                return <div key={i}>{child}</div>;
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

const Tile = ({ src, isNews = false }) => {
  return (
    <div className="tile">
      <img src={src.img} />
      {isNews && (
        <div>
          <p className="tile__heading">{src.heading}</p>
          <p className="tile__date">{src.date}</p>
          <p className="tile__description">{src.description}</p>
          {src.link && (
            <a href={src.link} className="tile__more" target="_blank">
              More
            </a>
          )}
        </div>
      )}
    </div>
  );
};

Masonry.propTypes = {
  brakePoints: PropTypes.array
};

export { Masonry, Tile };
