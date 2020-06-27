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
    register: ({ name, email, password }) => {
        return instance.post("auth/register", { name, email, password });
    },
    login: ({ email, password }) => {
        return instance.post("/auth/login", { email, password });
    },
    getListProduct: () => {
        return instance.get("/product");
    },
    getProductDetail: function (_id) {
        return instance.get("/product/" + _id);
    },
    addProduct: function (postData) {
        return instance.post("/product/add-product", postData);
    },
};
