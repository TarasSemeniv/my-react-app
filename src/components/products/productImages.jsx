import React from 'react';

const ProductImages = ({ images, name, isLiked, handleLike, id }) => {
    const [image, SetImage] = React.useState(images[0]);
    const [hearted, SetHearted] = React.useState(isLiked || false);

    const handleImageNext = () => {
        const currentIndex = images.indexOf(image);
        const nextIndex = (currentIndex + 1) % images.length;
        SetImage(images[nextIndex]);
    }
    const handleImagePrev = () => {
        const currentIndex = images.indexOf(image);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        SetImage(images[prevIndex]);
    }

    return (
        <div className="product-images">
            <button className="arrow left" onClick={handleImagePrev}>&lt;</button>
            <img src={image} alt={name} />
            <button className="arrow right" onClick={handleImageNext}>&gt;</button>
            <button className="heart-btn" style={{ color: hearted ? 'red' : 'black' }} onClick={() => {handleLike(id); SetHearted(!hearted)}}>❤</button>
        </div>
    );
}

export default ProductImages;
