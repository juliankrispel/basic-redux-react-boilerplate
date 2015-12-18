import {handleActions} from 'redux-actions';
import {ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM} from 'app/constants';

export default handleActions({
  [ADD_ITEM](state, action) {
    return state.concat([action.payload]);
  },

  [REMOVE_ITEM](state, action) {
    return state.filter((item, index) => index !== action.payload);
  },

  [UPDATE_ITEM](state, action) {
    return state.map((item, index) => {
      if(index === action.payload.index) {
        return Object.assign({}, item, {value: action.payload.value});
      }
      return item;
    });
  },
}, []);
