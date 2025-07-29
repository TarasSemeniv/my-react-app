import React from 'react';
import ProductInfo from './productInfo';
const ProductItem = ({product}) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px'}}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>Price: ${product.price}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <ProductInfo manufacturer={product.manufacturer} country={product.country} />
                <a  href='/'>
                    <img style={{ width: '24px', height: '24px', margin: '16px 8px' }} src="/images/icon_pay.png" alt="Buy" />
                </a>
            </div>
        </div>
    );
}

export default ProductItem;
