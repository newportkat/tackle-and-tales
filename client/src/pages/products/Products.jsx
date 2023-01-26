import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import List from "../../components/list/List"
import "./products.scss"

const Products = () => {
  const catId = parseInt(useParams().id)
  const [category, setCategory] = useState(catId)
  const [sort, setSort] = useState("asc")

useEffect(()=>{
  setCategory(catId)
}, [catId])

  return (
    <div className="products">
      <div className="sort">
        <h2>Sort by</h2>
        <div className="inputItem">
          <input
            type="radio"
            id="asc"
            value="asc"
            name="price"
            onChange={(e) => setSort("asc")}
          />
          <label htmlFor="asc">Price (Lowest first)</label>
        </div>
        <div className="inputItem">
          <input
            type="radio"
            id="desc"
            value="desc"
            name="price"
            onChange={(e) => setSort("desc")}
          />
          <label htmlFor="desc">Price (Highest first)</label>
        </div>
      </div>

      <div className="catalogue">
        <List category={category} sort={sort} />
      </div>
    </div>
  )
}

export default Products
