import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Products = ({ product }) => {

	return (
		<div className="card">
			<Link to={`/product/${product._id}`}>
			<img  className="medium" src={product.image} alt={product.name} />
				</Link>
				<div className="card-body">
				<Link to={`/product/${product._id}`}>
					<div>{product.name}</div>
				</Link>
				<div>
					<Rating rating={product.rating} numReviews={product.numReviews}></Rating>
					<div className="row">
					 <div className="price">₦{product.price}</div>
					 <div className="cart"><i className="fa fa-cart-arrow-down"></i></div>	
				</div>
				</div>
			</div>
		</div>
	)
}

export default Products
