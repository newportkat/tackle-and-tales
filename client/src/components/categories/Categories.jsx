import React from "react"
import { Link } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import "./categories.scss"

const Categories = () => {
  const { data, loading, error } = useFetch("/categories?populate=*")
  const scrollUp = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className="categories">
      <h1>Shop by Category</h1>
      <div className="selections">
        {data?.map((item) => (
          <div className="category" key={item?.id}>
            <img
              src={
                import.meta.env.VITE_APP_UPLOAD_URL +
                item?.attributes?.img?.data?.attributes?.url
              }
              alt=""
            />
            <Link className="button" to={`products/${item?.id}`} onClick={scrollUp}>
            {item?.attributes?.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
