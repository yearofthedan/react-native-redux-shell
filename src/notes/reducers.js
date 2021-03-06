import { combineReducers } from 'redux';

const defaultState = [
  { title: 'Title the first' },
  { title: 'Title the second' },
  { title: 'Title the third' },
];

const list = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  list,
});
