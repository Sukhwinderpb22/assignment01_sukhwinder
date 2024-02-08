import React from 'react';
import { Card, Button, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import products from './products';

const ProductsPage = ({ onAddToCart }) => {
  const navigate = useNavigate(); // Use useNavigate hook

  const onShowDetails = (product) => {
    navigate(`/Product/${product.id}`); // Use backticks for the template string
  };
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {products.map(product => (
        <Card key={product.id} style={{ width: '18rem', margin: '10px' }}>
          <CardImg top src={product.image} alt="Product image" />
          <CardBody>
            <CardTitle tag="h5">{product.name}</CardTitle>
            <CardText>{product.description}</CardText>
            <div className="d-flex justify-content-between">
              <Button onClick={() => onAddToCart(product)}>Add to Cart</Button>
              <Button onClick={() => onShowDetails(product)}>Details</Button>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default ProductsPage;