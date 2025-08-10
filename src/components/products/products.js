const images = [
    ['/images/product1.jpg', '/images/product2.jpg'], 
    ['/images/product2.jpg'], 
    ['/images/product3.jpg'], 
    ['/images/product4.jpg']
];

const CONST_PRODUCTS = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1', 
        price: 29.99, images: images[0], manufacturer: 'Manufacturer 1', country: 'USA', rating: 4, isLiked: false },
    { id: 2, name: 'Product 2', description: 'Description for Product 2', 
        price: 39.99, images: images[1], manufacturer: 'Manufacturer 2', country: 'Germany', rating: 5, isLiked: false },
    { id: 3, name: 'Product 3', description: 'Description for Product 3', 
        price: 49.99, images: images[2], manufacturer: 'Manufacturer 3', country: 'Japan', rating: 3, isLiked: true },
    { id: 4, name: 'Product 4', description: 'Description for Product 4', 
        price: 19.99, images: images[3], manufacturer: 'Manufacturer 4', country: 'Italy', rating: 4, isLiked: false }
];

export { CONST_PRODUCTS };