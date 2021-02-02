import React from 'react'
import ProductList from '../ProductList/ProductList'
import Filter from '../Filter/Filter'

export default function Products() {
	return (

			<section id="portfolio" className="portfolio section-bg">
			<div className="container">
				<div className="row portfolio-container mt-4" style={{height:'auto'}}>
				<div className="col-md-3 ">
					<div className="row portfolio-container">
						<div className="col-md-12 portfolio-item" >
								<Filter/>
						</div>
					</div>
					</div>	
					<ProductList/>
					</div>
			</div>
		</section>
	
	)
}
