import React, { useEffect } from 'react';
import { useContext } from 'react';
import FavoritesContext from '../contexts/FavoritesContext';
import ProductItem from '../components/products/productItem';

const FavoritesList = () => {
    const { favorites, dispatch } = useContext(FavoritesContext);


    const handleLike = (id) => {
        dispatch({ type: 'TOGGLE_LIKE', payload: { id } });
    }

    return (
        <div className="products-list-container">
            <h1>Favorite Products</h1>
            <div className="products-list">
                {favorites.length === 0 ? (
                    <p>No favorite products yet</p>
                ) : (
                    favorites.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))
                )}
            </div>
        </div>
    );
}

export default FavoritesList;
