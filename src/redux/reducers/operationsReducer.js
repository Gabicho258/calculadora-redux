import { SET_RESULTADO } from "../constants";

const initialState = {};

const operationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULTADO:
      // return [...state, action.payload];
      return {
        resultados: action.payload,
      };
    default:
      console.log(state);
      return state;
  }
};

export default operationsReducer;
