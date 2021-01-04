import React, { useEffect } from 'react';
import { getCategory } from '../../redux/actions/categoryActions';
import { connect } from 'react-redux';
function CategoriesHome({ categories, getCategory }) {
	useEffect(() => {
		getCategory();
	}, []);
	console.log(categories);
	return (
		<section id="services" class="services section-bg">
			<div class="container">
				<div class="section-title">
					<h2 data-aos="fade-in">Kategoriler</h2>
					<p data-aos="fade-in">İnanılmaz fırsatları kaçırma</p>
				</div>
				<div class="row">
				{categories.categoryListReducer.map((item) => (
					
						<div class="col-md-6 d-flex align-items-stretch" data-aos="fade-right">
							<div class="card">
								<div class="card-img">
									<img src="assets/img/services-1.jpg" alt="..." />
								</div>
								<div class="card-body">
									<h5 class="card-title">
										<a href="">{item.categoryName}</a>
									</h5>
									<p class="card-text">
										{item.description}
									</p>
									<div class="read-more">
										<a href="#">
											<i class="icofont-arrow-right"></i> Read More
										</a>
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesHome);
