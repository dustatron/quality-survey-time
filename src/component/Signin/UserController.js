import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SignIn from './Signin';
import SignUp from './SignUp';
import SignOut from './SignOut';
import { connect } from 'react-redux';
import { withFirestore, isLoaded } from 'react-redux-firebase';

function UserController(props) {
  if (isLoaded(auth) && auth.currentUser == null) {
    return <SignIn />;
  } else if (isLoaded(auth) && auth.currentUser != null) {
    return <SignOut />;
  }
}

export default withFirestore(UserController);
