import React from 'react'

export default function Nav() {
	return (
			<header id="header">
				<div class="container d-flex align-items-center">

					<div class="logo mr-auto">
						<h1 class="text-light"><a href="index.html">E-Ticaret Sitesi<span>.</span></a></h1>
      		</div>

						<nav class="nav-menu d-none d-lg-block">
							<ul>
								<li class="active"><a href="index.html">Anasayfa</a></li>
								<li><a href="#about">Hakkımızda</a></li>
								<li><a href="#services">Kategoriler</a></li>
								<li><a href="#portfolio">Ürünler</a></li>
								<li><a href="#contact">İletişime Geç</a></li>
								<li class="drop-down"><a href=""><i class="bx bx-cart" style={{fontSize:'24px'}}></i></a>
									<ul>
										<li><a href="#">Drop Down 1</a></li>
										<li><a href="#">Drop Down 3</a></li>
										<li><a href="#">Drop Down 4</a></li>
										<li><a href="#">Drop Down 5</a></li>
									</ul>
								</li>
							</ul>
						</nav>

					</div>
  		</header>
		 
	)
}
