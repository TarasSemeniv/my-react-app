import { createBrowserRouter } from "react-router";
import ProductsList from "./components/products/productsList";
import App from "./App";
import ProductAddForm from "./components/products/ProductAddForm"
import FavoritesList from "./pages/FavoritesList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <ProductsList />,
            },
            {
                path: "productAdd",
                element: <ProductAddForm />  
            },
            {
                path: "favorites",
                element: <FavoritesList />,
            }
        ]
    }
])

export default router;