import * as actionTypes from '../actions/actionTypes'


const initialState = {
  data: [],
  loading: false,
  error: false,
};
const atmReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ATM_LOADING:
      return {
        data: [],
        loading: true,
        error: false,
      };
    case actionTypes.GET_ATM_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: false,
      };
    case actionTypes.GET_ATM_FAIL:
      return {
        data: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default atmReducer;