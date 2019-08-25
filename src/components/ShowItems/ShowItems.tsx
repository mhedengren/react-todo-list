import * as React from 'react'
import './ShowItems.css'

export interface IShowItemsProps {
  todoList: ITodoItem[]
  toggleDone(id:number): void
  removeItem(id:number): void
}

export interface ITodoItem {
  id: number
  text: string
  isComplete: boolean
}

class ShowItems extends React.Component<IShowItemsProps, {}> {
  constructor(props: IShowItemsProps) {
    super(props)
  }

  public render() {
    //   const items = this.props.todoList.map((item,i) => {
    //     if (item.isComplete === false){
    //       return (
    //       <div>
    //         <li onClick={() => this.props.toggleDone(item.id)} key={item.id}>{item.text}
    //         </li> <button onClick={() => this.props.removeItem(i)}>Ta bort</button>
    //       </div>
    //       );
    //     } return (
    //       <div>
    //         <li className="done" onClick={() => this.props.toggleDone(item.id)} key={item.id}>{item.text}</li>
    //         <button onClick={() => this.props.removeItem(i)}>Ta bort</button>
    //       </div> )
    // })

    return (
      <div>
       
      </div>
    )
  }
}

export default ShowItems
