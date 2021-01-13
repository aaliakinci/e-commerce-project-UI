import * as actionTypes from './actionTypes';
import axios from 'axios';
import cookie from 'js-cookie';
 
export function userLoginSuccess(user) {
	return { type: actionTypes.LOGIN_USER_SUCCESS, payload: user };
}
export function isLoginUser() {
	return { type: actionTypes.IS_LOGIN_USER };
}

export function getUserByIdSuccess(user) {
	return { type: actionTypes.GET_USER_BY_ID_SUCCESS, payload: user };
}
export function updateUserByIdSuccess(user) {
	return { type: actionTypes.GET_USER_BY_ID_SUCCESS, payload: user };
}
export function updateUserByIdError(message) {
	return { type: actionTypes.UPDATE_USER_BY_ID_ERROR, payload: message };
}

export function updateUserById(user) {
	return function (dispatch) {
		const myCookie = cookie.getJSON('yazilimdunyasi');
		if(myCookie)
		{
			const auth = myCookie.Authorization;
			let url = `http://localhost:3000/users/update`;
			axios
				.put(
					url,
					{
						_id: user._id,
						name: user.name,
						surname: user.surname,
						emailAdress: user.emailAdress,
						phoneNumber: user.phoneNumber,
					},
					{ headers: { Authorization: auth } },
				)
				.then((response) => {
					dispatch(updateUserByIdSuccess(response.data));
				})
				.catch((err) => {
					console.log(err);
				});
		}
		else{
			window.location.reload();
			dispatch(updateUserByIdError({message:'Lütfen giriş yapınız'}))
		}
		
	};
}

export function getUserById(user_id) {
	return function (dispatch) {
		const myCookie = cookie.getJSON('yazilimdunyasi');
		if(myCookie)
		{
			const auth = myCookie.Authorization;
			let url = `http://localhost:3000/users/${user_id}`;
			axios
				.get(url, { headers: { Authorization: auth } })
				.then((response) => {
					dispatch(getUserByIdSuccess(response.data));
				})
				.catch((err) => {
					console.log(err);
				});
		}
		else{
			window.location.reload();
			 
		}
	
	};
}

export function userLogin(userEmail, userPassword) {
	return function (dispatch) {
		let url = 'http://localhost:3000/users/login';
		axios
			.post(url, {
				emailAdress: userEmail,
				password: userPassword,
			})
			.then((response) => {
				dispatch(userLoginSuccess(response.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
}
