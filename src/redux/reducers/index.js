import productListReducer from './productsReducers/productListReducer'
import bestProductListReducer from './productsReducers/bestProductListReducer'
import categoryListReducer from './categoriesReducers/categoryListReducer'
import cartReducer from './cartReducer'
import {combineReducers} from 'redux'
const rootReducer = combineReducers({
	productListReducer,
	categoryListReducer,
	bestProductListReducer,
	cartReducer,

})
export default rootReducer;