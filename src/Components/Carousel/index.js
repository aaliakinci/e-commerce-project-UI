import React from 'react';
import styles from './styles.module.css'
import sliderImg from './SliderAlani.jpg'
function index() {
	return (
		<div
			id="carouselExampleIndicators"
			className={`carousel slide mx-auto  ${styles.carouselWıdth}`}
			data-ride="carousel"
		>
			<ol className="carousel-indicators">
				<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			</ol>
			<div className={`carousel-inner ${styles.carouselimg}`}>
				<div className="carousel-item active">
					<img
						src={sliderImg}
						className="d-block w-100"
						alt="..."
					/>
				</div>
				<div className="carousel-item">
					<img
						src={sliderImg}
						className="d-block w-100" 
						alt="..."
					/>
				</div>
				<div className="carousel-item">
					<img
							src={sliderImg}
						className="d-block w-100"
						alt="..."
					/>
				</div>
			</div>
			<a
				className="carousel-control-prev"
				href="#carouselExampleIndicators"
				role="button"
				data-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="sr-only">Previous</span>
			</a>
			<a
				className="carousel-control-next"
				href="#carouselExampleIndicators"
				role="button"
				data-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="sr-only">Next</span>
			</a>
		</div>
	);
}

export default index;
