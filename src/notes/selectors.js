import { getNotes } from '../selectors';

export const getNotelist = state => getNotes(state).list;
