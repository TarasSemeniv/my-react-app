import React from 'react';
import { Link } from 'react-router'

const ProductAdd = () => {
    console.log('ProductAdd rendered');
    return (
        <div className="product-item" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link to="/productAdd" className="add-button">+</Link>
        </div>
    );
}

export default React.memo(ProductAdd);
