import React from "react"

export interface ITodoItem {
    id: number
    text: string
    isComplete: boolean
  }

export interface ITodoItemProps {
    item: ITodoItem
    toggleDone(id:number): void
    removeItem(id:number): void
  }
  
function TodoItem(props:ITodoItemProps) {
    return (
        <li className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.isComplete} 
                onChange={() => props.toggleDone(props.item.id)}
            />
            <p>{props.item.text}</p>
            <button onClick={() => props.removeItem(props.item.id)}>Ta bort</button>
        </li>
    )
}

export default TodoItem