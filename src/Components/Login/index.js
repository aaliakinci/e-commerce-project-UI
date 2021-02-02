import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions/userActions';
import styles from './styles.module.css'
function Login({ user, userLogin }) {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		if (name === 'email') {
			setEmail(value);
		}
		if (name === 'password') {
			setPassword(value);
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		userLogin(email, password);
	};

	return (
		<div className="container" >
			<div className={`row d-flex  justify-content-center align-items-center ${styles.loginPage}`}>
				<div className="col-6 border shadow p-4">
					<form onSubmit={(e) => handleSubmit(e)}>
						<div className="form-group">
							<label
								htmlFor="email"
								className="font-smaller col-form-label-lg"
 
							>
								E-posta Adresiniz
							</label>
							<input
								type="email"
								className="form-control"
								id="email"
								name="email"
							 
								onChange={(e) => handleChange(e)}
							/>
						</div>
						<div className="form-group my-2">
							<label htmlFor="password" className="font-smaller col-form-label-lg">
								Şifreniz
							</label>
							<input
								type="password"
								className="form-control"
								id="password"
								name="password"
 
								onChange={(e) => handleChange(e)}
							/>
						</div>
						<button
							type="submit"
							className={`btn btn-block my-2 ${styles.loginBtn}`}
						>
							Giriş
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
const mapStateToProps = (state) => {
	return {
		user: state,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		userLogin: (email, password) => dispatch(userLogin(email, password)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
