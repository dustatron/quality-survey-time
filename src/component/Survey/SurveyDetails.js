import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import SurveyItem from './SurveyItem';
import { useFirestore } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

function SurveyDetails(props) {
  const { name, authorEmail, question1, answer1, answer2, answer3, id} = props.selectedSurvey;

  const history = useHistory();

  const firestore = useFirestore();

  function onClickingEdit() {
    console.log('edit button click');
  }

  function deleteSurvey() {
    firestore.delete({ collection: 'surveys', doc: id });
    history.push('/');
  }

  return (
    <React.Fragment>
      <Card>
        <Card.Title>
          <Card.Header><h1>Survey Details</h1></Card.Header>
        </Card.Title>
        <Card.Body>
          <p>Survey Title: {name}</p>
          <p>Created By: {authorEmail}</p>
          <p>Question 1: {question1} </p>
          <p>Answer 1: {answer1} </p>
          <p>Answer 2: {answer2} </p>
          <p>Answer 3: {answer3} </p>
        </Card.Body>

        <Button onClick={deleteSurvey} variant="danger">
          Delete
        </Button>
        
          <Button variant="info" onClick={onClickingEdit}>
            <Link to="/editsurvey">
              Edit
            </Link>
          </Button>
        
      </Card>
    </React.Fragment>
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

SurveyDetails = connect(mapStateToProps)(SurveyDetails)

export default SurveyDetails;
