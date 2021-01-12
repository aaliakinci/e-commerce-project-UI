import React from 'react';
import {Link,Switch,Route} from 'react-router-dom'
import MyInfo from '../User/MyInfo'
import MyOrders from '../User/MyOrders'
import MyComments from '../User/MyComments'
export default function UserDetail() {
	return (
		<div className="container" style={{minHeight:'700px'}}>
			<div className="row my-4">
				<div className="col-md-3">
					<ul className="list-group w-100" >
						<li className="list-group-item d-flex justify-content-between align-items-center" style={{color:'#213b52'}}>
							Hesabım
						</li>
						<li className="list-group-item d-flex justify-content-between align-items-center">
							<Link to="/hesabim/kullanici-bilgileri" style={{color:'#213b52'}}>
								<i className="fa fa-user" aria-hidden="true"></i> Kullanıcı Bilgilerim
							</Link>
						</li>
						<li className="list-group-item d-flex justify-content-between align-items-center">
							<Link to="/hesabim/siparislerim" style={{color:'#213b52'}}>
								<i className="fa fa-shopping-bag" aria-hidden="true"></i> Siparişlerim
							</Link>
						</li>
						<li className="list-group-item d-flex justify-content-between align-items-center">
							<Link to="/hesabim/yorumlarim" style={{color:'#213b52'}}>
								<i className="fa fa-pencil" aria-hidden="true"></i> Yorumlarım
							</Link>
						</li>
						<li className="list-group-item d-flex justify-content-between align-items-center">
							<Link style={{color:'#213b52'}}>
								<i className="fa fa-sign-out" aria-hidden="true"></i> Çıkış Yap
							</Link>
						</li>
					</ul>
				</div>
				<div className="col-md-9">
						<Switch>
							<Route path='/hesabim/kullanici-bilgileri' component={MyInfo}/> 
							<Route path='/hesabim/siparislerim' component={MyOrders}/> 
							<Route path='/hesabim/yorumlarim' component={MyComments}/> 
						</Switch>
				</div>
			</div>
		</div>
	);
}
