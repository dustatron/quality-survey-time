import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import FlashMessage from './FlashMessage';
import firebase from 'firebase/app';

function Signup(props) {
  const [ successMessage, setSuccessMessage ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');

  const cardStyle = {
    marginTop: '3rem'
  };
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    // adds email and password to firebase
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function() {
        setSuccessMessage('successfully signed up!');
      })
      .catch(function(error) {
        setErrorMessage(error.message);
      });
  }
  return (
    <React.Fragment>
      <FlashMessage successMessage={successMessage} errorMessage={errorMessage} />
      <Card style={cardStyle}>
        <Card.Title>
          <Card.Header> Signup </Card.Header>
        </Card.Title>
        <Card.Body>
          <Form onSubmit={doSignUp}>
            <Form.Group controlId="SignupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" autoComplete="username"/>
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group controlId="SignupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required="required" name="password"  autoComplete="new-password"/>
            </Form.Group>
            <Form.Group controlId="PasswordConfirm">
              <Form.Label>Confirm your password</Form.Label>
              <Form.Control type="password" placeholder="Password" required="required" autoComplete="new-password"/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default Signup;
