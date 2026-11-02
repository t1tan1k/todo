import React from 'react'
import './TodoListItem.css'

function TodoListItem({title, importent, done, id, onDone, onImp, onDel}) {

    let clazz=''
    if(importent){
        clazz+=' imp'
    }
    if(done){
        clazz+=' done'
    }

  return (
    <span className='d-flex justify-content-between alige-items-center'>
      <span 
      className={`flex-grow-1 ${clazz}`}
      onClick={() => onDone(id)}
      >{title}</span>
      <button className='btn btn-outline-danger'
      onClick={()=>onDel(id)}
      ><i className="bi bi-trash3"></i></button>
      <button className='btn btn-outline-warning'
      onClick={()=>onImp(id)}
      ><i className="bi bi-exclamation-circle"></i></button>
    </span>
  )
}

export default TodoListItem
