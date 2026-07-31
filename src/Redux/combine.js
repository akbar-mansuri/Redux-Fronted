import {combineReducers} from 'redux'
import Reducers from './reducer';


const root =combineReducers({
    products:Reducers,
})

export default root;