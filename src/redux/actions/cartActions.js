import * as actionTypes from './actionTypes';




export function addToCart(cartItem)
{
	return {type:actionTypes.ADD_TO_CART,payload:cartItem}
}

export function removeToCart(cartItem)
{
	return {type:actionTypes.REMOVE_TO_CART,payload:cartItem}
}
export function incrementQuantity(cartItem)
{
	return {type:actionTypes.INCREMENT_QUANTİTY,payload:cartItem}
}
export function decrementQuantity(cartItem)
{
	return {type:actionTypes.DECREMENT_QUANTİTY,payload:cartItem}
}