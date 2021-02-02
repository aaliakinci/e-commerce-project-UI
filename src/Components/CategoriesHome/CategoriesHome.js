import React, { useEffect } from 'react';
import { getCategory } from '../../redux/actions/categoryActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts } from '../../redux/actions/productActions';
import styles from './styles.module.css';
function CategoriesHome({ categories, getCategory, getProducts }) {
	useEffect(() => {
		getCategory();
	}, [getCategory]);

	return (
		<div class="container mt-5">
			<div class="row m-auto">
				<div class="col-12 d-flex justify-content-center mt-5">
					<p class="h1">Tarzınızı Seçin</p>
				</div>
				<div class="col-12 d-flex justify-content-center mt-1">
					<p class="h3 text-muted">Birbirinden Farklı Modeller</p>
				</div>
				<div class="row">
					{categories.categoryListReducer.map((item) => (
						<div class={`row  m-auto ${styles.choseyourstyleRowSettings}`}>
							<div class="col-12 d-flex justify-content-center">
								<img src={item.categoryImage} class="img-fluid w-100 h-100" />
							</div>
							<div class="col-12 d-flex justify-content-center">
								<Link to="/urunler" className="nav-link">
									<input
										type="button"
										class="btn-block btn "
										value="Tümünü Gör"
										onClick={() => getProducts(item._id)}
									/>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>

		// <section id="services" className="services section-bg">
		// 	<div className="container">
		// 		<div className="section-title">
		// 			<h2 data-aos="fade-in">Kategoriler</h2>
		// 			<p data-aos="fade-in">İnanılmaz fırsatları kaçırma</p>
		// 		</div>
		// 		<div className="row">
		// 		{categories.categoryListReducer.map((item) => (

		// 				<div className="col-md-6 justify-content-center d-flex align-items-stretch" data-aos="fade-right" key={item._id}>
		// 					<div className="card">
		// 						<div className="card-img d-flex justify-content-center">
		// 							<img src={item.categoryImage} className="img-fluid w-75" alt="..." />
		// 						</div>
		// 						<div className="card-body">
		// 							<h5 className="card-title">
		// 								<a href="">{item.categoryName}</a>
		// 							</h5>
		// 							<p className="card-text">
		// 								{item.description}
		// 							</p>
		// 							<div className="read-more">

		// 									<button className="btn btn-sm" onClick={()=>getProducts(item._id)}><Link to='/urunler'>Tümünü Gör</Link></button>

		// 							</div>
		// 						</div>
		// 					</div>
		// 				</div>

		// 		))}
		// 		</div>
		// 	</div>
		// </section>
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
		getProducts: (props) => dispatch(getProducts(props)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesHome);
