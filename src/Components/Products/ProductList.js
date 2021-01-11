import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { getProducts } from '../../redux/actions/productActions';
import OrderFilter from '../Filter/OrderFilter';
import SearchBox from '../toolbox/SearchBox';
import { Link } from 'react-router-dom';
function ProductList({ products, getProducts, addToCart }) {
	useEffect(() => {
		getProducts();
	}, []);
	console.log(products);
	return (
		<div className="col-md-9">
			<div className="row portfolio-container">
				<div className="col-md-6 portfolio-item float-left">
					<SearchBox />
				</div>
				<div className="col-md-4 portfolio-item float-right">
					<OrderFilter />
				</div>
			</div>
			<div className="row portfolio-container">
				{products.productListReducer.map((item) => (
					<div className="col-lg-4 col-md-6 portfolio-item" key={item._id}>
						<div className="portfolio-wrap">
							<img src={item.productImage} className="img-fluid" alt="" />
							<div className="portfolio-info">
								<Link to="/" title="Ürün Detayı">
									<h4 className="border border-danger bg-danger rounded-pill" style={{color:'#213b52'}}>{item.productName}</h4>
								</Link>
								<p className="border border-danger bg-danger rounded-pill" style={{color:'#213b52'}}>{item.unitPrice>0?item.unitPrice:'Ücretsiz'}</p>
							</div>
							<div className="portfolio-links">
								<button
									className="btn btn-sm rounded-pill border-danger bg-danger"
									onClick={() => addToCart({ quantity: 1, product: item })}
								>
									<i className="icofont-cart" style={{ fontSize: '32px', color: 'white' }}></i>
								</button>
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
