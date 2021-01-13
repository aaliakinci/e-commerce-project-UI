import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import OrderModal from '../Order/OrderModal';

function CartInfo({ cart }) {
	const [totalPrice, setTotalPrice] = useState();
	const [order, setOrder] = useState([]);
	function calculate() {
		let totalPrice = 0;
		cart.map((item) => (totalPrice = totalPrice + item.quantity * item.product.unitPrice));
		return totalPrice;
	}
	useEffect(() => {
		const val = calculate();
		setTotalPrice(val);
	}, [cart]);
	function cartHas() {
		return (
			<div className="card mb-3">
				<div className="card-body">
					<h5 className="mb-3">Sipariş Özeti</h5>

					<ul className="list-group list-group-flush">
						{cart.map((item) => (
							<li
								className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0"
								key={item.product._id}
							>
								{item.product.productName}
								<span>{item.quantity * item.product.unitPrice} TL</span>
							</li>
						))}
						<li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
							<div>
								<strong>Toplam Fiyat</strong>
							</div>
							<span>
								<strong>{totalPrice} TL</strong>
							</span>
						</li>
					</ul>

					<button
						type="button"
						className="btn btn-primary btn-block waves-effect waves-light"
						data-toggle="modal"
						data-target="#orderModal"
					>
						Siparişi Onayla
					</button>
				</div>

				<OrderModal/>
			</div>
		);
	}

	return <>{cart.length > 0 ? cartHas() : ''}</>;
}
const mapStateToProps = (state) => {
	return { cart: state.cartReducer };
};
export default connect(mapStateToProps)(CartInfo);
