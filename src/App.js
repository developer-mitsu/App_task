import React from 'react'
import Title from './Title.js'
import Form from './Form.js'
import List from './List.js'


const App = () => {
  return (
    <div>
      <div>
        <Title content={'TodoApp'} />
      </div>
      <div>
        <Form imput={
          <form method="POST">
            名前:<input type="text" name="name" />
            <button type="submit" name="送信">
              <font size="1">送信</font>
            </button>
          </form>
        }/>
      </div>
      <div>
        <List 
          item1={'item1です'}
          item2={'item2です'}
        />
      </div>
    </div>
  )
}

export default App