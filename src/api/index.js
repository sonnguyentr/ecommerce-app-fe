import axios from "axios";
import { config } from "../constant";
import auth from "./auth";
import seller from "./seller";
import product from "./product";

const token = "";
const api = {
    base: config.host + "/api",
    request_api: async function (path_api, postData = {}) {
        return axios({
            url: this.base + path_api,
            method: Object["keys"](postData)["length"] ? "POST" : "GET",
            data: postData,
            headers: {
                Authorization: token && "Bearer " + token,
            },
        })
            .then((result) => {
                return { data: result.data, status: result.status };
            })
            .catch((error) => {
                console.log("request error", error);
                if (error.response) {
                    return {
                        ...error.response.data,
                        status: error.response.status,
                    };
                }
            });
    },
    request_api_no_token: async function (path_api, postData = {}) {
        return axios({
            url: this.base + path_api,
            method: Object["keys"](postData)["length"] ? "POST" : "GET",
            data: postData,
        })
            .then((result) => {
                return { data: result.data, status: result.status };
            })
            .catch((error) => {
                console.log("request error", error);
                if (error.response) {
                    return {
                        ...error.response.data,
                        status: error.response.status,
                    };
                }
            });
    },
    axios,
    ...auth,
    ...seller,
    ...product,
};
export default api;
