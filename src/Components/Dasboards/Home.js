import React from 'react'
import BreakBanner from '../Banners/BreakBanner'
import HomeBanner from '../Banners/HomeBanner'
import WhyUs from '../Banners/WhyUs'
import CategoriesHome from '../Categories/CategoriesHome'
import TextFieldBestProducts from '../Products/TextFieldBestProducts'
import ProductsHomeCard from '../Products/ProductsHomeCard'
 
export default function index() {
	return (
		<>
			<HomeBanner/>
			<BreakBanner/>
			<WhyUs/>
			<TextFieldBestProducts/>
			<ProductsHomeCard/>
			<CategoriesHome/>
		</>
	)
}
