import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Nordic Chair", price: 50.00, quantity: 1, image: "/assets/images/product-1.png" },
    { id: 2, name: "Kruzo Aero Chair", price: 78.00, quantity: 2, image: "/assets/images/product-2.png" },
    { id: 3, name: "Ergonomic Chair", price: 43.00, quantity: 1, image: "/assets/images/product-3.png" }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity > 0) {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal;

  return (
    <>
      <div className="untree_co-section before-footer-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <h2 className="section-title text-center">Shopping Cart</h2>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <img src={item.image} alt="Image" className="img-fluid" style={{maxWidth: '80px'}} />
                        </td>
                        <td>
                          <h5>{item.name}</h5>
                        </td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>
                          <div className="d-flex align-items-center" style={{maxWidth: '120px'}}>
                            <button 
                              className="btn btn-outline-secondary btn-sm" 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              &minus;
                            </button>
                            <span className="mx-2">{item.quantity}</span>
                            <button 
                              className="btn btn-outline-secondary btn-sm" 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                        <td>
                          <button 
                            className="btn btn-danger btn-sm"
                            onClick={() => removeItem(item.id)}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-6 mb-3 mb-md-0">
                  <button className="btn btn-primary btn-sm">Update Cart</button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-outline-primary btn-sm">Continue Shopping</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <div className="text-center">
                    <h4>Cart Totals</h4>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Subtotal</span>
                      <strong>${subtotal.toFixed(2)}</strong>
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                      <span>Total</span>
                      <strong>${total.toFixed(2)}</strong>
                    </div>
                    <button className="btn btn-primary">Proceed To Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;