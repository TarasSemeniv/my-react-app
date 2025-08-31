import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Router, RouterProvider } from 'react-router';
import router from './router';
import FavoritesProvider from './providers/FavoritesProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoritesProvider>
    <RouterProvider router={router} />
  </FavoritesProvider>
);
