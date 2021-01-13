import { useState } from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { createOrder } from '../../redux/actions/orderActions';
import PaymentModal from '../Payment/PaymentModal';
function OrderModal({ cart,createOrder }) {
	const [order, setOrder] = useState([]);
	const formik = useFormik({
		initialValues: {
			customerName: '',
			customerSurname: '',
			customerPhone: '',
			customerEmail: '',
			shippingAdress: '',
		},
		onSubmit: (values, bag) => {
			setOrder({
				customerName: values.customerName,
				customerSurname: values.customerSurname,
				customerPhone: values.customerPhone,
				customerEmail: values.customerEmail,
				shippingAdress: values.shippingAdress,
				products:cart
			});
			createOrder(order);
			const modal = document.getElementById('orderModal');
			modal.style.display="none";
			const paymentmodal = document.getElementById('paymentModal');
			paymentmodal.style.display="block";
		},
	});
console.log(order)
	return (
		<>
			<div
				className="modal fade"
				id="orderModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Sipariş Onayı
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form onSubmit={formik.handleSubmit}>
								<div className="form-group">
									<label htmlFor="customerName" className="col-form-label">
										Adınız
									</label>
									<input
										type="text"
										name="customerName"
										className="form-control"
										id="customerName"
										onChange={formik.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="customerSurname" className="col-form-label">
										Soyadınız
									</label>
									<input
										type="text"
										name="customerSurname"
										className="form-control"
										id="customerSurname"
										onChange={formik.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="customerPhone" className="col-form-label">
										Telefon Numaranız
									</label>
									<input
										type="text"
										name="customerPhone"
										className="form-control"
										id="customerPhone"
										onChange={formik.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="customerEmail" className="col-form-label">
										Email Adresiniz
									</label>
									<input
										type="email"
										name="customerEmail"
										className="form-control"
										id="customerEmail"
										onChange={formik.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="shippingAdress" className="col-form-label">
										Gönderilecek Adress
									</label>
									<input
										type="text"
										name="shippingAdress"
										className="form-control"
										id="shippingAdress"
										onChange={formik.handleChange}
									/>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-secondary" data-dismiss="modal">
										İptal
									</button>
									<button type="submit" className="btn btn-primary">
										Siparişi Onayla
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<PaymentModal/>
		</>
	);
}
const mapStateToProps = (state) => {
	return {
		cart: state.cartReducer,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		createOrder : (order) => dispatch(createOrder(order))
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(OrderModal);
