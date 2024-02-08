import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import ProductsPage from './ProductsPage';
import ProductDetail from './ProductDetail';
import CartPage from './CartPage';
import AccountPage from './AccountPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavItem, NavLink } from 'reactstrap';

const App = () => {
  const [cart, setCart] = useState([]);
  const [userDetails, setUserDetails] = useState({ name: '', email: '', address: '' });

  const handleAddToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleUpdateCart = (product, quantity) => {
    if (quantity <= 0) {
      setCart(cart.filter(item => item.id !== product.id));
    } else {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity } : item));
    }
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  const handleUpdateUserDetails = (details) => {
    setUserDetails(details);
  };

  // Wrapper component to pass additional props
  const ProductDetailWrapper = () => {
    const { id } = useParams();
    const product = cart.find(p => p.id.toString() === id);
    return <ProductDetail product={product} onAddToCart={handleAddToCart} />;
  };

  return (
    <Router>
      <Navbar color="light" light expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/cart">Cart</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/account">Account</NavLink>
          </NavItem>
        </Nav>
      </Navbar>

      <Container>
        <Routes>
          <Route path="/" element={<ProductsPage onAddToCart={handleAddToCart} />} />
          <Route path="/product/:id" element={<ProductDetailWrapper />} />
          <Route path="/cart" element={<CartPage cart={cart} onUpdateCart={handleUpdateCart} onRemoveFromCart={handleRemoveFromCart} />} />
          <Route path="/account" element={<AccountPage userDetails={userDetails} onUpdateUserDetails={handleUpdateUserDetails} />} />
        </Routes>
      </Container>

      {/* Footer Section */}
      <footer className="text-center mt-4">
        <p>Follow us on social media:</p>
        <Nav className="justify-content-center">
          <NavItem>
            <NavLink href="https://twitter.com/">Twitter</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://facebook.com/">Facebook</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://instagram.com/">Instagram</NavLink>
          </NavItem>
        </Nav>
      </footer>
    </Router>
  );
};

export default App;
