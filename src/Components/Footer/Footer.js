import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
	return (
		<div className="container-fluid p-0 m-0" style={{backgroundColor:'#213b52'}}>
			<div className="col-12 d-flex justify-content-center">
			<ul className="foote_bottom_ul_amrc">
<li><Link to='/'>Anasayfa</Link></li>
<li><Link to='/'>Hakkımızda</Link></li>
<li><Link to='/urunler'>Ürünler</Link></li>
<li><Link to='/'>İletişime Geç</Link></li>
</ul>
			</div>
<div className="col-12 d-flex justify-content-center">
<ul className="social_footer_ul">
<li><Link to='/'><i className="fa fa-facebook-f"></i></Link></li>
<li><Link to='/'><i className="fa fa-twitter"></i></Link></li>
<li><Link to='/'><i className="fa fa-linkedin"></i></Link></li>
<li><Link to='/'><i className="fa fa-instagram"></i></Link></li>
</ul>
</div>
<p className="text-center">Copyright @2020 | Designed With by <a href="#">Yazılım Dünyası</a></p>

</div>
	)
}
