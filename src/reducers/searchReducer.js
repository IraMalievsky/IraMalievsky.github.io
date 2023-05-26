import initState from "./initState";
import { FETCH_ARTICLES_START, RECEIVE_ARTICLES, FETCH_ARTICLES_ERROR } from "../actions/actionTypes";

const searchReducer = (state = initState.searchResults, action) => {
    switch (action.type) {
      case FETCH_ARTICLES_START:
        return {
          ...state,
          loading: true
        };
      case RECEIVE_ARTICLES:
        return {
          ...state,
          loading: false,
          receivedArt: action.payload,
          error: ''
        };
      case FETCH_ARTICLES_ERROR:
        return {
          ...state,
          loading: false,
          receivedArt: [],
          error: action.payload
        }
        default:
          return state;
    }
  }

  export default searchReducer;