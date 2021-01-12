import * as actionTypes from '../../actions/actionTypes';
import initialState from '../initialState';
import cookie from 'js-cookie';
import jwt_decode from 'jwt-decode';
export default function userLoginRegisterReducer(state = initialState.user, action) {
	switch (action.type) {
		case actionTypes.LOGIN_USER_SUCCESS:
			cookie.set(
				'yazilimdunyasi',
				{ Authorization: 'Bearer ' + action.payload.token },
				{ expires: 20 },				
			);
			const myCookie = cookie.getJSON('yazilimdunyasi');
			const userToken = myCookie.Authorization.substr(6);
			const decoded = jwt_decode(userToken);
			return decoded;
		case actionTypes.IS_LOGIN_USER:
			const loginCookie = cookie.getJSON('yazilimdunyasi');
			if(loginCookie===undefined)
			{
			   return state;
			}
			else{const loginToken = loginCookie.Authorization.substr(6);
			const loginDecoded = jwt_decode(loginToken);
			if(loginDecoded===null || loginDecoded===undefined)
			{
				return state
			}
			return loginDecoded;}
		default:
			return state;
	}
}
