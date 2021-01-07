import React from 'react';
import FormPrice from '../toolbox/FormPrice';
import {useForm} from 'react-hook-form';
import { getProductsByBetweenUnitPrice } from '../../redux/actions/productActions';
import {connect} from 'react-redux';

 function UnitPriceFilter({getProductsByBetweenUnitPrice,cart}) {

const {register,handleSubmit}=useForm();
const onSubmit = data =>{ 
	getProductsByBetweenUnitPrice(data.lowerPrice,data.higherPrice);
}
	return (
		<>
			<FormPrice
				handleSubmit={handleSubmit(onSubmit)}
				handleChange={register}
				label1={'En Az'}
				input1='lowerPrice'
				label2={'En Fazla'}
				input2='higherPrice'
				btnText={'Uygula'}
			/>
		</>
	);
}
const mapStateToProps = state => {
	return {
		cart : state
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		getProductsByBetweenUnitPrice :(lowerPrice,higherPrice)=>dispatch(getProductsByBetweenUnitPrice(lowerPrice,higherPrice))
	}
}


export default connect (mapStateToProps,mapDispatchToProps)(UnitPriceFilter)