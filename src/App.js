import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import ProductsPage from './ProductsPage';
import ProductDetail from './ProductDetail';
import CartPage from './CartPage';
import AccountPage from './AccountPage';
import products from './products';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      userDetails: {
        firstName: 'Sukhwinder',
        lastName: 'Singh',
        email: 'sukhwinders0004@gmail.com',
        mobileNumber: '289-260-9211',
        address: '45 falconridge drive, N2V0G1',
      },
      purchaseComplete: false,
    };
  }

  addItemInCart = (product) => {
    const { cart } = this.state;
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      this.setState({
        cart: cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item),
      });
    } else {
      this.setState({
        cart: [...cart, { ...product, quantity: 1 }],
      });
    }
  }
  updateCart = (product, quantity) => {
    const { cart } = this.state;
    if (quantity <= 0) {
      this.setState({
        cart: cart.filter(item => item.id !== product.id),
      });
    } else {
      this.setState({
        cart: cart.map(item => item.id === product.id ? { ...item, quantity } : item),
      });
    }
  }
  removeItemFromCart = (product) => {
    const { cart } = this.state;
    this.setState({
      cart: cart.filter(item => item.id !== product.id),
    });
  }
  updateUserDetails = (updatedUser) => {
    this.setState({
      userDetails: updatedUser,
    });
  }
  finalizePurchase = () => {
    this.setState({
      purchaseComplete: true,
    });
  }

  ProductDetailCombine = () => {
    const { id } = useParams();
    const { cart } = this.state;
    const product = cart.find(p => p.id.toString() === id);
    return <ProductDetail product={product} onAddToCart={this.addItemInCart} />;
  }

  get totalCartItems() {
    const { cart } = this.state;
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  render() {
    const { cart, userDetails, purchaseComplete } = this.state;

    return (
      <Router>
        <header className="header">
          <h1 className="logo">Shoe Outlet</h1>

          <nav className="navigation">
            <ul className="navigationList">
              <li className="navigationItem">
                <Link to="/" className="navigationLink">Home</Link>
              </li>
              <li className="navigationItem">
                <Link to="/cart" className="navigationLink">
                  Cart {this.totalCartItems > 0 && 
                  <span className="cart-count">({this.totalCartItems} items)</span>}
                </Link>
              </li>
              <li className="navigationItem">
                <Link to="/account" className="navigationLink">Account</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="productscollection">
        <Routes>
        <Route path="/" element={<ProductsPage products={products}
         handleAddToCart={this.addItemInCart} />} />
        <Route path="/product/:id" element={<this.ProductDetailCombine />} />
        <Route
              path="/cart"
              element={<CartPage cart={cart} handleUpdateCart={this.updateCart} 
              handleRemoveFromCart={this.removeItemFromCart}
               handleFinalizePurchase={this.finalizePurchase} 
               purchaseComplete={purchaseComplete} />}
          />
        <Route path="/account" element={<AccountPage userDetails={userDetails}
         handleUpdateUserDetails={this.updateUserDetails} />} />
        </Routes>
        </div>
        <footer className="footer">
        <p>@Sukhwinder Singh</p>
        </footer>
      </Router>
    );
  }
}

export default App;
