import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function cartReducer(state = initialState.cart,action){
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			const addedItem=state.find(x=>x.product._id===action.payload.product._id);
			if(addedItem)
			{
				const newState = state.map(cartItem=>{
					if(cartItem.product._id===action.payload.product._id)
					{
						return Object.assign({},addedItem,{quantity:addedItem.quantity+1})
					}
					return cartItem;
				})
				return newState;
			}	
			else{
		 
					return[...state,{...action.payload}]
			}

		default:
		return	state;
	}
}