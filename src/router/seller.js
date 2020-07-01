import AddProduct from "../views/SellerDashboard/AddProduct/AddProduct";
import Products from "../views/SellerDashboard/Products/Products";
import Orders from "../views/SellerDashboard/Order/Order";
export default [
    {
        path: "/products/add-product",
        component: AddProduct,
    },
    {
        path: "/products/:_id",
        component: AddProduct,
    },
    {
        path: "/products/",
        component: Products,
    },
    {
        path: "/orders",
        component: Orders,
    },
];
