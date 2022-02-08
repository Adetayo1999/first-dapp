import { createStore, combineReducers } from "redux";
import accountReducer from "./accountReducer";

const rootReducer = combineReducers({
  accountReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
