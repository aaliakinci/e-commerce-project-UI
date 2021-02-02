import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBestProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard';
import styles from './styles.module.css';
function ProductsHomeCard({ bestProducts, getBestProducts }) {
	useEffect(() => {
		getBestProducts();
	}, [getBestProducts]);


	return (
		<>
			<div className="container-fluid text-center my-4">
				<h2>En Gözde Ürünler</h2>
				<p>Siz değerli ziyaretçilerimizin en beğendiği ürünler</p>
			</div>
			<div class="container mt-md-5 mt-2 mb-5">
				<div class="row" id="homeProducts">
					{
					bestProducts.bestProductListReducer.slice(0, 9).map((item) => (
						<ProductCard
							imageUrl={item.productImage}
							productName={item.productName}
							unitPrice={item.unitPrice}
							productId={item._id}
							product={item}
						/>
					))}
				</div>
				<div class="row d-flex justify-content-center mt-3 mt-md-5">
					<div class="col-5 col-md-3 d-flex justify-content-center">
						<input
							type="button"
							class={`btn btn-block ${styles.showMoreBtn}`}
							value="Daha Fazla Göster"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
const mapStateToProps = (state) => {
	return {
		bestProducts: state,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getBestProducts: () => dispatch(getBestProducts()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsHomeCard);
