import React from 'react';

export default function HomeBanner() {
	return (
		<section id="hero">
			<div className="container">
				<div className="row d-flex align-items-center">
					<div className=" col-lg-6 py-5 py-lg-0 order-2 order-lg-1" data-aos="fade-right">
						<h1>Your new digital experience with Bocor</h1>
						<h2>We are team of talanted designers making websites with Bootstrap</h2>
						<a href="#about" className="btn-get-started scrollto">
							Get Started
						</a>
					</div>
					<div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
						<img src="assets/img/hero-img.png" className="img-fluid" alt="" />
					</div>
				</div>
			</div>
		</section>
	);
}
