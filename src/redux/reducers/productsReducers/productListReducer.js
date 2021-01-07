import * as actionTypes from '../../actions/actionTypes';
import initialState from '../initialState';

export default function productListReducer(state = initialState.products, action) {
	switch (action.type) {
		case actionTypes.GET_PRODUCTS_SUCCESS:
			return action.payload;
		case actionTypes.GET_PRODUCTS_UNITPRICE_SUCCESS:
			return action.payload;
		case actionTypes.GET_ORDER_PRODUCTS_SUCCESS:
			return action.payload;
		case actionTypes.GET_SEARCH_PRODUCTS:
			console.log(state.filter(x=>x._id.includes(action.payload)))
			// const newState = state.filter(x=>{
			// 	x.productName.includes(action.payload)
			// })
			// console.log(newState);
		default:
			return state;
	}
}
