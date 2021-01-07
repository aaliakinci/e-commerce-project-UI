import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCategory } from '../../redux/actions/categoryActions';
import { getProducts } from '../../redux/actions/productActions';
import {Link} from 'react-router-dom'
function CategoriesFilter({ categories, getCategory,getProducts,changeCategory,products }) {
	useEffect(() => {
		getCategory();
	}, [getCategory]);
 function filter(category)
 {
	 getProducts(category._id);
 }
	return (
			<ul className="list-group w-100">
			<li className="list-group-item d-flex justify-content-between align-items-center" onClick={()=>getProducts()}>
					  Tüm Ürünler
					 <span className="badge bg-primary rounded-pill " style={{color:'white'}}>{products.length}</span>
					</li>
				{categories.categoryListReducer.map((item) => (
					<li className="list-group-item d-flex justify-content-between align-items-center" onClick={()=>filter(item)} key ={item._id}>
					 {item.categoryName}
					 <span className="badge bg-primary rounded-pill " style={{color:'white'}}>{item.products.length}</span>
					</li>
				))}
			</ul>
	);
}
const mapStateToProps = (state) => {
	return { 
		categories: state,
		products:state.productListReducer 

	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getCategory: () => dispatch(getCategory()),
		getProducts: (props) => dispatch(getProducts(props)),
	};
};
export default connect (mapStateToProps,mapDispatchToProps) (CategoriesFilter);
