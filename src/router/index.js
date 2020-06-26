import HomePage from "../views/Homepage/Homepage";
import ProductList from "../views/ProductList/ProductList";
import ProductDetail from "../views/ProductDetail/ProductDetail";
import CheckOut from "../views/CheckOut/CheckOut";

export default [
    {
        path: "/product-detail/:title",
        component: ProductDetail,
    },
    {
        path: "/check-out",
        component: CheckOut,
    },
    {
        path: "/:routeName",
        component: ProductList,
    },
    {
        path: "/",
        component: HomePage,
    },
];
