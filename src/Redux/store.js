    import { legacy_createStore, applyMiddleware } from "redux"
import {thunk} from "redux-thunk";
import root  from './combine'

const store = legacy_createStore(root,applyMiddleware(thunk))
export default store;