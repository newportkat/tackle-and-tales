import React from "react"
import Banner from "../../components/banner/Banner"
import Card from "../../components/card/Card"
import Categories from "../../components/categories/Categories"
import Cta from "../../components/cta/Cta"
import Featured from "../../components/featured/Featured"
import Slider from "../../components/slider/Slider"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Slider />
      <Featured type="featured" />
      <Cta />
      <Categories />
    </div>
  )
}

export default Home
