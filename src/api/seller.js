export default {
    addProduct: function (postData) {
        return this.request_api_no_token("/product/add-product", postData);
    },
};
