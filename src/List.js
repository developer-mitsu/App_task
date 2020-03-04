import React from 'react'
import './scss/main.scss'

const List = (props) => {
  return (
    <div>
      <div className="item1">{props.item1}</div>
      <div>{props.item2}</div>
    </div>
  )
}

export default List