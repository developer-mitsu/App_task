import React from 'react'
import './scss/main.scss'

const Title = (props) => {
  return (
    <div>
      <h1 className="header_title">{props.content}</h1>
    </div>
  )
}

export default Title