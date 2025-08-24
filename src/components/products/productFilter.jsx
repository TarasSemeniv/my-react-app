import React from 'react';
import { COUNTRYS } from './products.js';

const ProductFilter = ({ filter, setFilter }) => {
    console.log('ProductFilter rendered');
    const handleCountryChange = (e) => {
        if (e.target.value === 'All') {
            setFilter({ type: 'All', value: null });
            return;
        }
        else {
            setFilter({ type: 'ByCountry', value: e.target.value });
        }
    };

    return (
        <div className='product-filter'>
            <span>Filter Products</span>
            <select value={filter.value || 'All'} onChange={handleCountryChange}>
                    <option value="All">All</option>
                    {COUNTRYS.map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
        </div>
    );
}

export default React.memo(ProductFilter);
