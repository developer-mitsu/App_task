import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'


ReactDOM.render(
  <App
    greeting={'Hello, World'}
    message={'This is My First React Application'}
  />, // 中身
  document.getElementById('root') // 場所
)