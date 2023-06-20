import React from 'react';
import "./style/Cart.css";

const Cart = ({ cartItems, removeFromCart }) => {
  var total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];
    total = item.price * item.quantity + total;
  }

  return (
    <div className='ui container'>
      <h2>Cart</h2>
      {
        cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="ui vertical segment items">
            {cartItems.map((item) => (
              <div className="item product" key={item.id}>
                <img src={item.image} alt={item.title} style={{ width: "100px" }} />
                <div className='descrip'>
                  {item.title}
                </div>
                <div className='price'>
                  Quantity: {item.quantity}
                </div>
                <div className='price'>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <button
                  className="ui button red mini"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            ))
            }
            <div className="total">Total: ${total.toFixed(2)}</div>
          </div >
        )
      }
    </div >
  );
};

export default Cart;
