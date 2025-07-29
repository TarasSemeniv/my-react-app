import React from 'react';
import ProductItem from './productItem';
import './products.css';
import {products} from './products.js';

const ProductsList = () => {
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
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductsList;
