import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams(); // Access the 'id' parameter from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(`http://localhost:3001/api/v1/products/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch product. Status: ${response.status}`);
        }
        const productData = await response.json();
        setProduct(productData);
        console.log('Product data2:', productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }

    fetchProduct();
  }, [id]); // Use 'id' as a dependency to trigger the fetch when the URL parameter changes

  return (
    <div>
      <h2>Product Details</h2>
      {product && (
        <div>
          <p>Name: {product.name}</p>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          {/* Add other product details you want to display */}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
