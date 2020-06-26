const auth = {
    register: function (postData) {
        return this.request_api_no_token("/auth/register", postData);
    },
};

export default auth;
