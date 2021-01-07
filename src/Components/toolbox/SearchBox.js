import React,{useState} from 'react'
import {getSearchProducts} from '../../redux/actions/productActions'
import {connect} from 'react-redux'
 function SearchBox({getSearchProducts}) {
	 const [text,setText]=useState()
	function handleChange(e)
	{
		setText(e.target.value);
		getSearchProducts(text);
	}
	return (
		<>
			<input type="text" className="form-control" name="search" placeholder="Aradığınız ürünün adını yazınız" onChange={(e)=>handleChange(e)}/>
		</>
	)
}
const mapStateToProps=state=>{
	return {
		products:state.productListReducer,
	}
}
const mapDispatchToProps=dispatch=>{
	return {
		getSearchProducts:(text)=>dispatch(getSearchProducts(text))
	}
}
export default connect(mapStateToProps,mapDispatchToProps) (SearchBox)