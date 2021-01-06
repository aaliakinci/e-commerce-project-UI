import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCategory } from '../../redux/actions/categoryActions';
import {Link} from 'react-router-dom' 
import CategoriesFilter from '../Filter/CategoriesFilter';
function CategoriesList({ categories, getCategory }) {
	useEffect(() => {
		getCategory();
	}, []);
	return (
		<li className="drop-down">
			<Link to='/urunler'>Ürünler</Link>
			<CategoriesFilter/>
		</li>
	);
}
const mapStateToProps = (state) => {
	return { categories: state };
};
const mapDispatchToProps = (dispatch) => {
	return {
		getCategory: () => dispatch(getCategory()),
	};
};
export default connect (mapStateToProps,mapDispatchToProps) (CategoriesList);
