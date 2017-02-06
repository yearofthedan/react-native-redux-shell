import { combineReducers } from 'redux';
import { reducers } from './notes';
export default combineReducers({
  notes: reducers,
});
