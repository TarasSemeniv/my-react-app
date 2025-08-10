

const productsReducer = (products, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            const productToAdd = {
                images: ["/images/product1.jpg", "/images/product2.jpg"],
                rating: 3,
                isLiked: false,
                ...action.payload
            };
            return [...products, productToAdd];
        case 'REMOVE_PRODUCT':
            return products.filter(product => product.id !== action.payload.id);
        case 'SET_PRODUCTS':
            return action.payload;
        case 'TOGGLE_LIKE':
            return products.map(product =>
                product.id === action.payload.id
                    ? { ...product, isLiked: !product.isLiked }
                    : product
            );
        default:
            return products;
    }
}

export default productsReducer;