import React from 'react'

function TodoHeader({active, done}) {
  return (
    <div className='d-flex justify-content-between alige-items-center'>
    <h1>Todo List</h1>
    <h3>{active}3 more todo, {done} done</h3>
    </div>
  )
}

export default TodoHeader
