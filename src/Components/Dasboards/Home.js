import React from 'react'
import BreakBanner from '../Banners/BreakBanner'
import HomeBanner from '../Banners/HomeBanner'
import WhyUs from '../Banners/WhyUs'
import CategoriesHome from '../Categories/CategoriesHome'
import TextFieldBestProducts from '../Products/TextFieldBestProducts'
import ProductsHomeCard from '../Products/ProductsHomeCard'
import Footer from '../Footer/Footer'
 
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
