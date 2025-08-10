import { createBrowserRouter } from "react-router";
import ProductsList from "./components/products/productsList";
import App from "./App";
import ProductAddForm from "./components/products/ProductAddForm"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "products",
                element: <ProductsList />,
            },
            {
                path: "productAdd",
                element: <ProductAddForm />  
            }
        ]
    }
])

export default router;