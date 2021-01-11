import React from 'react'
import CartSummary from '../Cart/CartSummary'
import CategoriesList from '../Categories/CategoriesList'
import {Link} from 'react-router-dom'
import Login from '../User/Login'
export default function Nav() {
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
								<Login/>
							</ul>
						</nav>

					</div>
  		</header>
		 
	)
}
