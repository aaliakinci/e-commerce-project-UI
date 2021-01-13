import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import cookie from 'js-cookie';
function MyOrders({ userInfo }) {
	const [order, setOrder] = useState([]);
	const [orderDetail, setOrderDetail] = useState([]);
	const myCookie = cookie.getJSON('yazilimdunyasi');
	const auth = myCookie.Authorization;
	useEffect(() => {
		let url = `http://localhost:3000/orders/${userInfo._id.toString()}`;
		axios
			.get(url, { headers: { Authorization: auth } })
			.then((response) => {
				setOrder(response.data);
			})
			.catch((err) => {
				console.log('Bir hata Meydana Geldi');
			});
	}, []);
	const getOrderDetail = orderDetail_id => {
		 let orderUrl = `http://localhost:3000/orderDetail/${orderDetail_id.toString()}`;
		 setOrderDetail([]);
			 axios.get(orderUrl,{headers: { Authorization: auth }}).then((response)=>{
				 setOrderDetail(response.data)
			 }).catch((err)=>{
				 console.log('Bir hata Meydana Geldi')
			 });
	}

	function hasOrder() {
		return (
			<div className="container">
				{order.map((item) => (
					<div className="card" key={item._id}>
						<div className="row ">
							<div className="col-sm-12">
								<div className="card-block">
									<h4 className="card-title">
										Sipariş Kodu : <span className="badge-info">{item._id}</span>
									</h4>
									{item.delivered === true ? (
										<p>Durum:Teslim Edildi</p>
									) : (
										<p>Durum : {item.inCargo === true ? 'Kargoda' : 'Sipariş Hazırlanıyor...'}</p>
									)}
									<h4>Toplam Fiyat:{item.totalPrice}</h4>
								</div>
							</div>
							<div className="col-sm-5">
								Alınan Ürünler :
								{item.products.map((product) => (
									<h3 key={product._id}>
										{product.productName} <span className="ml-1">{product.unitPrice}</span>{' '}
									</h3>
								))}
							</div>
							<button className="btn btn-sm" data-toggle="modal" data-target="#orderDetail" onClick={()=>getOrderDetail(item.orderDetail_id)}>
								Sipariş Detayı
							</button>
						</div>
					</div>
				))}
				{/* Modal */}
				<div
					class="modal fade"
					id="orderDetail"
					tabindex="-1"
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden="true"
				>
					<div class="modal-dialog modal-dialog-centered" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLongTitle">
									Sipariş Detayı
								</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<h4>{orderDetail.customerName}</h4>
								<h4>{orderDetail.customerSurname}</h4>
								<h4>{orderDetail.customerPhone}</h4>
								<h4>{orderDetail.customerEmail}</h4>
								<h4>{orderDetail.shippingAdress}</h4>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-secondary" data-dismiss="modal">
									Close
								</button>
								<button type="button" class="btn btn-primary">
									Save changes
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	return <>{hasOrder()}</>;
}

const mapStateToProps = (state) => {
	return {
		userInfo: state.userOperationsReducer,
	};
};
export default connect(mapStateToProps)(MyOrders);
