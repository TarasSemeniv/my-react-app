import React from 'react';
import ProductInfo from './productInfo';
import ProductImages from './productImages';
import ProductStarRating from './productStarRating';

const ProductItem = ({product, handleLike}) => {
    console.log(`ProductItem {${product.id}} rendered`);
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

export default React.memo(ProductItem, (prevProps, nextProps) => {
    return prevProps.product.id === nextProps.product.id &&
    prevProps.product.isLiked === nextProps.product.isLiked &&
    prevProps.product.images === nextProps.product.images &&
    prevProps.product.name === nextProps.product.name &&
    prevProps.product.price === nextProps.product.price &&
    prevProps.product.rating === nextProps.product.rating &&
    prevProps.product.manufacturer === nextProps.product.manufacturer &&
    prevProps.product.country === nextProps.product.country;
});
