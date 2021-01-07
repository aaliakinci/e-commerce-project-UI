import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
function CartInfo({ cart }) {
	const [totalPrice, setTotalPrice] = useState();
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
						data-target="#exampleModal"
					>
						Siparişi Onayla
					</button>
				</div>

				<div
					className="modal fade"
					id="exampleModal"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">
									New message
								</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<form>
									<div className="form-group">
										<label htmlFor="recipient-name" className="col-form-label">
											Recipient:
										</label>
										<input type="text" className="form-control" id="recipient-name" />
									</div>
									<div className="form-group">
										<label htmlFor="message-text" className="col-form-label">
											Message:
										</label>
										<input type="text" className="form-control" id="recipient-name" />
									</div>
									<div className="form-group">
										<label htmlFor="message-text" className="col-form-label">
											Message:
										</label>
										<input type="text" className="form-control" id="recipient-name" />
									</div>
									<div className="form-group">
										<label htmlFor="message-text" className="col-form-label">
											Message:
										</label>
										<input type="text" className="form-control" id="recipient-name" />
									</div>
									<div className="form-group">
										<label htmlFor="message-text" className="col-form-label">
											Message:
										</label>
										<input type="text" className="form-control" id="recipient-name" />
									</div>
									<div className="modal-footer">
										<button type="button" className="btn btn-secondary" data-dismiss="modal">
											İptal
										</button>
										<button type="button" className="btn btn-primary">
											Siparişi Onayla
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return <>{cart.length > 0 ? cartHas() : ''}</>;
}
const mapStateToProps = (state) => {
	return { cart: state.cartReducer };
};
export default connect(mapStateToProps)(CartInfo);
