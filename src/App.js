import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import ProductListing from './components/ProductListing'
import ProductDetail from './components/ProductDetail'
import './style.css'

const App = () => {
	return (
		<div>
			<Header />
			<div id="container-div">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<ProductListing />} />
						<Route path="/product/:id" element={<ProductDetail />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	)
}

export default App