import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Headline extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { header, desc, user } = this.props;

    if (!header) {
      return null;
    }

    return (
      <div data-test='headlineComponent'>
        <h1 data-test='header'>{header}</h1>
        <p data-test='desc'>{desc}</p>
      </div>
    );
  }
}

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  user: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lname: PropTypes.string,
      age: PropTypes.number,
      email: PropTypes.string,
      onlineStatus: PropTypes.bool
    })
  )
};

export default Headline;
