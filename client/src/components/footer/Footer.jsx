import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as Amex } from "../../images/amex.svg"
import { ReactComponent as Bitcoin } from "../../images/bitcoin.svg"
import { ReactComponent as Maestro } from "../../images/maestro.svg"
import { ReactComponent as Mastercard } from "../../images/mastercard.svg"
import { ReactComponent as Paypal } from "../../images/paypal.svg"
import { ReactComponent as Visa } from "../../images/visa.svg"
import "./footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <div className="left">
          <h2>TACKLE & TALES</h2>
          <Link className="link">About Us</Link>
          <Link className="link">Find a Store</Link>
          <Link className="link">Gift Cards</Link>
          <Link className="link">Careers</Link>
        </div>
        <div className="right">
          <h2>POPULAR BRANDS</h2>
          <Link className="link">Fins & Grins</Link>
          <Link className="link">Hello Mermaid</Link>
          <Link className="link">Jumbo Jaws</Link>
          <Link className="link">Kraken's Claw</Link>
        </div>
      </div>
      <div className="payments">
        <h2>PAYMENT OPTIONS</h2>
        <div className="icons">
          <Mastercard className="option" />
          <Visa className="option" />
          <Amex className="option" />
          <Maestro className="option" />
          <Paypal className="option" />
          <Bitcoin className="option" />
        </div>
      </div>
      <div className="conditions">
        <p>© 2022 Tackle & Tales</p>
        <Link className="terms">Privacy Policy</Link>
        <Link className="terms">Terms & Conditions</Link>
      </div>
    </div>
  )
}

export default Footer
