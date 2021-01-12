import productListReducer from './productsReducers/productListReducer'
import bestProductListReducer from './productsReducers/bestProductListReducer'
import categoryListReducer from './categoriesReducers/categoryListReducer'
import cartReducer from './cartReducer'
import userLoginRegisterReducer from './userReducers/userLoginRegisterReducer'
import userOperationsReducer from './userReducers/userOperationsReducer'
import {combineReducers} from 'redux'
const rootReducer = combineReducers({
	productListReducer,
	categoryListReducer,
	bestProductListReducer,
	cartReducer,
	userLoginRegisterReducer,
	userOperationsReducer
})
export default rootReducer;