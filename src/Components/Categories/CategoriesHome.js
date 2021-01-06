import React, { useEffect } from 'react';
import { getCategory } from '../../redux/actions/categoryActions';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { getProducts } from '../../redux/actions/productActions';
function CategoriesHome({ categories, getCategory,getProducts}) {
	useEffect(() => {
		getCategory();
	}, [getCategory]);
 
	return (
		<section id="services" className="services section-bg">
			<div className="container">
				<div className="section-title">
					<h2 data-aos="fade-in">Kategoriler</h2>
					<p data-aos="fade-in">İnanılmaz fırsatları kaçırma</p>
				</div>
				<div className="row">
				{categories.categoryListReducer.map((item) => (
					
						<div className="col-md-6 justify-content-center d-flex align-items-stretch" data-aos="fade-right" key={item._id}>
							<div className="card">
								<div className="card-img">
									<img src="assets/img/services-1.jpg" alt="..." />
								</div>
								<div className="card-body">
									<h5 className="card-title">
										<a href="">{item.categoryName}</a>
									</h5>
									<p className="card-text">
										{item.description}
									</p>
									<div className="read-more">
									
											<button onClick={()=>getProducts(item._id)}><Link to='/urunler'>Tümünü Gör</Link></button>
									
									</div>
								</div>
							</div>
						</div>
					
				))}
				</div>
			</div>
		</section>
	);
}

const mapStateToProps = (state) => {
	return {
		categories: state,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getCategory: () => dispatch(getCategory()),
		getProducts:(props) => dispatch(getProducts(props)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesHome);
