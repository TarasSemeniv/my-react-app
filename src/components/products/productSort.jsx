import React from 'react';

const ProductSort = ({ sort, setSort, sortDirection, setSortDirection }) => {
    console.log('ProductSort rendered');
    return (
        <div>
            <div className="product-filter">
            <span>Sort by:</span>
            <select value={sortDirection} onChange={(e) => setSortDirection(e.target.value)}>
                <option value="Up">↑</option>
                <option value="Down">↓</option>
            </select>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="Price">Price</option>
                <option value="Rating">Rating</option>
                <option value="Name">Name</option>
            </select>
        </div>
        </div>
    );
}

export default React.memo(ProductSort);
