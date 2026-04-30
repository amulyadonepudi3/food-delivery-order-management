import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const getMenu = () => axios.get(`${BASE_URL}/menu`);
export const placeOrder = (data) => axios.post(`${BASE_URL}/orders`, data);
export const getOrders = () => axios.get(`${BASE_URL}/orders`);