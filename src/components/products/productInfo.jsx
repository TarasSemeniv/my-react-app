import React from 'react';

const ProductInfo = ({ manufacturer, country }) => {

    const [isVisible, setIsVisible] = React.useState(false);

    
    return (
        <div style={{ position: 'relative', zIndex: 1 }}>
            <button className='info-button' style={{margin: '12px 0'}} onClick={() => setIsVisible(!isVisible)}>Info</button>
            {isVisible && (
                <div style={{ position: 'absolute', backgroundColor: '#fff', border: '1px solid #ccc', 
                                padding: '10px', width: 'fit-content', whiteSpace: 'nowrap' }}>
                    <span>Manufacturer: {manufacturer}</span>
                    <br />
                    <span>Country: {country}</span>
                </div>
            )}
        </div>
    );
}

export default ProductInfo;
