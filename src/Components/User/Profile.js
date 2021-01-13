import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserById } from '../../redux/actions/userActions';
import cookie from 'js-cookie';
function Profile({ user, userInfo, getUserById }) {
 
	function logOut() {
		cookie.remove('yazilimdunyasi');
		window.location.reload();
	}
	useEffect(() => {
		getUserById(user._id);
	}, []);

	return (
		<li className="drop-down">
			<Link to="/hesabim/kullanici-bilgileri" style={{ fontSize: '16px' }}>
				<i className="fa fa-user-circle mr-1" aria-hidden="true"></i>
				Hesabım
			</Link>
			<ul>
				<li>
					<Link to="/hesabim/kullanici-bilgileri">
						<i className="fa fa-user" aria-hidden="true"></i> Kullanıcı Bilgilerim
					</Link>
				</li>
				<li>
					<Link to="/hesabim/siparislerim">
						<i className="fa fa-shopping-bag" aria-hidden="true"></i> Siparişlerim
					</Link>
				</li>
				<li>
					<Link to="/hesabim/yorumlarim">
						<i className="fa fa-pencil" aria-hidden="true"></i> Yorumlarım
					</Link>
				</li>
				<li onClick={() => logOut()}>
					<Link to="/">
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
