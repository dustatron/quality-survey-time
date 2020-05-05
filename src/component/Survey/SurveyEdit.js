import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";


function SurveyEdit(props) {
  const history = useHistory();
  const { selectedSurvey, dispatch } = props;
  const firestore = useFirestore();
  // const surveys = useFirestore().collection('surveys');

  function updateSurveyInFirestore(event) {
    event.preventDefault();
    // props.onEditSurvey();
    const propertiesToUpdate = {
      name: event.target.name.value,
      question1: event.target.question1.value,
      answer1: event.target.answer1.value,  
      answer2: event.target.answer2.value,
      answer3: event.target.answer3.value
    };
    history.push('/surveydetails');
    const action = {type: 'UPDATE_SELECTED', id: selectedSurvey.id, ...propertiesToUpdate}
    dispatch(action);
    return firestore.update({collection: 'surveys', doc: selectedSurvey.id}, propertiesToUpdate);
  }

  return (
    <div>
      <h1> EDIT FORM </h1>
      <Form onSubmit={updateSurveyInFirestore}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Survey Name" defaultValue={selectedSurvey.name}/>
          <Form.Text className="text-muted">Survey Name</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicQuestion">
          <Form.Label>Question 1</Form.Label>
          <Form.Control type="text" name="question1" placeholder="Question" defaultValue={selectedSurvey.question1}/>
        </Form.Group>

        <Form.Group controlId="formBasicQuestion">
          <Form.Label>answer1</Form.Label>
          <Form.Control type="text" name="answer1" placeholder="Answer option" defaultValue={selectedSurvey.answer1}/>
        </Form.Group>
        <Form.Group controlId="formBasicQuestion">
          <Form.Label>answer2</Form.Label>
          <Form.Control type="text" name="answer2" placeholder="Answer option" defaultValue={selectedSurvey.answer2}/>
        </Form.Group>
        <Form.Group controlId="formBasicQuestion">
          <Form.Label>answer3</Form.Label>
          <Form.Control type="text" name="answer3" placeholder="Answer option" defaultValue={selectedSurvey.answer3}/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

SurveyEdit.propTypes = {
  onEditSurvey: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    selectedSurvey: state.selectedSurvey
  }
}

SurveyEdit = connect(mapStateToProps)( SurveyEdit);

export default SurveyEdit;
