import * as actionTypes from './actionTypes';
import axios from 'axios';

export function getBestProductsSuccess(bestProducts) {
	return { type: actionTypes.GET_BEST_PRODUCT_SUCCESS, payload: bestProducts };
}
export function getProductsSuccess (products) {
	return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}

export function getProducts(category){
  
	return function (dispatch) 
	{
		let url = 'http://localhost:3000/products';
		if(category)
		{
			url = url + '/'+category
		}
	 
			axios
				.get(url)
				.then((response) => {
					const products = response.data;
					dispatch(getProductsSuccess(products));
				
				})
				.catch((err) => {
					console.log(err);
				});
	};
}

export function getBestProducts() {
	return function (dispatch) {
		// let url = process.env.API_BASE_URL+'/products/purchaseQuantity';
		let url = 'http://localhost:3000/products/purchaseQuantity';
		return axios
			.get(url)
			.then((response) => {
				const bestProducts = response.data;
				dispatch(getBestProductsSuccess(bestProducts));
			})
			.catch((err) => {
				console.log(err);
			});
	};
}
