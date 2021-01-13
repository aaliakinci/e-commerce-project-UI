import * as actionTypes from './actionTypes';


export function createOrder(order)
{
	return {type:actionTypes.CREATE_ORDER,payload:order}
}