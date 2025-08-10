import React from 'react';
import ProductInfo from './productInfo';
import ProductImages from './productImages';
import ProductStarRating from './productStarRating';

const ProductItem = ({product, handleLike}) => {
    return (
        <div className='product-item'>
            <ProductImages images={product.images} name={product.name} isLiked={product.isLiked} handleLike={handleLike} id={product.id} />
            <h4>{product.name}</h4>
            <p>Price: ${product.price}</p>
            <ProductStarRating rate={product.rating} />
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
