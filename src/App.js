import React from 'react'
import Title from './Title.js'
import Form from './Form.js'

const App = (props) => {
  return (
    <div>
      <Title content={'TodoApp'} />
      <Form />
    </div>
  )
}

export default App