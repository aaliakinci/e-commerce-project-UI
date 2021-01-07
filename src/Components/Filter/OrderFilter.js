import React from 'react'
import OrderProductSelectBox from '../toolbox/OrderProductSelectBox'
function OrderFilter() {
	const options =[
		{value:'lowerPrice',label:'Azalan Fiyata Göre'},
		{value:'higherPrice',label:'Artan Fiyata Göre'},
		{value:'purchaseQuantity',label:'En Çok Satanlar'},
		{value:'lastProducts',label:'En Son Yüklenenler'}
	]
	 
	return (
		<>
			<OrderProductSelectBox
				options={options}
			/>
		</>
	)
}




export default OrderFilter