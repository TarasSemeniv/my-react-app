import React, { useEffect } from 'react';
import ProductItem from './productItem';
import './products.css';
import {CONST_PRODUCTS} from './products.js';
import ProductAdd from './productAdd';
import productsReducer from './productReducer';

const ProductsList = () => {
    const [products, dispatch] = React.useReducer(productsReducer, []);

    useEffect(() => {
        const storedProducts = localStorage.getItem('products');
        dispatch({ type: 'SET_PRODUCTS', payload: storedProducts ? JSON.parse(storedProducts) : CONST_PRODUCTS });
    }, []);

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    const handleLike = (id) => {
        dispatch({ type: 'TOGGLE_LIKE', payload: { id } });
    };

    return (
        <div className="products-list-container">
            <div>
                <h1>Products List</h1>
            </div>
            <div className="products-list">
                {products.map(product => (
                    <ProductItem 
                        key={product.id} 
                        product={product}
                        handleLike={handleLike}
                    />
                ))}
                <ProductAdd  />
            </div>
        </div>
    );
}

export default ProductsList;
