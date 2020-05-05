import React from 'react';
import PropTypes from 'prop-types';

function FlashMessage(props) {
  const err = {
    background: '#FF5733 ',
    padding: '20px',
    textAlign: 'center',
    fontSize: '25px',
    marginTop: '10px',
    fontWeight: 'bolder'
  };

  const success = {
    background: '#AFFF33',
    padding: '20px',
    textAlign: 'center',
    fontSize: '25px',
    marginTop: '10px',
    fontWeight: 'bolder'
  };

  if (props.successMessage.length > 0) {
    return <div style={success}>{props.successMessage}</div>;
  } else if (props.errorMessage.length > 0) {
    return <div style={err}>{props.errorMessage}</div>;
  } else {
    return '';
  }
}

FlashMessage.propTypes = {
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string
};

export default FlashMessage;
