import selectSurveyReducer from '../../reducers/selected-survey-reducer';

describe('selectSurveyReducer', () => {
  test('Should return default state if no action type is passed to the reducer', () => {
    expect(selectSurveyReducer('', { type: null })).toEqual('');
  });

  test('Should successfully set selectedSurvey', () => {
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

    expect(selectSurveyReducer(currentState, action)).toEqual({
      name: 'dan',
      question1: 'q1',
      answer1: 'a1',
      answer2: 'a2',
      answer3: 'a3',
      id: 1
    });
  });
});
