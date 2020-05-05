import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Redirect}  from 'react-router-dom';

function SurveySubmit(props) {
  if (props.selectedSurvey === "") {
    return <Redirect to="/takesurvey" />;
  } else {
    return (
      <div> 
        <div>
          {props.selectedSurvey.name}
        </div>
        <div>
          {props.selectedSurvey.question1}
        </div>
      </div>
      );
    }
}

SurveySubmit.propTypes = {};

const mapStateToProps = (state) => {
  return {
    selectedSurvey: state.selectedSurvey
  }
}


SurveySubmit = connect(mapStateToProps)(SurveySubmit);

export default SurveySubmit;
