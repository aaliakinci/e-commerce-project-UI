import * as actionTypes from '../../actions/actionTypes'
import initialState from '../initialState'
export default function userOperationsReducer(state=initialState.userInfo,action){
	switch (action.type) {
		case actionTypes.GET_USER_BY_ID_SUCCESS:
				return action.payload	
		case actionTypes.UPDATE_USER_BY_ID_ERROR:
			console.log(action.payload)
			break;
		default:
			return state;
	}
}