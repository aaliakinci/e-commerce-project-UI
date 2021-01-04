import React, { useEffect} from 'react';
import {connect} from 'react-redux';
import {getBestProducts } from '../../redux/actions/productActions';
 function ProductsHomeCard(props) {
	useEffect(() => {
  console.log(getBestProducts()	 )
	},[]);
  console.log(props);
	return (
		<section id="portfolio" className="portfolio section-bg">
			<div className="container">
				<div className="row portfolio-container">
					
				{/* {
				 	props.bestProducts.map(item=>(
					<div class="col-lg-4 col-md-6 portfolio-item">
							<div class="portfolio-wrap">
								<img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="" />
								<div class="portfolio-links">
									<a href="assets/img/portfolio/portfolio-1.jpg" class="venobox" title="App 1">
										<i class="icofont-plus-circle"></i>
									</a>
									<a href="portfolio-details.html" title="More Details">
										<i class="icofont-link"></i>
									</a>
								</div>
								<div class="portfolio-info">
									<h4>{item.productName}</h4>
									<p>{item.unitPrice}</p>
								</div>
							</div>
						</div>
					))
				} */}
						
				
				</div>
			</div>
		</section>
	);
}
const mapStateToProps = state =>{
	return {
		bestProducts : state.bestProducts
	}
}
const mapDispatchToProps = dispatch =>{
	return {
		getBestProducts:()=>dispatch(getBestProducts())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsHomeCard)
