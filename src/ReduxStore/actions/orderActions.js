import { CART_EMPTY, ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS } from "../Constant/orderConstant";
import Axios from 'axios';
import {api} from "../../config/config"

export const createdOrder = (order) => async (dispatch, getState) => {
	dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
	try {
		const { userSignin: { userInfo } } = getState();
		const { data } = await Axios.post(`${api}/orders`, order, {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		});
			dispatch({ type: ORDER_CREATE_SUCCESS, paylaod: data.order });
		dispatch({ type: CART_EMPTY });
		console.log(order)
	} catch (error) {
		localStorage.removeItem("cartItems");
		dispatch({
			type: ORDER_CREATE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
}