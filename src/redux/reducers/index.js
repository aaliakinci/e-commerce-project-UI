import productListReducer from './productsReducers/productListReducer'
import bestProductListReducer from './productsReducers/bestProductListReducer'
import categoryListReducer from './categoriesReducers/categoryListReducer'
import changeCategoryReducer from './categoriesReducers/changeCategoryReducer'
import cartReducer from './cartReducer'
import {combineReducers} from 'redux'
const rootReducer = combineReducers({
	productListReducer,
	categoryListReducer,
	bestProductListReducer,
	cartReducer,
	changeCategoryReducer 
})
export default rootReducer;