import React, {useEffect} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {setProducts, removeSelectedProduct} from '../redux/actions/productActions'
import ProductComponent from './ProductComponent'


const ProductListing = () => {
	const products = useSelector(state => state.allProducts.products)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(removeSelectedProduct())
		fetchProducts()
	}, [])
	
	const fetchProducts = async () => {
		const response = await axios.get('https://fakestoreapi.com/products')
		.catch(err => console.log(err))

		dispatch(setProducts(response.data))
	}

	return (
		<div id="listing-products-div">
			{products.map(product => (
				<ProductComponent key={product.id} product={product} />
			))}
		</div>
	)
}

export default ProductListing