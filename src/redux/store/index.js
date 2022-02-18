import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import operationsReducer from "../reducers/operationsReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = combineReducers({
  operationsReducer,
});

const appStore = createStore(
  store,
  composeWithDevTools(applyMiddleware(thunk))
);

export default appStore;
