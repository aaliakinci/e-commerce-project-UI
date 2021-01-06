import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { zeroCategory } from '../../redux/actions/categoryActions';
import { getProducts } from '../../redux/actions/productActions';

function ProductList({ products, getProducts, addToCart, currentCategory,zeroCategory }) {
	useEffect(() => {

			getProducts();
	}, [getProducts]);
// function filterCategory()
// {
// 	return(<p>{currentCategory.categoryName}<button onClick={()=>zeroCategory()}>X</button></p>)
// }
 
	return (
		<div>
			{/* {currentCategory.categoryName===undefined?'':filterCategory()} */}
			{products.productListReducer.map((item) => (
				<div className="col-lg-4 col-md-6 portfolio-item" key={item._id}>
					<div className="portfolio-wrap">
						<img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
						<div className="portfolio-links">
							<button onClick={() => addToCart({ quantity: 1, product: item })}>
								<i className="icofont-plus-circle"></i>
							</button>
							<a href="portfolio-details.html" title="More Details">
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
	);
}
const mapStateToProps = (state) => {
	return {
		products: state,
		currentCategory: state.changeCategoryReducer,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getProducts: () => dispatch(getProducts()),
		addToCart: (props) => dispatch(addToCart(props)),
		zeroCategory:()=>dispatch(zeroCategory())
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
