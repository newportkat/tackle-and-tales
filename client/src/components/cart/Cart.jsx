import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeItem, resetCart } from "../../redux/cartReducer"
import "./cart.scss"

const Cart = ({ toggleCart }) => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart.products)

  const totalPrice = () => {
    let total = 0
    products.forEach((item) => (total += item.quantity * item.price))
    return total.toFixed(2)
  }

  const checkoutAlert = () => {
    alert("I can't take your money, this is not a real store!")
  }

  return (
    <div className="cart">
      <CloseRoundedIcon className="close-cart" onClick={toggleCart} />

      <h1>YOUR CART</h1>

      {products.map((item) => (
        <div className="item" key={item.id}>
          <img src={import.meta.env.VITE_APP_UPLOAD_URL + item.img} />

          <div className="purchase">
            <h3>{item.title}</h3>
            <div className="subtotal">
              <p>
                {item.quantity} x ${item.price}
              </p>
              <DeleteForeverIcon
                className="delete"
                onClick={() => dispatch(removeItem(item.id))}
              />
            </div>
          </div>
        </div>
      ))}

      <div className="total">
        <h4>TOTAL</h4>
        <p>${totalPrice()}</p>
      </div>
      <h6 onClick={() => dispatch(resetCart())}>Reset Cart</h6>
      <button onClick={checkoutAlert}>CHECKOUT</button>
    </div>
  )
}

export default Cart
