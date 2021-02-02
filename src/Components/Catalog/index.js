import React from 'react';
import styles from './styles.module.css'
import catalogImg from './catalog.png'
function index() {
	return (
		<div class="container-fluid">
			<div class={`row mt-5 ${styles.headerRow}`}>
				<div class="col-12 d-flex justify-content-center mt-5">
					<p class="h1">Kataloglarımızı</p>
				</div>
				<div class="col-12 d-flex justify-content-center">
					<p class="h3 text-muted">İncelemek İster Misiniz?</p>
				</div>
				<div class="col-12 my-5">
					<div class={`row ${styles.catalogBorder}`}>
						<div class="col-md-6 d-flex align-items-center justify-content-center">
							<p class="h1 mr-3">Katalog Adı</p>

							<p class="h4 text-muted float-left mr-3">Kataloğu İçin</p>
							<input type="button" class={`btn btn-block ${styles.katalogBtn}`} value="Tıklayın" />
						</div>
						<div class="col-md-6 d-flex justify-content-start">
							<img className={styles.catalogImg} src={catalogImg} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default index;
