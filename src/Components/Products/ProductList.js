import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { getProducts } from '../../redux/actions/productActions';
import OrderFilter from '../Filter/OrderFilter';
import SearchBox from '../toolbox/SearchBox';

function ProductList({ products, getProducts, addToCart}) {
	useEffect(() => {
			getProducts();
	}, []);
 console.log(products)
	return (		
		<div className="col-md-9">
			<div className="row portfolio-container">
			<div className="col-md-6 portfolio-item float-left">
				<SearchBox/>
			</div>
			<div className="col-md-4 portfolio-item float-right">
				<OrderFilter/>
			</div>
			</div>
				<div className="row portfolio-container">
		 
			{products.productListReducer.map((item) => (
				<div className="col-lg-4 col-md-6 portfolio-item" key={item._id}>
					<div className="portfolio-wrap">
						<img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
						<div className="portfolio-links">
							<button onClick={() => addToCart({ quantity: 1, product: item })}>
								<i className="icofont-cart"style={{fontSize:'24px'}}></i>
							</button>
							<a href="portfolio-details.html" title="Ürün Detayı">
								<i className="icofont-link"></i>
							</a>
						</div>
						<div className="portfolio-info">
							<h4>{item.productName}</h4>
							<p>{item.unitPrice}</p>
						</div>
					</div>
				</div>
			))}
			</div>
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
		addToCart: (props) => dispatch(addToCart(props)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
