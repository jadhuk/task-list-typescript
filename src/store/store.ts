import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import listReducer from "./reducers/listReducer";
import notifReducer from "./reducers/notifReducer";

const rootReducer = combineReducers({
  list: listReducer,
  notification: notifReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>;

export default store;
