import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function ProductDetail() {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const url = `http://localhost:3000/products/product/${id}`
useEffect(() => {
	axios(url)
	.then((response) => setProduct(response.data))
	.catch((err) => console.log(err));
}, [setProduct])
 console.log(product);
	return (
		<section class="mb-5">
			<div class="row">
				<div class="col-md-12 mb-4 mb-md-0">
					<div class="mdb-lightbox">
						<div class="row product-gallery mx-1">
							<div class="col-md-12 mb-4 mb-md-0">
								<div class="mdb-lightbox">
									<div class="row product-gallery mx-1">
										<div class="col-6 mb-0 d-flex justify-content-end">
											<figure class="view overlay rounded z-depth-1 main-img">
													<img
												 		src={product.productImage}
														class="img-fluid z-depth-1"
													/>
						 
											</figure>
										</div>
										<div class="col-6 d-flex align-items-center">
											<div class="row">
												<div class="col-md-6">
													<h5>{product.productName}</h5>
													<p class="mb-2 text-muted text-uppercase small">Shirts</p>

													<p>
														<span class="mr-1">
															<strong>{product.unitPrice} TL</strong>
														</span>
													</p>
													<p class="pt-1">
														Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
														sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim
														perferendis voluptates laboriosam. Distinctio, officia quis dolore quos
														sapiente tempore alias.
													</p>
													<hr />
													<button type="button" class="btn btn-info btn-md mr-1 mb-2">
														<i class="fa fa-shopping-cart pr-2"></i>Add to cart{' '}
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProductDetail;
