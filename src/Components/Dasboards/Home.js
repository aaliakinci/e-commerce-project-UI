import React from 'react'
import BreakBanner from '../Banners/BreakBanner'
import HomeBanner from '../Banners/HomeBanner'
import WhyUs from '../Banners/WhyUs'
import CategoriesHome from '../Categories/CategoriesHome'
import HomeCategoriesFilter from '../Categories/HomeCategoriesFilter'
import ProductsHomeCard from '../Products/ProductsHomeCard'
 
export default function index() {
	return (
		<div>
			<HomeBanner/>
			<BreakBanner/>
			<WhyUs/>
			<CategoriesHome/>
			<HomeCategoriesFilter/>
			<ProductsHomeCard/>
		</div>
	)
}
