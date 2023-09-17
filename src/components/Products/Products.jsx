import React, { useState, useEffect } from 'react';
import './products.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductDetails = () => {

  const [product, setProduct] = useState(null);
  const fetchProduct = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/v1/products/');
      const productData = response.data;
      setProduct(productData);
      console.log('Product data:', productData);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };
  
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <div className="product-container">
      {product && product.map(item => (

        <div key={item._id} className="product-card">
        <Link to={`/products/${item._id}`}>
          <img src={item.imageURL} alt={item.name} className="product-image" />
          <div className="product-info">
            <h3>{item.name}</h3>
            <p>Category: {item.category}</p>
            <p>Price: ${item.price}</p>
            <p>Description: {item.description}</p>
            <p>Manufacturer: {item.manufacturer}</p>
          </div>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProductDetails;
