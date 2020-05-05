import React from 'react';
import SurveyItem from './SurveyItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function SurveyList(props) {
  useFirestoreConnect([ { collection: 'surveys' } ]);
  const {dispatch} = props;

  const surveys = useSelector((state) => state.firestore.ordered.surveys);

  let renderList;

  if (isLoaded(surveys)) {
    renderList = surveys.map((a) => <SurveyItem surveyObj={a} key={a.id} whereSurveyClicked={props.onSurveyClick} />);
  } else {
    renderList = 'loading...';
  }

  return <div>{renderList}</div>;
}

SurveyList.propTypes = {
  onSurveyClick: PropTypes.func
};


export default SurveyList;
