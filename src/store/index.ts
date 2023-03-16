import { combineReducers, createStore } from "redux";

import { userReducer } from "./users";

const rootReducer = combineReducers({
  users: userReducer,
});

const store = createStore(rootReducer);

export default store;

export type IRootState = ReturnType<typeof store.getState>;

export type IAppDispatch = typeof store.dispatch;
