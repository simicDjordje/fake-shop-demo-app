import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {selectedProduct} from '../redux/actions/productActions'

const ProductDetail = () => {
	const {id} = useParams()
	const product = useSelector(state => state.allProducts.product_selected)
	const dispatch = useDispatch()

	useEffect(()=>{
		fetchProductDetail()
	}, [])

	const fetchProductDetail = async () => {
		const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
		.catch(err => console.log(err))

		dispatch(selectedProduct(response.data))
	}

	return (
			product === undefined ? (
				<div>
					<h3>Loading...</h3>
				</div>
			) : (
				 <div id="product-detail-div">
		            <div id="product-detail-image">
		                <img src={product.image} />
		            </div>
		            <div id="product-detail-info">
		                <div>
		                    <h3>{product.title}</h3>
		                    <p>{product.description}</p>
		                    <hr></hr>
		                    <p>{product.price} $</p>
		                </div>
		            </div>
		        </div>
			)
			
	)
}

export default ProductDetail