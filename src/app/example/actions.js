import {createAction} from 'redux-actions';
import {ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM} from 'app/constants';

export const addItem = createAction(ADD_ITEM, ()=> {
  return {
    value: 'New Item',
  };
});

export const removeItem = createAction(REMOVE_ITEM);

export const updateItem = createAction(UPDATE_ITEM, (index, value)=> {
  return { index, value }
});
