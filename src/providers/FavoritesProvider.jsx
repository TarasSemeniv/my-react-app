import React, { useEffect } from 'react';
import FavoritesContext from '../contexts/FavoritesContext';

const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = React.useState(JSON.parse(localStorage.getItem("favorites")) || []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (product) => {
        setFavorites((prev) =>
            prev.find((item) => item.id === product.id) ? prev : [...prev, product]
        );
    };

    const removeFavorite = (id) => {
        setFavorites((prev) => prev.filter((item) => item.id !== id));
    };



    return (
        <div>
            <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
                {children}
            </FavoritesContext.Provider>
        </div>
    );
}

export default FavoritesProvider;
