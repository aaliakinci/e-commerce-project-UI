import * as actionTypes from './actionTypes'
import axios from 'axios'
 

export function getCategorySuccess(categories)
{
		return	{type:actionTypes.GET_CATEGORY_SUCCESS,payload:categories}
}
export function changeCategory(category)
{
	return {type:actionTypes.CHANGE_CATEGORY,payload:category}
} 
export function zeroCategory()
{
	return {type:actionTypes.ZERO_CATEGORY,payload:null}
} 
 
export function getCategory()
{
	return function (dispatch)
	{
		let url = 'http://localhost:3000/categories';
		axios.get(url).then((response)=>{
			const categories = response.data;
			dispatch(getCategorySuccess(categories))
		}).catch((err)=>{
			console.log(err);
		})
	}
}