import HomePage from "../views/Homepage/Homepage";
import ProductList from "../views/ProductList/ProductList";
import ProductDetail from "../views/ProductDetail/ProductDetail";
import CheckOut from "../views/CheckOut/CheckOut";
import Order from "../views/Order/Order";

export default [
    {
        path: "/product-detail/:productId",
        component: ProductDetail,
    },
    {
        path: "/orders",
        component: Order,
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
