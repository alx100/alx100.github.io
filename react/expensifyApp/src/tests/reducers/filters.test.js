import moment from 'moment';
import filtersRducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersRducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersRducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersRducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const text = 'My text'
  const action = { 
    type: 'SET_TEXT_FILTER',
    text    
  };
  const state = filtersRducer(undefined, action);
  expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
  const startDate =  moment(0);  
  const action = { 
    type: 'SET_START_DATE',
    startDate
  };
  const state = filtersRducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
  const endDate = moment(0);
  const action = { 
    type: 'SET_END_DATE',
    endDate    
  };
  const state = filtersRducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
