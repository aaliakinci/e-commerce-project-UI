import React from 'react';

export default function HomeCategoriesFilter() {
	return (
		<div>
			<div class="section-title">
				<h2 data-aos="fade-in">Portfolio</h2>
				<p data-aos="fade-in">
					Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
					quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
					suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
				</p>
			</div>

			<div class="row">
				<div class="col-lg-12">
					<ul id="portfolio-flters">
						<li data-filter="*" class="filter-active">
							All
						</li>
						<li data-filter=".filter-app">App</li>
						<li data-filter=".filter-card">Card</li>
						<li data-filter=".filter-web">Web</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
