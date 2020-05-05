import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import selectedSurveyReducer from './selected-survey-reducer';

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  selectedSurvey: selectedSurveyReducer
});

export default rootReducer;
