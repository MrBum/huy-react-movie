import {
  GET_API_REQUEST,
  GET_API_SUCCESS,
  GET_API_ERROR,
  GET_API_UP_SUCCESS,
} from "./constant";
export const initState = {
  loading: false,
  data: [],
  error: null,
};

function Reducer(state, action) {
  switch (action.type) {
    case GET_API_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_API_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };

    case GET_API_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      throw new Error(action.type + " is not supported");
  }
}

export default Reducer;
