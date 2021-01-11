import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBestProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/actions/cartActions';
function ProductsHomeCard({ bestProducts, getBestProducts,addToCart }) {
	useEffect(() => {
		getBestProducts();
	}, [getBestProducts]);
	return (
		<section id="portfolio" className="portfolio section-bg" >
			<div className="container">
				<div className="row portfolio-container">
					{bestProducts.bestProductListReducer.slice(0, 9).map((item) => (
						<div className="col-lg-4 col-md-6 portfolio-item" key={item._id}>
							<div className="portfolio-wrap">
								<img src={item.productImage} className="img-fluid" alt="" />
								<div className="portfolio-info">
									<Link to="/" title="Ürün Detayı">
										<h4 className="border border-danger bg-danger rounded-pill" style={{color:'#213b52'}}>{item.productName}</h4>
									</Link>
									<p className="border border-danger bg-danger rounded-pill" style={{color:'#213b52'}}>{item.unitPrice}</p>
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
			<div className="row portfolio-container">
				<Link to={'/urunler'} className="mx-auto">
					Tümünü Gör
				</Link>
			</div>
		</section>
	);
}
const mapStateToProps = (state) => {
	return {
		bestProducts: state,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getBestProducts: () => dispatch(getBestProducts()),
		addToCart: (props) => dispatch(addToCart(props)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsHomeCard);
