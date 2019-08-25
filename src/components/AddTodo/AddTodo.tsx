import * as React from 'react'

interface IAddTodoProps {
  addItem(todo: ITodoItem): void
  todoList: ITodoItem[]
}

interface ITodoItem {
  id: number
  text: string
  isComplete: boolean
}

interface IState {
  value: string
}

class AddTodo extends React.Component<IAddTodoProps, IState> {
  constructor(props: IAddTodoProps) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value })
  }

  handleSubmit(event: any) {
    // Increase the id for every new item
    let highestNumber = 0
    this.props.todoList.forEach(todo => {
      if (todo.id > highestNumber) {
        highestNumber = todo.id
      }
      return highestNumber++
    })
    // Call parent method
    this.props.addItem({
      id: highestNumber,
      text: this.state.value,
      isComplete: false
    })
    // Clear the input
    this.setState({
      value: ''
    })
    localStorage.setItem('todos', JSON.stringify(this.props.todoList))
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
            autoFocus
          />
        </label>
        <input className='form-submit-input' type='submit' value='Add todo' />
      </form>
    )
  }
}

export default AddTodo
