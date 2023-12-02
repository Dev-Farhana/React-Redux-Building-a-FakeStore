import { combineReducers } from "redux";
import { productsReducer, selectedProductReducer } from "./productReducers";

const reducers = combineReducers({
    allProducts : productsReducer,
    product: selectedProductReducer
})

export default reducers;

