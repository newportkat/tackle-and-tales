import React from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import Placeholder from "../../images/placeholder.jpg"
import "./card.scss"

const Card = (item) => {
  const scrollUp = () => {
    window.scrollTo(0, 0)
  }

  const mainImg = item?.item?.attributes?.img?.data?.attributes?.url
  const secondImg = item?.item?.attributes?.img2?.data?.attributes?.url

  return (
    <div className="card">


      <div className="image">
        {item?.item?.attributes?.isNew && <div className="badge">NEW!</div>}
        <Link to={`/product/${item?.item?.id}`} onClick={scrollUp}>
          <img
            className="mainImg"
            src={import.meta.env.VITE_APP_UPLOAD_URL + mainImg}
            alt=""
          />
          <img
            className="secondImg"
            src={import.meta.env.VITE_APP_UPLOAD_URL + secondImg}
            alt=""
          />

        </Link>
      </div>

      <div className="details">
        <h4>
          {item?.item?.attributes?.sub_categories?.data[0]?.attributes?.title}
        </h4>
        <Link className="title" to={`/product/${item?.item?.id}`}>
          {item?.item?.attributes?.title}
        </Link>
        <div className="price">
          <span className="new">
            ${item?.item?.attributes?.price.toFixed(0)}
          </span>
          <span className="old">${item?.item?.attributes?.oldPrice}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
