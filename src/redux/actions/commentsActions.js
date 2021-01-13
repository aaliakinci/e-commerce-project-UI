import * as actionTypes from './actionTypes'
import axios from 'axios'
export function getCommentsByUserIdSuccess(comments)
{
	return{type:actionTypes.GET_COMMENTS_BY_USER_ID_SUCCESS,payload:comments}
}

export function getCommentsByUserId(user_id,auth)
{
	return function(dispatch){
		let url = `http://localhost:3000/comments/${user_id}`;
		axios
			.get(url, { headers: { Authorization: auth } })
			.then((response) => {
				console.log(response.data)
				 dispatch(getCommentsByUserIdSuccess(response.data));
			})
			.catch((err) => {
				console.log(err);
			});
	}
}