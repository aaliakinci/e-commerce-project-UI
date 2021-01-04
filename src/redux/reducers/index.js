import productListReducer from './productListReducer'
import {combineReducers} from 'redux'
const rootReducer = combineReducers({
	productListReducer,
})
export default rootReducer;