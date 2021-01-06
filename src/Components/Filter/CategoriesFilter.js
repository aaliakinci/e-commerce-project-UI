import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeCategory, getCategory } from '../../redux/actions/categoryActions';
import { getProducts } from '../../redux/actions/productActions';
import {Link} from 'react-router-dom'
function CategoriesFilter({ categories, getCategory,getProducts,changeCategory }) {
	useEffect(() => {
		getCategory();
	}, [getCategory]);
 function filter(category)
 {
	 changeCategory(category);
	 getProducts(category._id);
 }
	console.log(categories)
	return (
			<ul>
				{categories.categoryListReducer.map((item) => (
					<li onClick={()=>filter(item)} key ={item._id}>
						<Link to='/urunler'>{item.categoryName}</Link>	
					</li>
				))}
			</ul>
	);
}
const mapStateToProps = (state) => {
	return { categories: state };
};
const mapDispatchToProps = (dispatch) => {
	return {
		getCategory: () => dispatch(getCategory()),
		getProducts: (props) => dispatch(getProducts(props)),
		changeCategory:(props)=>dispatch(changeCategory(props))
	};
};
export default connect (mapStateToProps,mapDispatchToProps) (CategoriesFilter);
