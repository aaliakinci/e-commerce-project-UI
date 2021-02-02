import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import logo from './footerlogoalani.jpg'
export default function Footer() {
	return (
		<footer>
			<div
				className={`container-fluid pb-3 float-left ${styles.footerContainer}`}
				id="footerContainer"
			>
				<div className="row border border-dark border-bottom-0 border-left-0 border-right-0">
					<div className="col-12 d-flex justify-content-center">
						<Link to="/" className="navbar-brand" href="#" id="layoutNavBarBrand">
							<img
								className={`d-inline-block align-middle img-fluid ${styles.footerBrand}`}
								src={logo}
							/>
						</Link>
					</div>
					{/* FooterBrand END  */}
					<div className="col-12 col-md-4 pb-5">
						{/* FooterMAP  */}
						<div className={`row ${styles.footerNavBarRow}`}>
							<div className="col-12">
								<p className="h3 text-center">Menü</p>
							</div>
							<div className="col-6  d-flex justify-content-md-end justify-content-center">
								<ul className="navbar-nav">
									<li className="nav-item">
										<Link to="/urunler" className="nav-link" href="~/Views/Product/Index.cshtml">
											Ürünler
										</Link>
									</li>
									<li className="nav-item active">
										<Link
											to="/"
											className="nav-link footerLinkColor"
											href="~/Views/Home/Index.cshtml"
										>
											Anasayfa
										</Link>
									</li>
									<li className="nav-item">
										<Link
											to="/"
											className="nav-link footerLinkColor"
											href="~/Views/Product/Index.cshtml"
										>
											Kalitemiz
										</Link>
									</li>
									<li className="nav-item">
										<Link
											to="/"
											className="nav-link footerLinkColor"
											href="~/Views/Product/Index.cshtml"
										>
											Kurumsal
										</Link>
									</li>
									<li className="nav-item">
										<Link
											to="/"
											className="nav-link footerLinkColor"
											href="~/Views/Product/Index.cshtml"
										>
											İletişim
										</Link>
									</li>
								</ul>
							</div>
							<div className="col-6 d-flex justify-content-md-center justify-content-center">
								<ul className="navbar-nav">
									<li className="nav-item active">
										<Link
											to="/"
											className="nav-link footerLinkColor"
											href="~/Views/Home/Index.cshtml"
										>
											Üretici BİZİZ
										</Link>
									</li>
									<li className="nav-item">
										<Link
											to="/"
											className="nav-link footerLinkColor"
											href="~/Views/Product/Index.cshtml"
										>
											Üye Ol / Üye Girişi
										</Link>
									</li>
									<li className="nav-item">
										<Link
											to="/"
											className="nav-link footerLinkColor"
											href="~/Views/Product/Index.cshtml"
										>
											Sıkça Sorulan Sorular
										</Link>
									</li>
									<li className="nav-item">
										<Link
											to="/"
											className="nav-link footerLinkColor"
											href="~/Views/Product/Index.cshtml"
										>
											Kargo Seçeneklerimiz
										</Link>
									</li>
								</ul>
							</div>
						</div>
						{/* FooterMapEnd */}
					</div>
					<div className="d-none d-md-flex col-md-4">
						<div className="row w-100">
							<div className="col-12">
								<h4 className="text-center">Kataloglarımız</h4>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-4 d-flex justify-content-center">
						<div className="row">
							<div className="col-12">
								<h4 className="mb-3 text-center">İletişim</h4>
								<div className="row">
									<div className="col-12 text-center">
										<i className="fa fa-envelope mb-2"></i>{' '}
										<a href="mailto:aliakiinci@gmail.com"> aliakiinci@gmail.com </a>
									</div>
									<div className="col-12 text-center">
										<i className="fa fa-phone w-100">
											{' '}
											<span>0555 *** ** **  </span>
										</i>
									</div>
								</div>
							</div>

							<div className="col-12 d-flex justify-content-md-center justify-content-center">
								<Link to="/" className="mr-3">
									<i className={`fa fa-facebook ${styles.footerIcon}`}></i>
								</Link>
								<Link to="/" className="mr-3">
									<i className={`fa fa-instagram ${styles.footerIcon}`}></i>
								</Link>
								<Link to="/" className="mr-3">
									<i className={`fa fa-youtube ${styles.footerIcon}`}></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className={`row ${styles.createdRow}`}>
					<div className="col-12 py-2">
						<h3 className="text-center text-white p-0">
							&copy; 2021- Created by Ali Akıncı
						</h3>
					</div>
				</div>
			</div>
		</footer>
	);
}
