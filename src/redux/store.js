import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from "./reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  user: userReducer,
});

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const store = createStore(rootReducer, bindMiddleware([thunk]));
