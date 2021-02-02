import React, { useEffect } from 'react';
import CartSummary from '../../CartSummary/CartSummary';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Profil from '../../Profile/Profile';
import { isLoginUser } from '../../../redux/actions/userActions';
import cookie from 'js-cookie';
import styles from './styles.module.css';
import navBrand from './Logoalani.jpg';
function Nav({ user, isLoginUser }) {
	const myCookie = cookie.get('yazilimdunyasi');
	if (myCookie === undefined) {
		isLoginUser();
	}
	useEffect(() => {
		isLoginUser();
	}, []);
	return (
		<div className={`container-fluid navbar navbar-expand-lg ${styles.SiteNavBar}`} id="SiteNavBar">
			<div className="row w-100">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler"></span>
				</button>
				<div className="col-8 col-lg-3 d-flex justify-content-lg-center">
					<a className={`navbar-brand d-flex ${styles.layoutNavBarBrand}`} href="#" id="layoutNavBarBrand">
						<img
							className={`d-inline-block align-middle img-fluid ${styles.navLogo}`}
							src={navBrand}
						/>
					</a>
				</div>

				<div
					className=" col-lg-6 collapse navbar-collapse d-lg-flex justify-content-lg-center"
					id="navbarNav"
				>
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link className={`nav-link ${styles.linkcolor}`} to="/">
								Anasayfa
							</Link>
						</li>
						<li className="nav-item">
							<Link className={`nav-link ${styles.linkcolor}`} to="/urunler">
								Ürünler
							</Link>
						</li>


						
						<li class={`nav-item dropdown ${styles.navIitem}`}>
							<Link class={`nav-link  dropdown-toggle ${styles.linkcolor}`} href="#" data-toggle="dropdown">
								{' '}
								Kalitemiz{' '}
							</Link>
							<ul class={`dropdown-menu ${styles.dropdownMenu}`}>
								<li>
									<Link class={`dropdown-item ${styles.linkcolor}`} href="#">
										{' '}
										Submenu item 1
									</Link>
								</li>
								<li>
									<Link class={`dropdown-item ${styles.linkcolor}`} href="#">
										{' '}
										Submenu item 2{' '}
									</Link>
								</li>
							</ul>
						</li>



						<li className="nav-item">
							<a className={`nav-link ${styles.linkcolor}`} href="#">
								Kurumsal
							</a>
						</li>
						
					</ul>
				</div>

				<div className="col-1 col-lg-3 d-flex align-items-center justify-content-lg-around">
					<CartSummary />
					{user._id ? (
						<Profil />
					) : (
						<div className="d-flex justify-content-lg-around">
							<Link className={`nav-link ${styles.linkcolor}`} to="/uye-girisi">
								<i className="fa fa-user fa-2x"></i>Uye Girişi
							</Link>
							<Link className={`nav-link ${styles.linkcolor}`} to="/kayit-ol">
								{' '}
								| <i className="fa fa-user fa-2x"></i> Kayıt Ol
							</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
const mapStateToProps = (state) => {
	return {
		user: state.userLoginRegisterReducer,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		isLoginUser: () => dispatch(isLoginUser()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
