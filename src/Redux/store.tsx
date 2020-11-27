import { createStore } from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';
import { rootReducer } from "./Reducers";

export default createStore(rootReducer, devToolsEnhancer({}));
