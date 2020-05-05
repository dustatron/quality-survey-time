import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useFirestoreConnect, isEmpty, firestore, useFirestore, withFirestore, isLoaded } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import firebase from 'firebase/app';


function Dashboard(props) {
  
  const surveys = useSelector(state => state.firestore.ordered.surveys)
  const auth = firebase.auth();
  let renderList;

  if (isLoaded(surveys) && isLoaded(auth) && auth.currentUser != null) {
    var user = auth.currentUser;
    
    renderList = surveys.filter((item) => { return item.authorId === user.uid } ).map((a) => 
    <Link onClick={() => {handleSurveyClick(a)}} to='surveydetails' id={a.id} key={a.id} title={a.name}>
      <li>{a.name}</li>
      </Link>);
  } else {
    renderList = 'loading...';
  }
  
  function handleSurveyClick(surveyObj) {
    const action = { 
      type: "UPDATE_SELECTED",
      id: surveyObj.id,
      authorEmail: surveyObj.authorEmail,
      name: surveyObj.name,
      question1: surveyObj.question1,
      answer1: surveyObj.answer1,
      answer2: surveyObj.answer2,
      answer3: surveyObj.answer3
    }
    props.onSurveySelect(action)
  }

  useFirestoreConnect([
    { collection: 'surveys' }
  ])

  // const userSurveys = surveys.where('userName', '==', 'thisUser' );


  function deleteSurvey(id) {
    console.log('delete clicked')
    // firestore.delete({ collection: 'surveys', doc: id });
  }



  return (
    <React.Fragment>
      <h1>Your Dashboard</h1>
      <Row>
        <Col>
          <Card>
            <Card.Title>Surveys You've Created</Card.Title>
            <Card.Body>
              {renderList}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Title>Surveys You've Taken</Card.Title>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Dashboard;
