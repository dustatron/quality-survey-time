import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { useFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

function SurveyItem(props) {
  const history = useHistory();
  const { surveyObj, dispatch } = props;
  const firestore = useFirestore();

  function handleTakeSurveyClick() {
    const action = { 
      type: "UPDATE_SELECTED",
      id: surveyObj.id,
      name: surveyObj.name,
      authorEmail: surveyObj.authorEmail,
      question1: surveyObj.question1,
      answer1: surveyObj.answer1,
      answer2: surveyObj.answer2,
      answer3: surveyObj.answer3
    }
    props.whereSurveyClicked(action);
    history.push('/submitsurvey');

  }

  

  return (
    <Card>
      <Card.Header>
        <Card.Title>{surveyObj.name} </Card.Title>
      </Card.Header>
      <Card.Body>
        <Button onClick={handleTakeSurveyClick}> Take Survey </Button>
      </Card.Body>
    </Card>
  );
}

SurveyItem.propTypes = {
  onClickingEdit: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    selectedSurvey: state.selectedSurvey
  }
}

SurveyItem = connect(mapStateToProps)(SurveyItem)

export default SurveyItem;
