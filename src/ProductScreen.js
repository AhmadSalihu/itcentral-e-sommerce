import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import Rating from './Rating';
import { detailsProduct } from './ReduxStore/actions/productActions';


const ProductScreen = (props) => {
	const [qty, setQty] = useState(1);
	const dispatch = useDispatch();
	
	const productId = props.match.params.id;
	const productDetails = useSelector(state => state.productDetails)
	const { error, product, loading } = productDetails;

	useEffect(() => {
		dispatch(detailsProduct(productId))
	}, [dispatch, productId]);

	const addToCart = () => {
		props.history.push(`/cart/${productId}?qty=${qty}`);
	}

	return (
			<div>  
					{
				loading ? (
					<LoadingBox></LoadingBox>
				) : error ? (
						<MessageBox variant="danger">{error}</MessageBox>
					) : (
						
			<div className="row top">
			<div className="col-2">
						
				<img className="large" src={product.image} alt="" />
				</div>
				<div className="col-1">
					<div className="row">
						<ul>
							<li><h3>Name: {product.name}</h3></li>
							<li><Rating rating={product.rating} numReviews={product.numReviews}></Rating></li>
							<li>Price: ₦{product.price}</li>
							<li>Description:
							<p>{product.description}</p>
							</li>
							<li>
								<img className="medium" src={product.image} alt="" />
							</li>
						</ul>
					</div>
				</div>	
					<div className="col-1">
					<div className="card card-body">
								<ul>
							<div className="row">
									<div>Brand</div>
										<div>{product.brand}
										</div>
								</div> 
							<li><Rating rating={product.rating} numReviews={product.numReviews}></Rating> </li>
							<li>
							{
								product.countInStock > 0 && (
								<div className="row">
									<div>Price</div>
									<div>₦{product.price}</div>
								</div>						
								)
							}
								<div className="row">
									<div>Status</div>
									<div>{product.countInStock > 0 ? <span className="success">In Stock</span> : <span className="danger">Unavailable</span>}</div>
								</div>
								</li>
								<li>			
									{
										product.countInStock > 0 && (
										<>
											<div className="row">
												<div>Qty</div>
												<div>
													<select value={qty} onChange={e => setQty(e.target.value)}>
														{
															[...Array(product.countInStock).keys()].map((num) => (
																<option key={num + 1} value={num + 1}>{num + 1}</option>
															))
														}
													</select>
												</div>
											</div>
												<li><button onClick={addToCart} className="primary block">Add to Cart</button></li>
 										</>
									)
									}
							   </li>
						   </ul>
							</div>
						</div>
				  </div>			
						)
					}
			</div>	
	)
 }


export default ProductScreen
