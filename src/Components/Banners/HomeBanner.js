import React from 'react';
import {Link} from 'react-router-dom'
export default function HomeBanner() {
	return (
		<section id="hero">
			<div className="container">
				<div className="row d-flex align-items-center">
					<div className=" col-lg-6 py-5 py-lg-0 order-2 order-lg-1" data-aos="fade-right">
						<h1>Hoşgeldiniz</h1>
						<h2>Birbirinden farklı yazılımlar tek tık uzakta</h2>
						<Link to="/urunler" className="btn-get-started scrollto">
							Hemen Başla
						</Link>
					</div>
					<div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
						<img src="assets/img/banner.png" className="img-fluid" alt="" />
					</div>
				</div>
			</div>
		</section>
	);
}
