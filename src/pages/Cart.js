import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import PageHeader from "../components/pageHeader";
import { Link } from "react-router-dom";

const Cart = () => {
  const items = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(items);

  const totalAmount = items.reduce(
    (acc, curr) => acc + (curr.price / 100) * curr.amount,
    0
  );

  console.log(totalAmount);

  const increaseQuantity = (productId, colorId) => {
    const updatedCart = cart.map((item) => {
      return item.id === productId && item.color === colorId
        ? { ...item, amount: item.amount + 1 }
        : item;
    });
    setCart(updatedCart);
    const updatedCartAsString = JSON.stringify(updatedCart);
    localStorage.setItem("cart", updatedCartAsString);
  };

  const decreaseQuantity = (productId, colorId) => {
    const updatedCart = cart.map((item) => {
      return item.id === productId && item.color === colorId
        ? { ...item, amount: item.amount - 1 }
        : item;
    });
    setCart(updatedCart);
    const updatedCartAsString = JSON.stringify(updatedCart);
    localStorage.setItem("cart", updatedCartAsString);
  };

  const deleteItem = (productId, colorId) => {
    const updatedCart = cart.filter((item) => {
      return item.id !== productId || item.color !== colorId;
    });
    console.log(cart, updatedCart);
    setCart(updatedCart);
    const updatedCartAsString = JSON.stringify(updatedCart);
    localStorage.setItem("cart", updatedCartAsString);
  };

  return (
    <section className="cart">
      <PageHeader title="Cart" />
      {cart.length ? (
        <div className="container">
          <div className="text">
            <p>Item</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          <span className="underline"></span>
          {items &&
            cart.map((item, index) => {
              return (
                <div className="cart-products" key={index}>
                  <div className="product-info">
                    <img src={item.image} alt="" className="img" />
                    <div className="product-info-text">
                      <p className="name">{item.name}</p>
                      <p className="color">Color: </p>
                      <button
                        className="color-sel"
                        style={{ background: `${item.color}` }}
                      ></button>
                    </div>
                  </div>
                  <p className="price">${item.price / 100}</p>
                  <div className="quantity-btn">
                    <button
                      type="button"
                      className="decrease"
                      onClick={() => {
                        if (item.amount === 1) return;
                        decreaseQuantity(item.id, item.color);
                      }}
                    >
                      <BiMinus />
                    </button>
                    <span> {item.amount} </span>
                    <button
                      type="button"
                      className="increase"
                      onClick={() => increaseQuantity(item.id, item.color)}
                    >
                      <BiPlus />
                    </button>
                  </div>
                  <div className="subtotal-delete">
                    <span className="subtotal">
                      ${(item.price / 100) * item.amount}
                    </span>
                    <MdDelete
                      className="delete-item"
                      onClick={() => deleteItem(item.id, item.color)}
                    />
                  </div>
                </div>
              );
            })}
          <div className="underline"></div>
          <div className="link-container">
            <Link to="/products">Continue Shopping</Link>
            <button
              type="button"
              className="btn"
              onClick={() => {
                localStorage.setItem("cart", JSON.stringify([]));
                setCart([]);
              }}
            >
              Clear Shopping Cart
            </button>
          </div>
          <div className="total-container">
            <div className="total">
              <p className="subtotal-price">
                Subtotal : <span>${totalAmount}</span>
              </p>
              <p>
                Shipping Fee: <span>$69.69</span>
              </p>
              <div className="underline"></div>
              <p className="order-total">
                Order Total: <span>${totalAmount + 69.69}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <h2>Your cart is empty</h2>
      )}
    </section>
  );
};
export default Cart;
