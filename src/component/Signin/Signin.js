import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import firebase from 'firebase/app';
import FlashMessage from './FlashMessage';

function Signin() {
  const [ successMessage, setSuccessMessage ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');

  const cardStyle = {
    marginTop: '3rem'
  };

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setSuccessMessage('successfully signed in');
        console.log('successfully signed in');
        console.log(firebase.auth().currentUser)
      })
      .catch((err) => {
        setErrorMessage(err.message);
        console.log(err.message);
      });
  }

  return (
    <React.Fragment>
      <FlashMessage successMessage={successMessage} errorMessage={errorMessage} />
      <Card style={cardStyle}>
        <Card.Title>
          <Card.Header> LogIn </Card.Header>
        </Card.Title>
        <Card.Body>
          <Form onSubmit={doSignIn}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" />
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

export default Signin;
