import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function cartReducer(state = initialState.cart, action) {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			const addedItem = state.find((x) => x.product._id === action.payload.product._id);
			if (addedItem) {
				const newState = state.map((cartItem) => {
					if (cartItem.product._id === action.payload.product._id) {
						return Object.assign({}, addedItem, { quantity: addedItem.quantity + 1 });
					}
					return cartItem;
				});
				return newState;
			} else {
				return [...state, { ...action.payload }];
			}
		case actionTypes.INCREMENT_QUANTİTY:
			const incItem = state.find((x) => x.product=== action.payload.product)
			if(incItem)
			{
				const incrementedState=state.map((x)=>{
					if(x.product===action.payload.product)
					{
						return Object.assign({}, incItem, { quantity: incItem.quantity + 1 })
					}
					return x;
				}); 
				return incrementedState;
			}else{
				return state;
			}
			
		case actionTypes.DECREMENT_QUANTİTY:
			const decItem = state.find((x) => x.product=== action.payload.product)
			if(decItem)
			{
				if(decItem.quantity>1)
				{
					const decrementedState=state.map((x)=>{
						if(x.product===action.payload.product)
						{
							return Object.assign({}, decItem, { quantity: decItem.quantity - 1 })
						}
						return x;
					}); 
					return decrementedState;
				}
				return state;	
			}
			else{
				return state;
			}
		default:
			return state;
	}
}
