import productListReducer from './productsReducers/productListReducer'
import bestProductListReducer from './productsReducers/bestProductListReducer'
import categoryListReducer from './categoryListReducer'
import {combineReducers} from 'redux'
const rootReducer = combineReducers({
	productListReducer,
	categoryListReducer,
	bestProductListReducer,
})
export default rootReducer;