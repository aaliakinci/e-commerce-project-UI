import React from 'react'
import ProductList from '../Products/ProductList'
import Filter from '../Filter/Filter'

export default function Products() {
	return (
		<div>
			<section id="portfolio" className="portfolio section-bg">
			<div className="container">
				<div className="row portfolio-container">
				<div className="col-md-3">
					<div className="row portfolio-container">
						<div className="col-md-3 portfolio-item">
								<Filter/>
						</div>
					</div>
					</div>	
				<div className="col-md-9">
				<div className="row portfolio-container">
					<ProductList/>
					</div>
				</div>
				</div>
			</div>
		</section>
		</div>
	)
}
