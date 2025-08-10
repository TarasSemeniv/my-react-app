import React, { useEffect, useState} from 'react';
import productsReducer from './productReducer';
import { Link } from 'react-router';

const ProductForm = () => {
    const [products, dispatch] = React.useReducer(productsReducer, []);
    const [form, setForm] = useState({ name: '', price: '', description: '' });

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    dispatch({ type: 'SET_PRODUCTS', payload: storedProducts ? JSON.parse(storedProducts) : [] });
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const submit = () => {
    const newProduct = {
      id: Date.now(),
      name: form.name,
      price: Number(form.price),  
      description: form.description
    };
    dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
  };

    return (
        <div className='product-form'>
            <h2>Add new product</h2>
            <div>
              <label htmlFor="name">Product Name</label>
              <input type="text" id="name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder='Enter product name' />
            </div>
            <div>
              <label htmlFor="price">Product Price</label>
              <input type="number" id="price" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} placeholder='Enter product price' />
            </div>
            <div>
              <label htmlFor="description">Product Description</label>
              <input type="text" id="description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder='Enter product description' />
            </div>
            <Link onClick={submit} to="/products">Submit</Link>
        </div>
    );
};

export default ProductForm;