import React from "react"
import useFetch from "../../hooks/useFetch"
import Card from "../card/Card"
import "./list.scss"

const List = ({ category, sort }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${category}&sort=price:${sort}`
  )

  return (
    <div className="list">
      {error
        ? "Something went wrong!"
        : loading
        ? "Loading..."
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  )
}

export default List
