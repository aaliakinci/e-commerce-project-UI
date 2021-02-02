import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import styles from './styles.module.css'
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
		<div className="container my-4">
			<div className="row d-flex  justify-content-center align-items-center">
				<div className="col-md-6 p-4 border shadow">
					<form onSubmit={formik.handleSubmit}>
						<div className="form-group">
							<label htmlFor="name" className="font-smaller col-form-label-lg">Adınız</label>
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
							<label htmlFor="surname" className="font-smaller col-form-label-lg">Soyadınız</label>
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
							<label htmlFor="password" className="font-smaller col-form-label-lg">Şifreniz</label>
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
							<label htmlFor="phoneNumber" className="font-smaller col-form-label-lg">Telefon Numaranız</label>
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
							<label htmlFor="emailAdress" className="font-smaller col-form-label-lg">Email Adresiniz</label>
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
						<button type="submit" className={`btn btn-block ${styles.registerBtn}`}>
							Kayıt Ol
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
