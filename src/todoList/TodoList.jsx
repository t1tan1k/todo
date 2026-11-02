import React from 'react'
import TodoListItem from '../todoListItem/TodoListItem'

function TodoList(props) {
    const elements=props.todo.map((item)=>{
        return (
      <li className='list-group-item' key={item.id}>
        <TodoListItem {...item} {...props}/>
      </li>
        )
    })
  return (
    <ul className='list-group'>
        {elements}
    </ul>
  )
}

export default TodoList
