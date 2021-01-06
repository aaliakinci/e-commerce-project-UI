import React, { useEffect} from 'react';
import {connect} from 'react-redux';
import {getBestProducts } from '../../redux/actions/productActions';
import {Link} from 'react-router-dom'
 function ProductsHomeCard({bestProducts,getBestProducts}) {
	useEffect(() => {
  getBestProducts()
	},[getBestProducts]);
	return (
		<section id="portfolio" className="portfolio section-bg">
			<div className="container">
				<div className="row portfolio-container">
				{
				 	bestProducts.bestProductListReducer.slice(0,9).map(item=>(
					<div className="col-lg-4 col-md-6 portfolio-item" key = {item._id}>
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
			<div className="row portfolio-container">
				<Link to={"/urunler"} className="mx-auto">Tümünü Gör</Link>
			</div>
		</section>
	);
}
const mapStateToProps=state=>{
	return {
		bestProducts:state
	}
}
const mapDispatchToProps = dispatch =>{
	return {
		getBestProducts:()=>dispatch(getBestProducts())
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductsHomeCard)
