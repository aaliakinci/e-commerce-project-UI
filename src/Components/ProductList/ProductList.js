import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import OrderFilter from '../Filter/OrderFilter';
import SearchBox from '../toolbox/SearchBox';
import ProductCard from '../ProductCard';
import Loading from '../Loading';
function ProductList({ products, getProducts}) {
	useEffect(() => {
		getProducts();
	}, []);
	// console.log(products.productListReducer);
	return (
		<div className="col-md-9">
			<div className="row d-flex justify-content-end mb-4">
				<div className="col-md-6 portfolio-item float-left">
					<SearchBox />
				</div>
				<div className="col-md-4 portfolio-item float-right">
					<OrderFilter />
				</div>
			</div>
			{
				products.productListReducer?<div className="row">
				{products.productListReducer.map((item) => (
					<ProductCard 
					imageUrl={item.productImage}
					productName={item.productName}
					unitPrice={item.unitPrice}
					productId={item._id}
					product={item}
					/>
				))}
			</div>:<Loading/>
			}
			
		</div>
	);
}
const mapStateToProps = (state) => {
	return {
		products: state,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getProducts: () => dispatch(getProducts()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
