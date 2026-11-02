import React, { Component } from 'react'

export default class TodoSearch extends Component {
    buttons=[
        {name: 'Ali'},
        {name: 'Active'},
        {name: 'Done'},
    ]
    onSearchChenge=(e)=>{
        const term=e.target.value
        this.props.onSearchChange(term)
    }
  render() {
    const btns=this.buttons.map((el)=>{
        const isActive=this.props.filter===el.name 
        const clazz=isActive ? 'btn-info' : 'btn-outline-secondary'
        return <button
        key={el.name}
        className={`btn ${clazz}`}
        onClick={()=>this.props.setFillter(el.name)}
        >{el.name}</button>
    })
    return (
      <div className='d-flex'>
        <input type="text"
        className='form-control'
        onChange={this.onSearchChenge}
        placeholder='Search todo'/>
        {btns}

      </div>
    )
  }
}
