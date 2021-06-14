import React from 'react'
import './Todo.css'

function ItemsList(props) {
   
    return (
        <div>
          <ul>
          <img src="https://img.icons8.com/metro/26/000000/multiply.png" 
          className="iconc" 
          alt="" 
          onClick={() => {
            props.onSelect(props.id)
          }}/>
            <li className="list">{props.item}</li>
          </ul>
        </div>
    )
}

export default ItemsList