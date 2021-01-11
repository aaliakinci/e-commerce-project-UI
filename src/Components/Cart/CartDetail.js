import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {incrementQuantity,decrementQuantity, removeToCart } from '../../redux/actions/cartActions';
function CartDetail({ cart,incrementQuantity,decrementQuantity,removeToCart }) {

	function cartHas() {
		return (
			<div className="card wish-list mb-3">
				<div className="card-body">
					<h5 className="mb-4">Sepet ( {cart.length} )</h5>
					{cart.map((item) => (
						<div className="row mb-4" key={item.product._id}>
							<div className="col-md-5 col-lg-3 col-xl-3">
								<div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
									<img
										className="img-fluid w-100"
										src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
										alt="Sample"
									/>
								</div>
							</div>
							<div className="col-md-7 col-lg-9 col-xl-9 ">
								<div>
									<div className="d-flex justify-content-between align-items-center">
										<div>
											<h5>{item.product.productName}</h5>
										</div>
										<div className="input-group w-25 h-50">
											<span className="input-group-btn">
												<button
													type="button"
													className="btn btn-danger btn-sm"
													onClick={()=>decrementQuantity(item)}
												>
													<span className="bx bx-minus"></span>
												</button>
											</span>
											<input
												type="text"
												className="form-control h-25"
												value={item.quantity}
											/>
											<span className="input-group-btn">
												<button
													type="button"
													className="btn btn-success btn-sm"
													onClick={()=>incrementQuantity(item)}
												>
													<span className="bx bx-plus"></span>
												</button>
											</span>
										</div>
									</div>
									<div className="d-flex justify-content-between align-items-center">
										<div>
											<button onClick={()=>removeToCart(item.product._id)}><i className="bx bx-trash" >Remove item</i> </button>
										</div>
										<p className="mb-0">
											<span>
												<strong>Birim Fiyatı {item.product.unitPrice}</strong>
											</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
	function cartHasnt() {
		return (
			<div className="card wish-list mb-3">
				<div className="card-body text-center">
					<h5 className="mb-4 ">
						Sepet <span className="badge badge-danger rounded-pill">{cart.length}</span>
					</h5>
					<h3 className="text-center mb-2">Kartınızda Ürün Bulunmamaktadır</h3>
					<span className="badge badge-danger">
						<Link to="/urunler" style={{ color: 'white' }}>
							Alışverişe Devam
						</Link>
					</span>
				</div>
			</div>
		);
	}
	return <>{cart.length > 0 ? cartHas() : cartHasnt()}</>;
}
const mapStateToProps = (state) => {
	return { cart: state.cartReducer };
};
const mapDispatchToProps = dispatch => {
	return {
		incrementQuantity:(cartItem)=>dispatch(incrementQuantity(cartItem)),
		decrementQuantity:(cartItem)=>dispatch(decrementQuantity(cartItem)),
		removeToCart:(cartItem)=>dispatch(removeToCart(cartItem))
	};
}
export default connect(mapStateToProps,mapDispatchToProps)(CartDetail);
