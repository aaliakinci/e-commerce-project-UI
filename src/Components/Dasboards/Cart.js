import React from 'react';
import CartDetail from '../Cart/CartDetail';
import CartInfo from '../Cart/CartInfo';
import {connect} from 'react-redux'
function Cart({cart}) {
	return (
		<section>
			<div className="row d-flex justify-content-center">
				<div className="col-md-6">
					<CartDetail />
				</div>
				{cart.length>0?<div className="col-md-3">
					<CartInfo />
				</div>:''}
			</div>
		</section>
	);
}
const mapStateToProps = state =>{
	return{
		cart:state.cartReducer
	}
}
export default connect(mapStateToProps)(Cart);
