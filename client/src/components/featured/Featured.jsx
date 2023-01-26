import { PaginationItem } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import Card from "../card/Card"
import "./featured.scss"

const Featured = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  )

  return (
    <div className="featured">
      <div className="text">
        <h1>Featured</h1>
        <p>
          Looking for the ultimate fishing experience? Check out our top-rated
          lures, guaranteed to make even the pickiest of fish bite. And for the
          fishermen who prefer a more comfortable catch, try out our 'River Rat'
          fishing kayak - perfect for lounging on the water all day long!
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "Loading..."
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  )
}

export default Featured
