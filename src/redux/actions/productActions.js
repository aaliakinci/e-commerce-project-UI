import * as actionTypes from './actionTypes'
import axios from 'axios'

export function getBestProductsSuccess(bestProducts)
{
	return {type:actionTypes.GET_BEST_PRODUCT_SUCCESS,payload:bestProducts};
}



export function getBestProducts()
{
	return  function(dispatch)
	{
		// let url = process.env.API_BASE_URL+'/products/purchaseQuantity';
		let url = 'http://localhost:3000/products/purchaseQuantity'
		  return axios.get(url).then((response)=>{
			const bestProducts=response.data;
		}).then((data)=>{
			dispatch(getBestProductsSuccess(data))
		}).catch((err)=>{
			console.log(err);
		})
	}
}