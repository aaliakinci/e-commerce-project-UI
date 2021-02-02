import React from 'react';
import styles from './styles.module.css'
import conseptImg from './konseptAlani.png'
function index() {
	return (
		<div className={`container-fluid ${styles.uzayTeknolojisi}`}>
			<div className="row pb-5 uzayRow" >
				<div className="col-12 d-flex justify-content-center">
					<img className="img-fluid" src={conseptImg} />
				</div>
				<div className="col-12 m-auto col-sm-2 d-flex justify-content-center">
					<input type="button" className="btn btn-block" value="Tıklayın" />
				</div>
			</div>
		</div>
	);
}

export default index;
