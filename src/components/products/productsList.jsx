import React, { useEffect } from 'react';
import ProductItem from './productItem';
import './products.css';
import {CONST_PRODUCTS} from './products.js';
import ProductAdd from './productAdd';
import productsReducer from './productReducer';
import ProductSort from './productSort.jsx';
import ProductFilter from './productFilter.jsx';

const ProductsList = () => {
    const [products, dispatch] = React.useReducer(productsReducer, []);
    const [sort, setSort] = React.useState('Price');
    const [sortDirection, setSortDirection] = React.useState('Up');
    const [filter, setFilter] = React.useState({ type: 'All', value: null });

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

    const sortObject = {
        Price: (a, b) => a.price - b.price,
        Rating: (a, b) => b.rating - a.rating,
        Name: (a, b) => a.name.localeCompare(b.name),
    };

    const filterObject = {
        All: () => true,
        ByCountry: (country) => (product) => product.country === country,
    }

    return (
        <div className="products-list-container">
            <div>
                <h1>Products List</h1>
                
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '40px' }}>
                <ProductSort sort={sort} setSort={setSort} sortDirection={sortDirection} setSortDirection={setSortDirection} />
                <ProductFilter filter={filter} setFilter={setFilter} />
            </div>
            <div className="products-list">
                {products.sort(sortDirection==="Up" ? sortObject[sort] : (a, b) => -sortObject[sort](a, b))
                    .filter(filter.type === 'All' ? filterObject.All : filterObject.ByCountry(filter.value))
                    .map(product => (
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
