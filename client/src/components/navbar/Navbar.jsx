import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import Logo from "../../images/logo.png"
import Cart from "../cart/Cart"
import "./navbar.scss"

const Navbar = () => {
  const { data, loading, error } = useFetch("/categories?populate=*")
  const [showMenu, setShowMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)

  if (showMenu) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "visible"
  }

  const products = useSelector((state) => state.cart.products)

  const scrollUp = () => {
    window.scrollTo(0, 0)
  }

  const toggleMenu = () => {
    setShowMenu((prev) => !prev)
  }

  const toggleCart = () => {
    setShowCart((prev) => !prev)
  }

  const mobileMenuAction = () => {
    toggleMenu()
    scrollUp()
  }

  return (
    <nav className="navbar">
      {showCart && <Cart toggleCart={toggleCart} />}
      <div
        className="popout"
        style={{ transform: `translateY(-${showMenu ? "0" : "100vh"})` }}
      >
        <div className="header">
          <div className="close">
            <CloseRoundedIcon className="x" onClick={mobileMenuAction} />
          </div>
          <h1>CATEGORIES</h1>
          <div className="menu-links">
            {data?.map((item) => (
              <Link
                className="menu-link"
                to={`/products/${item.id}`}
                key={item.id}
                onClick={toggleMenu}
              >
                {item.attributes.title}
              </Link>
            ))}
          </div>
        </div>
        <Link className="menu-logo" to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>

      <div className="top">
        <div className="outside" onClick={toggleMenu}>
          <MenuOutlinedIcon className="inside" />
        </div>

        <Link className="logo" to="/">
          <img src={Logo} alt="" />
        </Link>

        <div className="shopping" onClick={toggleCart}>
          <ShoppingCartIcon className="bag" />
          <div className="number">{products.length}</div>
        </div>
      </div>

      <div className="bottom">
        {data?.map((item) => (
          <Link className="link" to={`/products/${item.id}`} key={item.id}>
            {item.attributes.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
