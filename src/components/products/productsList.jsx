import React from 'react';
import ProductItem from './productItem';
import './products.css';


const ProductsList = () => {
    return (
        <div className="products-list-container">
            <div>
                <h1>Products List</h1>
            </div>
            <div className="products-list">
                <ProductItem
                    image="/images/product1.jpg"
                    name="Product 1"
                    description="Description for Product 1"
                    price={29.99}
                />
                <ProductItem
                    image="/images/product2.jpg"
                    name="Product 2"
                    description="Description for Product 2"
                    price={39.99}
                />
                <ProductItem
                    image="/images/product3.jpg"
                    name="Product 3"
                    description="Description for Product 3"
                    price={49.99}
                />
                <ProductItem
                    image="/images/product4.jpg"
                    name="Product 4"
                    description="Description for Product 4"
                    price={19.99}
                />
            </div>
        </div>
    );
}

export default ProductsList;
