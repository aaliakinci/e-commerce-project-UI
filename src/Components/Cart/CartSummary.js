import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
function CartSummary({ cart }) {
	function hasCart() {
		return (
			<ul>
				{cart.map((cartItem) => (
					<li key={cartItem.product._id}>
						{cartItem.product.productName}
						{cartItem.quantity}
					</li>
				))}
				<li>
					<Link to='/sepet'>Sepete Git </Link>
				</li>
				<li>
					<Link>Sepeti Onayla</Link>
				</li>
			</ul>
		);
	}
	function hasntCart() {
		return (	 
				<ul>
					<li>Sepette Ürün Bulunmamakta</li>
				</ul>
		);
	}
	return (
		<li className="drop-down">
			<a href="">
				<i className="bx bx-cart" style={{ fontSize: '24px' }}></i>
			</a>
			{cart.length > 0 ? hasCart() : hasntCart()}
		</li>
	);
}
const mapStateToProps = (state) => {
	return {
		cart: state.cartReducer,
	};
};
export default connect(mapStateToProps)(CartSummary);
