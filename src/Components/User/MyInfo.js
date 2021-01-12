import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateUserById } from '../../redux/actions/userActions';

function MyInfo({ userInfo, updateUserById }) {
	const [name, setName] = useState();
	const [surname, setSurname] = useState();
	const [emailAdress, setEmailAdress] = useState();
	const [phoneNumber, setPhoneNumber] = useState();
	useEffect(() => {
		setName(userInfo.name);
		setSurname(userInfo.surname);
		setEmailAdress(userInfo.emailAdress);
		setPhoneNumber(userInfo.phoneNumber);
		
	}, [userInfo]);
	// console.log(name+surname+emailAdress+phoneNumber)
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		if (name === 'name') {
			setName(value);
		}
		if (name === 'surname') {
			setSurname(value);
		}
		if (name === 'emailAdress') {
			setEmailAdress(value);
		}
		if (name === 'phoneNumber') {
			setPhoneNumber(value);
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const user = {
			_id: userInfo._id,
			name: name,
			surname: surname,
			emailAdress: emailAdress,
			phoneNumber: phoneNumber,
		};
		updateUserById(user);
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<div className="form-group">
				<label htmlFor="name">Adınız</label>
				<input
					type="text"
					className="form-control"
					id="name"
					name="name"
					value={name}
					onChange={(e) => handleChange(e)}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="surName">Soyadınız</label>
				<input
					type="text"
					className="form-control"
					id="surname"
					name="surname"
					value={surname}
					onChange={(e) => handleChange(e)}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="emailAdress">E-Posta Adresiniz</label>
				<input
					type="email"
					className="form-control"
					id="emailAdress"
					name="emailAdress"
					value={emailAdress}
					onChange={(e) => handleChange(e)}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="phoneNumber">E-Posta Adresiniz</label>
				<input
					type="text"
					className="form-control"
					id="phoneNumber"
					name="phoneNumber"
					value={phoneNumber}
					onChange={(e) => handleChange(e)}
				/>
			</div>
			<button
				type="submit"
				className="btn btn-block my-2"
				style={{ backgroundColor: '#213b52', color: 'white' }}
			>
				Güncelle
			</button>
		</form>
	);
}
const mapStateToProps = (state) => {
	return {
		userInfo: state.userOperationsReducer,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		updateUserById: (user) => dispatch(updateUserById(user)),
	};
};
export default connect(mapStateToProps,mapDispatchToProps)(MyInfo);
