import React from 'react';
import { Button, ListGroup, ListGroupItem, Input } from 'reactstrap';

const CartPage = ({ cart, onUpdateCart, onRemoveFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ListGroup>
        {cart.map((item, index) => (
          <ListGroupItem key={index}>
            {item.name} - ${item.price} x 
            <Input
              type="number"
              value={item.quantity}
              onChange={(e) => onUpdateCart(item, parseInt(e.target.value))}
              style={{ width: '60px', display: 'inline', margin: '0 10px' }}
            />
            <Button color="danger" onClick={() => onRemoveFromCart(item)}>Remove</Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default CartPage;