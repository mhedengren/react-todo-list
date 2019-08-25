import React from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoItem, { ITodoItem } from './components/TodoItem/TodoItem'

interface ITodoState {
  todos: ITodoItem[]
}

class App extends React.Component<{}, ITodoState> {
  constructor(props: any) {
    super(props)
    this.state = {
      todos: []
    }
    this.addItem = this.addItem.bind(this)
    this.toggleDone = this.toggleDone.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.removeAll = this.removeAll.bind(this)
  }

  componentDidMount() {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }
    let todosFromStorage = JSON.parse(localStorage.getItem('todos')!)
    this.setState({
      todos: todosFromStorage
    })
  }

  addItem(todo: ITodoItem) {
    if (todo.text.trim() === '' || todo.text === null) {
      return false
    }
    const todos = this.state.todos
    this.setState({ todos: [...todos, todo] }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    })
  }

  toggleDone(id: number) {
    this.setState(
      prevState => {
        const updatedTodos = prevState.todos.map(todo => {
          if (todo.id === id) {
            todo.isComplete = !todo.isComplete
          }
          return todo
        })
        return { todos: updatedTodos }
      },
      () => {
        localStorage.setItem('todos', JSON.stringify(this.state.todos))
      }
    )
  }

  removeItem(id: number) {
    var myArr = this.state.todos
    var index = myArr.findIndex(function(todo) {
      return todo.id === id
    })
    if (index !== -1) myArr.splice(index, 1)
    this.setState({ todos: myArr }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    })
  }

  removeAll() {
    let emptyStorage: any = []
    this.setState({ todos: emptyStorage }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    })
  }

  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem
        key={item.id}
        item={item}
        toggleDone={this.toggleDone}
        removeItem={this.removeItem}
      />
    ))

    return (
      <div className='main-wrapper'>
        <div className='add-todo-wrapper'>
          <AddTodo addItem={this.addItem} todoList={this.state.todos} />
        </div>
        <ul className='todo-list'>{todoItems}</ul>
        <button className='remove-all-button' onClick={this.removeAll}>
          Ta bort allt
        </button>
      </div>
    )
  }
}

export default App
