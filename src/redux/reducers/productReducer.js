import {ActionTypes} from '../constants/action-types'

const initialState = {
	products: [],
	product_selected: undefined
}

export const ProductReducer = (state = initialState, {type, payload}) => {
	switch(type){
		case ActionTypes.SET_PRODUCTS:
			return {...state,  products: payload}
		case ActionTypes.SELECTED_PRODUCT:
			return {...state, product_selected: payload}
		case ActionTypes.REMOVE_SELECTED_PRODUCT:
			return {...state, product_selected: undefined}
		default:
			return state
	}
}
