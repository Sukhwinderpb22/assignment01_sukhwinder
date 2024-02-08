// ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import products from './products';
import { Button } from 'reactstrap';

const ProductDetail = ({ onAddToCart }) => {
  // Fetch the product ID from URL parameters if not passed as a prop
  const { id } = useParams();
  const product = products.find(p => p.id.toString() === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} style={{ width: '100%', maxWidth: '400px' }} />
      <p>{product.description}</p>
      <Button color="primary" onClick={() => onAddToCart(product)}>Add to Cart</Button>
    </div>
  );
};

export default ProductDetail;