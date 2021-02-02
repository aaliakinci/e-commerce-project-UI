import React from 'react'
import CategoriesHome from '../CategoriesHome/CategoriesHome'
import ProductsHomeCard from '../ProductsHome/ProductsHome'
import ConseptHomeBanner from '../ConseptHomeBanner'
import Catalog from '../Catalog'
import Carousel from '../Carousel'
export default function index() {
	return (
		<>
			<Carousel/>
			<ProductsHomeCard/>
			<hr/>
			<ConseptHomeBanner/>
			<CategoriesHome/>
			<Catalog/>
		 
		</>
	)
}
