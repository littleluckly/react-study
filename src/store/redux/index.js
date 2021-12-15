import { createStore, applyMiddleware } from "redux";
import count_reducer from "./count_reducer";
import thunk from "redux-thunk";
const store = createStore(count_reducer, applyMiddleware(thunk));

export default store;
