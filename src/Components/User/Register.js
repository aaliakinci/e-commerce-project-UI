import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
export default function Register() {
	const formik = useFormik({
		initialValues: {
			name: '',
			surname: '',
			phoneNumber: '',
			emailAdress: '',
			password: '',
		},
		onSubmit: (values, bag) => {
			let url = 'http://localhost:3000/users/register';
			axios
				.post(url, values)
				.then((response) => {

					console.log(response.data);
				})
				.catch((err) => {
					console.log(err);
				})
				.finally(() => bag.setSubmitting(false));
		},
	});
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-4 d-flex justify-content-center p-3 border border-dark shadow m-4 mx-auto">
					<form onSubmit={formik.handleSubmit}>
						<div className="form-group">
							<label htmlFor="name">Adınız</label>
							<input
								type="text"
								name="name"
								id="name"
								className="form-control"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							<smal className="text-muted"></smal>
						</div>
						<div className="form-group">
							<label htmlFor="surname">Soyadınız</label>
							<input
								type="text"
								name="surname"
								id="surname"
								className="form-control"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							<smal className="text-muted"></smal>
						</div>
						<div className="form-group">
							<label htmlFor="password">Şifreniz</label>
							<input
								type="text"
								name="password"
								id="password"
								className="form-control"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							<smal className="text-muted"></smal>
						</div>
						<div className="form-group">
							<label htmlFor="phoneNumber">Telefon Numaranız</label>
							<input
								type="text"
								name="phoneNumber"
								id="phoneNumber"
								className="form-control"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							<smal className="text-muted"></smal>
						</div>
						<div className="form-group">
							<label htmlFor="emailAdress">Email Adresiniz</label>
							<input
								type="email"
								name="emailAdress"
								id="emailAdress"
								className="form-control"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							<smal className="text-muted"></smal>
						</div>
						<button type="submit" className="btn-primary btn-block">
							Kayıt Ol
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
