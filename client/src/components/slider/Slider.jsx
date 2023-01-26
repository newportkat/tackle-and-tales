import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined"
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined"
import React, { useState } from "react"
import Four from "../../images/four.jpg"
import One from "../../images/one.jpg"
import Three from "../../images/three.jpg"
import Two from "../../images/two.jpg"
import {Link} from "react-router-dom"

import { Hidden } from "@mui/material"
import "./slider.scss"

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const images = [One, Two, Three, Four]

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 0 : (prev) => prev - 1)
  }
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === images.length - 1
        ? images.length - 1
        : (prev) => prev + 1
    )
  }

  const hidden = { cursor: "default" }
  const opacity = { opacity: 0 }

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <div className="slide">
          <Link to="/products/1">
          <button>SHOP RODS</button>
          </Link>
          <img src={images[0]} alt="" />
        </div>
        <div className="slide">
          <Link to="products/2">
          <button>SHOP REELS</button>
          </Link>
          <img src={images[1]} alt="" />
        </div>
        <div className="slide">
          <Link to="/products/4">
          <button>SHOP KAYAKS</button>
          </Link>
          <img src={images[2]} alt="" />
        </div>
        <div className="slide">
          <Link to="products/3">
          <button>SHOP LURES</button>
          </Link>
          <img src={images[3]} alt="" />
        </div>
      </div>
      <div className="icons">
        <div
          className="icon"
          onClick={prevSlide}
          style={
            currentSlide === 0
              ? { ...opacity, ...hidden }
              : { visiblity: "visible" }
          }
        >
          <KeyboardArrowLeftOutlinedIcon className="arrows" />
        </div>
        <div
          className="icon"
          onClick={nextSlide}
          style={
            currentSlide === images.length - 1
              ? { ...opacity, ...hidden }
              : { visiblity: "visible" }
          }
        >
          <KeyboardArrowRightOutlinedIcon className="arrows" />
        </div>
      </div>
    </div>
  )
}

export default Slider
