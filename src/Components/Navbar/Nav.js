import React,{useEffect} from 'react'
import CartSummary from '../Cart/CartSummary'
import CategoriesList from '../Categories/CategoriesList'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Profil from '../User/Profile';
import { isLoginUser } from '../../redux/actions/userActions';
import cookie from 'js-cookie'
import LoginRegister from './LoginRegister'
function Nav({user,isLoginUser}) {
	const myCookie = cookie.get('yazilimdunyasi');
	if(myCookie===undefined)
	{
		isLoginUser()
	}
	useEffect(() => {
		 isLoginUser()
	}, [])
	return (
			<header id="header">
				<div className="container d-flex align-items-center">

					<div className="logo mr-auto">
						<h1 className="text-light"><Link to='/'>Yazılım Dünyası<span>.</span></Link></h1>
      		</div>

						<nav className="nav-menu d-none d-lg-block">
							<ul>
								<li className="active"><Link to='/'>Anasayfa</Link></li>
								<li><a href="#about">Hakkımızda</a></li>
								<CategoriesList/>
								<li><a href="#contact">İletişime Geç</a></li>
								<CartSummary/>
								{
									user._id?<Profil/>:<LoginRegister/>
								}
							</ul>
						</nav>

					</div>
  		</header>
		 
	)
}
const mapStateToProps = state => {
	return {
		user : state.userLoginRegisterReducer,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		isLoginUser : () => dispatch(isLoginUser())
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Nav)