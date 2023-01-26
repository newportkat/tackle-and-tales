import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import { addToCart } from "../../redux/cartReducer"
import "./product.scss"

const Product = () => {
  const id = useParams().id
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`)
  const [quantity, setQuantity] = useState(1)
  const [selectedImg, setSelectedImg] = useState("img")

  const products = useSelector((state) => state.cart.products)
  const dispatch = useDispatch()

  const imgOne = data?.attributes?.img?.data?.attributes?.url
  const imgTwo = data?.attributes?.img2?.data?.attributes?.url
  const imgThree = data?.attributes?.img3?.data?.attributes?.url

  return (
    <div className="product">
      {error ? (
        "Something went wrong!"
      ) : loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="container">
          <div className="left">
            <img
              src={
                import.meta.env.VITE_APP_UPLOAD_URL +
                data?.attributes[selectedImg]?.data?.attributes?.url
              }
              alt=""
            />

            <div className="images">
              <img
                src={import.meta.env.VITE_APP_UPLOAD_URL + imgOne}
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={import.meta.env.VITE_APP_UPLOAD_URL + imgTwo}
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
              <img
                src={import.meta.env.VITE_APP_UPLOAD_URL + imgThree}
                alt=""
                onClick={(e) => setSelectedImg("img3")}
              />
            </div>
          </div>

          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <h3>${data?.attributes?.price}</h3>

            <div className="add">
              <div className="quantity">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity((prev) => prev + 1)}>
                  +
                </button>
              </div>
              <button
                className="atc"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: data.id,
                      title: data.attributes.title,
                      desc: data.attributes.desc,
                      price: data.attributes.price,
                      img: data.attributes.img.data.attributes.url,
                      quantity,
                    })
                  )
                }
              >
                ADD TO CART
              </button>
            </div>

            <div className="info">
              <h4>PRODUCT INFO</h4>
              <p>{data?.attributes?.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Product
