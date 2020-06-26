export default {
    getListProduct: function (){
        return this.request_api_no_token("/product")
    },
    getProductDetail: function (_id){
        return this.request_api_no_token("/product/" + _id)
    }
}