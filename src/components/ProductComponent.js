import React from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const ProductComponent = ({product: {id, title, image, price, category}}) => {
	const navigate = useNavigate()

	return (
		<div onClick={() => {navigate(`/product/${id}`)}} id="product-component">
			<h3>{title}</h3>
			<img src={image} />
		</div>
	)
}

export default ProductComponent