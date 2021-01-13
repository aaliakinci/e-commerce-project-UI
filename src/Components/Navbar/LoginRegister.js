import React from 'react'
import {Link} from 'react-router-dom'
import Login from '../User/Login'
export default function LoginRegister() {
	return (
		<li className="drop-down">
			<Link to='/uye-girisi'><i className="fa fa-user-circle" aria-hidden="true" style={{ fontSize: '24px' }} />Üye Girişi</Link>
			<ul className="text-center">
				<li className="p-1 bg-dark"><Link to='#' component={Login} style={{color:'white',borderBottom:'1px solid white'}}>Üye Girişi</Link></li>
				<li className="p-1 bg-dark"><Link to='/kayit-ol' style={{color:'white'}}>Kayıt Ol</Link></li>
			</ul>
		</li>
	)
}
