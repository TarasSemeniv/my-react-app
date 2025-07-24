import React from 'react';
const ProductItem = (props) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px'}}>
            <img src={props.image} alt={props.name} />
            <h4>{props.name}</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Price: ${props.price}</p>
                <a href='/'>
                    <img style={{ width: '24px', height: '24px', margin: '16px 8px' }} src="/images/icon_pay.png" alt="Buy" />
                </a>
            </div>
        </div>
    );
}

export default ProductItem;
