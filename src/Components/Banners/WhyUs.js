import React from 'react'

export default function WhyUs() {
	return (
		<section id="about" className="about section-bg">
					<div className="container">

						<div className="row">
							<div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
							<div className="col-xl-7 pl-0 pl-lg-5 pr-lg-1 d-flex align-items-stretch">
								<div className="content d-flex flex-column justify-content-center">
									<h3 data-aos="fade-in" data-aos-delay="100">Neden Biz ?</h3>
									<p data-aos="fade-in">
									 Yazılım geliştirirken ve aynı şekilde pazarlamasını yaparken önceliğimiz güvenlik
              </p>
									<div className="row">
										<div className="col-md-6 icon-box" data-aos="fade-up">
											<i className="bx bx-receipt"></i>
											<h4>Lisans</h4>
											<p>Ürünlerimizin 2 çeşit satın alma opsiyonu bulunuyor.Lisanslı ve lisansız</p>
										</div>
										<div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
											<i className="bx bx-cube-alt"></i>
											<h4>Güncel Tutmak</h4>
											<p>Pazarımızda her gün gelişen teknolojiye uygun kendini güncel tutan yazılımlara yer vermeye özen gösteriyoruz</p>
										</div>
										<div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
											<i className="bx bx-images"></i>
											<h4>Tasarım</h4>
											<p>Göze hitap eden tasarımların olmasına özen gösteriyoruz</p>
										</div>
										<div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
											<i className="bx bx-shield"></i>
											<h4>Güvenlik</h4>
											<p>Alırken ve kullanırken sizin için en üst düzey güvenlik sağlıyoruz</p>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</section>
	)
}
