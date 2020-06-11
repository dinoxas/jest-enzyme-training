import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class SharedButton extends Component {
  submitEvent() {
    if (this.props.emitEvent) {
      this.props.emitEvent();
    }
  }
  render() {
    const { buttonText } = this.props;

    return (
      <button
        className='button'
        type='button'
        data-test='sharedButtonComponent'
        onClick={() => this.submitEvent()}
      >
        {buttonText}
      </button>
    );
  }
}

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
};

export default SharedButton;
