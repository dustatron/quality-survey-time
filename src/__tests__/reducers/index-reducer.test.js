import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import selectedSurveyReducer from '../../reducers/selected-survey-reducer';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  test('Check that initial state of selectedSurveyReducer matches root reducer', () => {
    expect(store.getState().selectedSurvey).toEqual(selectedSurveyReducer(undefined, { type: null }));
  });

  //rootReducer.selectedSurvey === selectedSurveyReducer
  test('Check that the result of the root reducer equal the result of the selectedSurvey reducer', () => {
    const currentState = { 1: { name: 'dan', question1: 'q1', answer1: 'a1', answer2: 'a2', answer3: 'a3' } };

    const action = {
      type: 'UPDATE_SELECTED',
      id: 1,
      name: 'dan',
      question1: 'q1',
      answer1: 'a1',
      answer2: 'a2',
      answer3: 'a3'
    };
    store.dispatch(action);
    expect(store.getState().selectedSurvey).toEqual(selectedSurveyReducer(undefined, action));
  });
});
