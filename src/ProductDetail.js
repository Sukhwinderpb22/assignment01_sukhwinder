import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import products from './products';
import './ProductDetail.css';

function ProductDetail({ onAddToCart }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products.find(p => p.id.toString() === id);

  if (!product) {
    return <div className="productDetail">Product not found</div>;
  }

  const handleAddToCart = () => {
    onAddToCart(product);
    navigate('/cart');
  };

  return (
    <div className="productDetail">
      <h2>{product.name}</h2>
      <img src={`/${product.image}`} alt={product.name} />

      <p>{product.description}</p>
      <p>Price: ${product.price}</p>

      <div className="addToCartButton">
        <Button color="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductDetail;
