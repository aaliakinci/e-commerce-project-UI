import React from 'react'
import {useFormik} from 'formik'
export default function PaymentModal() {
const formik = useFormik({
	initialValues:{
		creditCardNumber:"",
		cardSecurityNumber:"",
		expirationMounthOfCard:"",
		expirationYearOfCard:"",
		cardFullName:"",
	}
})

	return (
		<>
				<div
				className="modal fade"
				id="paymentModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Ödeme Ekranı
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form onSubmit={formik.handleSubmit}>
								<div className="form-group">
									<label htmlFor="creditCardNumber" className="col-form-label">
										Adınız
									</label>
									<input
										type="text"
										name="creditCardNumber"
										className="form-control"
										id="creditCardNumber"
										onChange={formik.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="cardSecurityNumber" className="col-form-label">
										Soyadınız
									</label>
									<input
										type="text"
										name="cardSecurityNumber"
										className="form-control"
										id="cardSecurityNumber"
										onChange={formik.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="expirationMounthOfCard" className="col-form-label">
										Telefon Numaranız
									</label>
									<input
										type="text"
										name="expirationMounthOfCard"
										className="form-control"
										id="expirationMounthOfCard"
										onChange={formik.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="expirationYearOfCard" className="col-form-label">
										Email Adresiniz
									</label>
									<input
										type="text"
										name="expirationYearOfCard"
										className="form-control"
										id="expirationYearOfCard"
										onChange={formik.handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="cardFullName" className="col-form-label">
										Gönderilecek Adress
									</label>
									<input
										type="text"
										name="cardFullName"
										className="form-control"
										id="cardFullName"
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
		</>
	)
}
