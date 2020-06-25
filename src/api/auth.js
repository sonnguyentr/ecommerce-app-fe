const auth = {
    register: function (postData) {
        return this.request_api_no_token("/auth/register", postData);
    },
    login: function (postData) {
        return this.request_api_no_token("/auth/login", postData);
    },
};

export default auth;
