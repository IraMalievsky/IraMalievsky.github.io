import initState from "./initState";
import { SET_CATEGORY_FILTER } from '../actions/actionTypes';

const categoryReducer = (state = initState.categoryFilter, action) => {
    switch (action.type) {
      case SET_CATEGORY_FILTER:
        return action.payload;
        default:
          return state;
    }
  }

  export default categoryReducer;