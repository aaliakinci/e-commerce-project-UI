import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {getCategory } from '../../redux/actions/categoryActions';
import {Link} from 'react-router-dom' 
import { getProducts } from '../../redux/actions/productActions';
function CategoriesList({ categories, getCategory,getProducts,changeCategory }) {
	useEffect(() => {
		getCategory();
	}, []);
	function filter(category)
	{
		getProducts(category._id);
	}
	return (
		<li className="drop-down">
			<Link to='/urunler'>Ürünler</Link>
			<ul>
				{categories.categoryListReducer.map((item) => (
					<li onClick={()=>filter(item)} key ={item._id}>
						<Link to='/urunler'>{item.categoryName}</Link>	
					</li>
				))}
			</ul>
		</li>
	);
}
const mapStateToProps = (state) => {
	return { categories: state };
};
const mapDispatchToProps = (dispatch) => {
	return {
		getCategory: () => dispatch(getCategory()),
		getProducts: (props) => dispatch(getProducts(props)),
	};
};
export default connect (mapStateToProps,mapDispatchToProps) (CategoriesList);
