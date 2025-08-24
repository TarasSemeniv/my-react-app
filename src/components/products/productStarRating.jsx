import React from 'react';

const ProductStarRating = ({rate}) => {
    console.log('ProductStarRating rendered');
    const [rating, setRating] = React.useState(rate || 0);

    const handleClick = (i) => {
        setRating(i + 1 === rating ? 0 : i + 1);
    }

    return (
        <div>
            {[...Array(5)].map((_, i) => (
                <span key={i} style={{ cursor: 'pointer', color: i < rating ? 'gold' : 'gray', userSelect: 'none'}} onClick={() => handleClick(i)}>★</span>
            ))}
        </div>
    );
}

export default React.memo(ProductStarRating);
