import React, { useState } from 'react'
import ItemsList from './ItemsList'
import './Todo.css'

function ToDo() {

    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value)
    }


    const AddItem = () => {
        setItems((oldItems) => {
            return [...oldItems,inputList];
        })
        setInputList("");
    }
 
     const deleteItem = (id) =>{
         setItems((oldItems) => {
             return oldItems.filter((arrEle, index) => {
                 return index !== id;
             })
         })
        alert('confirm delete')

    } 
    return (
        <div className="center">
            <h1 className="heading">To Do List</h1>
            <input type="text" placeholder="Add item" className="input" onChange={itemEvent}  value={inputList}/>
            <img src="https://img.icons8.com/android/50/000000/plus.png" alt="" className="icon" onClick={AddItem} />
           
          
                {
                    Items.map((itemval, index) => {
                        return(
                        <ItemsList 
                        item={itemval}
                        key={index}
                        id={index}
                        onSelect = {deleteItem }/>
                        )
                    })
                }
          
        </div>
    )
}

export default ToDo