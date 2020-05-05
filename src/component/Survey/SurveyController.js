import React from 'react';
import PropTypes from 'prop-types';
import SurveyCreate from './SurveyCreate';
import SurveyEdit from './SurveyEdit';
import SurveyList from './SurveyList';
import SurveySubmit from './SurveySubmit';
import { connect } from 'react-redux';
import { withFirestore, isLoaded } from 'react-redux-firebase';

function SurveyController(props) {
  const handleUpdateSelectedSurvey = (id) => {};
  const auth = props.firebase.auth();
  if (!isLoaded(auth)) {
    return (
      <React.Fragment>
        <h1>Loading...</h1>
      </React.Fragment>
    );
  }
  if (isLoaded(auth) && auth.currentUser == null) {
    return (
      <React.Fragment>
        <h1>You must be signed in to make and take surveys.</h1>
      </React.Fragment>
    );
  }
  if (isLoaded(auth) && auth.currentUser != null) {
    return (
      <div>
        Survey Controller Components
        <SurveyList />
        <SurveyCreate />
        <SurveyEdit />
        <SurveySubmit />
      </div>
    );
  }
}

SurveyController.propTypes = {};
const mapStateToProps = (state) => {
  return state;
};

// eslint-disable-next-line
SurveyController = connect(mapStateToProps)(SurveyController);
export default withFirestore(SurveyController);
