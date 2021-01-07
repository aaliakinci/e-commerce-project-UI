import React from 'react'
import CategoriesFilter from '../Filter/CategoriesFilter'
import UnitPriceFilter from './UnitPriceFilter'

export default function Filter() {
	return (
		<div>
			<CategoriesFilter/>
			<UnitPriceFilter/>
		</div>
	)
}
