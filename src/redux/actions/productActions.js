import * as actionTypes from './actionTypes';
import axios from 'axios';

export function getBestProductsSuccess(bestProducts) {
	return { type: actionTypes.GET_BEST_PRODUCT_SUCCESS, payload: bestProducts };
}
export function getProductsSuccess(products) {
	return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}
export function getProductsByBetweenUnitPriceSuccess(products) {
	return { type: actionTypes.GET_PRODUCTS_UNITPRICE_SUCCESS, payload: products };
}
export function getOrderProductsSuccess(products) {
	return { type: actionTypes.GET_ORDER_PRODUCTS_SUCCESS, payload: products };
}
export function getSearchProducts(text){
	return {type:actionTypes.GET_SEARCH_PRODUCTS,payload:text}
}

export function getOrderProducts(order) {
	return function (dispatch) {
		if (order === 'all') {
			let url = 'http://localhost:3000/products';
			axios
				.get(url)
				.then((response) => {
					const product = response.data;
					dispatch(getOrderProductsSuccess(product));
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			console.log('burdayım')
			let url = `http://localhost:3000/products/${order}`;
			axios
				.get(url)
				.then((response) => {
					const product = response.data;
					dispatch(getOrderProductsSuccess(product));
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};
}

export function getProductsByBetweenUnitPrice(lowerPrice, higherPrice) {
	return function (dispatch) {
		if (lowerPrice === '' && higherPrice !== '') {
			let url = 'http://localhost:3000/products/between';
			url = `${url}/0/${higherPrice}`;
			axios
				.post(url)
				.then((response) => {
					const products = response.data;
					dispatch(getProductsByBetweenUnitPriceSuccess(products));
				})
				.catch((err) => {
					console.log(err);
				});
		} else if (higherPrice === '' && lowerPrice !== '') {
			let url = 'http://localhost:3000/products/between';
			url = `${url}/${lowerPrice}/999999`;
			axios
				.post(url)
				.then((response) => {
					const products = response.data;
					dispatch(getProductsByBetweenUnitPriceSuccess(products));
				})
				.catch((err) => {
					console.log(err);
				});
		} else if (lowerPrice !== '' && higherPrice !== '') {
			let url = 'http://localhost:3000/products/between';
			url = `${url}/${lowerPrice}/${higherPrice}`;
			axios
				.post(url)
				.then((response) => {
					const products = response.data;
					dispatch(getProductsByBetweenUnitPriceSuccess(products));
				})
				.catch((err) => {
					console.log(err);
				});
		} else if (lowerPrice === '' && higherPrice === '') {
			let url = 'http://localhost:3000/products';
			axios
				.get(url)
				.then((response) => {
					const products = response.data;
					dispatch(getProductsByBetweenUnitPriceSuccess(products));
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};
}

export function getProducts(category) {
	return function (dispatch) {
		let url = 'http://localhost:3000/products';
		if (category) {
			url = url + '/' + category;
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
