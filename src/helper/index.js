export function buildParamQuery(params) {
    let esc = encodeURIComponent;
    let key_array = [];
    for (const key in params) {
        if (
            params.hasOwnProperty(key) &&
            (params[key] || params[key] === false || params[key] === 0)
        ) {
            key_array.push(key);
        }
    }
    let query = key_array.map((k) => esc(k) + "=" + esc(params[k])).join("&");
    return query;
}
