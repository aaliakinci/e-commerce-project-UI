import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
function CartSummary({ cart }) {
	function hasCart() {
		return (
			<ul>
				<li className="my-1 d-flex justify-content-around">
					<span>Ürün</span>
					<span>Miktar</span>
				</li>
				{cart.map((cartItem) => (
					<li className="my-1 border border-right-0 border-left-0 d-flex justify-content-around" key={cartItem.product._id}>
						<span className="">{cartItem.product.productName}</span>
						<span>{cartItem.quantity}</span>
					</li>
				))}
				<li className="my-1 d-flex justify-content-around">
					<span className="mx-1 my-2 badge badge-sm badge-info "><Link to='/sepet'>Sepete Git </Link></span>
					<span className="mx-1 my-2 badge badge-success"><Link to='/siparis'>Sepeti Onayla</Link></span>
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
			<Link to='/sepet'>
				<i className="bx bx-cart" style={{ fontSize: '28px' }}></i> {cart.length>0?<span className="badge bg-danger py-1 px-2 rounded-pill" style={{color:'white',fontSize:'14px'}}>{cart.length}</span>:''}
			</Link>
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
