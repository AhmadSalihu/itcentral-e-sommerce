import React, { useEffect } from 'react';
import Products from './Products';
import LoadingBox from './LoadingBox'
import MessageBox from './MessageBox'
import { listProduct } from './ReduxStore/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';


const HomeScreen = () => {
	const productList = useSelector((state) => state.productList)
	const { error, products, loading } = productList;
	const dispatch = useDispatch();
    
	useEffect(() => {
		dispatch(listProduct());
	}, [dispatch])


	return (
				<div>
					{
				loading ? (
					<LoadingBox></LoadingBox>
				) : error ? (
						<MessageBox variant="danger">{error}</MessageBox>
					) : (
							<div className="row center">
								{
									products.map((product) => (
										<Products key={product._id} product={product} />
									))
								}
							</div>
						)
					}
			</div>
	)
}



export default HomeScreen;