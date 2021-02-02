import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
function CartSummary({ cart }) {
	function hasCart() {
		return (
			<ul className={`dropdown-menu ${styles.dropdownMenu}`}>
				<li className={`dropdown-item ${styles.linkcolor}`}>
					<span>Ürün</span>
					<span>Miktar</span>
				</li>
				{cart.map((cartItem) => (
					<li
						className={`dropdown-item ${styles.linkcolor}`}
						key={cartItem.product._id}
					>
						<span className="">{cartItem.product.productName}</span>
						<span>{cartItem.quantity}</span>
					</li>
				))}
				<li className={`dropdown-item ${styles.linkcolor}`}>
					<span className="mx-1 my-2 badge badge-sm badge-info ">
						<Link to="/sepet" className={`dropdown-item ${styles.linkcolor}`}>Sepete Git </Link>
					</span>
				</li>
			</ul>
		);
	}
	function hasntCart() {
		return (
			<ul className={`dropdown-menu ${styles.dropdownMenu}`}>
				<li  className={`dropdown-item ${styles.linkcolor}`}>Sepette Ürün Bulunmamakta</li>
			</ul>
		);
	}
	return (
		<li className={`nav-item dropdown ${styles.navIitem}`}>
			<Link className={`nav-link  dropdown-toggle ${styles.cartIcon}`} to="/sepet" data-toggle="dropdown">
				<i className="text-center fa fa-shopping-cart"></i>{' '}
				{cart.length > 0 ? (
					<span
						className="badge bg-danger py-1 px-2 rounded-pill"
						style={{ color: 'white', fontSize: '14px' }}
					>
						{cart.length}
					</span>
				) : (
					''
				)}
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
