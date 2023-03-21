import {combineReducers} from 'redux'
import {ProductReducer, SelectedProductReducer} from './productReducer'

export const reducers = combineReducers({
	allProducts: ProductReducer,
})