import React from 'react';
import { useNavigate } from 'react-router-dom';
import products from './products';
import './ProductsPage.css';

const ProductsPage = ({ handleAddToCart }) => {
  const navigate = useNavigate();

  const displayProductDetails = (product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="productsContent">
      {products.map((product) => (
        <div key={product.id} className="productCard">
          <img className="productImage" src={product.image} alt="" />
          <div className="productDetails">
            <h5 className="productName">{product.name}</h5>
            <p className="productDescription">{product.description}</p>
            <p>Price: ${product.price}</p>
            <div className="productButtons">
              <button className="addToCart" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
              <button className="details" onClick={() => displayProductDetails(product)}>
                Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
