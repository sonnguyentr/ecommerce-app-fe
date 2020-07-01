import axios from "axios";
import { config } from "../constant";
import store from "../store/store";

const state = store.getState();
const token = state.user && state.user.token;
// export default api;
const instance = axios.create({
    baseURL: config.host + "/api",
    headers: {
        Authorization: token && "Bearer " + token,
    },
});

export default {
    setToken: (token) => {
        instance.defaults.headers["Authorization"] = "Bearer " + token;
    },
    register: ({ name, email, password }) => {
        return instance.post("auth/register", { name, email, password });
    },
    login: ({ email, password }) => {
        return instance.post("/auth/login", { email, password });
    },
    getListProduct: () => {
        return instance.get("/products");
    },
    getProductDetail: (_id) => {
        return instance.get("/products/" + _id);
    },
    addProduct: (postData) => {
        return instance.post("/products/add-product", postData);
    },
    removeProduct: (_id) => {
        return instance.delete("/products/" + _id);
    },
    editProduct: (_id, postData) => {
        return instance.put("/products/" + _id, postData);
    },
    createOrder: ({ customerId, products }) => {
        return instance.post("/orders", { customerId, products });
    },
    getListOrder: () => {
        return instance.get("/orders");
    },
    cancelOrder: ({ order_id }) => {
        return instance.post("/orders/cancel", { order_id });
    },
    updateOrder: ({ order_id, status }) => {
        return instance.put("/orders/" + order_id, { status });
    },
};
