import React from 'react';
import {connect} from 'react-redux'
import {getOrderProducts} from '../../redux/actions/productActions'

function OrderProductSelectBox({ options,getOrderProducts}) {
  const changeOrder =e=>{
		getOrderProducts(e.target.value)
	}
	return (
		<select className="form-control" onChange={(e)=>changeOrder(e)}>
			<option value='all'>Önerilen Sıralama</option>
			{options.map((item,i) => (
				<option value={item.value} key={i}>{item.label}</option>
			))}
		</select>
	);
}

const mapStateToProps = state => {
	return {
		products:state.productListReducer
	}
}
const mapDispatchToProps = dispatch => {
	return {
		getOrderProducts:(order)=>dispatch(getOrderProducts(order))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(OrderProductSelectBox) 

