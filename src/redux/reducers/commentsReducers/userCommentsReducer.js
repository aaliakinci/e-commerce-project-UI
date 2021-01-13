import * as actionTypes from '../../actions/actionTypes';
import initialState from '../initialState';

export default function userCommentsReducer (state=initialState.userComments,action) 
{
	switch (action.type) {
		case actionTypes.GET_COMMENTS_BY_USER_ID_SUCCESS:
			return action.payload	
		default:
			return state;
	}
}