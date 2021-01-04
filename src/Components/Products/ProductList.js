import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../../redux/actions/productActions'


 function ProductList({products,getProducts}) {
	 useEffect(() => {
		 getProducts()
	 }, [])
	 console.log(products)
	return (
		 <div>
			 <section id="portfolio" className="portfolio section-bg">
			<div className="container">
				<div className="row portfolio-container">
				{
				  products.productListReducer.map(item=>(
					<div className="col-lg-4 col-md-6 portfolio-item">
							<div className="portfolio-wrap">
								<img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
								<div className="portfolio-links">
									<a href="assets/img/portfolio/portfolio-1.jpg" className="venobox" title="App 1">
										<i className="icofont-plus-circle"></i>
									</a>
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
						
					))
				}
				</div>
			</div>
		</section>
		 </div>
	)
}
const mapStateToProps = state =>{
	return {
		products:state
	}
}
const mapDispatchToProps = dispatch => {
	return {
		getProducts : ()=>dispatch(getProducts())
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductList)