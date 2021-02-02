import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.css';
import { addToCart } from '../../redux/actions/cartActions';
import { Redirect } from 'react-router-dom';

function ProductCard({ imageUrl, productName, unitPrice, productId,addToCart,product }) {

	const handleRedirect=()=> {
		window.location.href=`/urun-detayi/${productId}`
		// return <Redirect to={`/urun-detayi/${productId}`}/>		 
	}

	return (
		<div class="col-sm-6 col-lg-4 col-xl-4 mb-2 p-0">
			<div class="product-grid">
				<div class="col-12">
					<div class={`card ${styles.cardProduct}`}>
						<div class="card-body">
							<div class="card-img-top text-center" onClick={handleRedirect}>
								<img class="img-fluid w-100" src={imageUrl} />
							</div>
							<h5 class=" card-title">{productName}</h5>
							<p class="card-text">{unitPrice}</p>
							<div
								class={`card-footer ${styles.cardFooter} mt-1 text-center w-100 px-5 px-sm-4 px-md-2`}
								id="productFooter"
							>
								<div
									class="col-6 col-sm-12 d-inline-flex d-sm-flex  justify-content-around"
									id="productFooterIcons"
								>
									<button onClick={()=>addToCart({ quantity: 1, product })} class={(styles.productcardFoooterIcon, styles.adtocart)}>
										<i class="fa fa-shopping-cart"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
const mapStateToProps = (state) => {
	return {
		products: state,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (props) => dispatch(addToCart(props)),
	};
};
export default connect(mapStateToProps,mapDispatchToProps)(ProductCard);
