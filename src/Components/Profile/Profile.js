import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserById } from '../../redux/actions/userActions';
import cookie from 'js-cookie';
import styles from './styles.module.css';
function Profile({ user, userInfo, getUserById }) {
 
	function logOut() {
		cookie.remove('yazilimdunyasi');
		window.location.reload();
	}
	useEffect(() => {
		getUserById(user._id);
	}, []);

	return (
		<li className={`nav-item dropdown ${styles.navIitem}`}>
			<Link to="/hesabim/kullanici-bilgileri" className={`nav-link  dropdown-toggle ${styles.cartIcon}`}>
				<i className="fa fa-user-circle" aria-hidden="true"></i>
				Hesabım
			</Link>
			<ul className={`dropdown-menu ${styles.dropdownMenu}`}>
				<li className={`dropdown-item ${styles.linkcolor}`}>
					<Link to="/hesabim/kullanici-bilgileri" className={`dropdown-item ${styles.linkcolor}`}>
						<i className="fa fa-user" aria-hidden="true"></i> Kullanıcı Bilgilerim
					</Link>
				</li>
				<li className={`dropdown-item ${styles.linkcolor}`}>
					<Link to="/hesabim/siparislerim" className={`dropdown-item ${styles.linkcolor}`}>
						<i className="fa fa-shopping-bag" aria-hidden="true"></i> Siparişlerim
					</Link>
				</li>
				<li className={`dropdown-item ${styles.linkcolor}`}>
					<Link to="/hesabim/yorumlarim" className={`dropdown-item ${styles.linkcolor}`}>
						<i className="fa fa-pencil" aria-hidden="true"></i> Yorumlarım
					</Link>
				</li>
				<li className={`dropdown-item ${styles.linkcolor}`} onClick={() => logOut()}>
					<Link to="/" className={`dropdown-item ${styles.linkcolor}`}>
						<i className="fa fa-sign-out" aria-hidden="true"></i> Çıkış Yap
					</Link>
				</li>
			</ul>
		</li>
	);
}
const mapStateToProps = (state) => {
	return {
		user: state.userLoginRegisterReducer,
		userInfo: state.userOperationsReducer,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getUserById: (user_id) => dispatch(getUserById(user_id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
