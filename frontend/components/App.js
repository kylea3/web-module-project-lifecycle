import React from 'react'
import Form from './Form';
import TodoList from './TodoList'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      todos: [{
        "id": "WpD8Q",
        "name": "laundry",
        "completed": false
    },
    {
        "id": "vvkIv",
        "name": "dishes",
        "completed": false
    },
    {
        "id": "A6vNV",
        "name": "groceries",
        "completed": false
    }]
    }
    }
    onClear = () => {
      this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
      })
    }
    markCompleted = (clickedId) => {
      this.setState({
        ...this.state,
        todos: this.state.todos.map(todo => {
          if(todo.id === clickedId) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo;
        })
      })
    }
    onSubmit = (name) => {
      const newTodo = {
        id: Date.now(),
        name: name,
        completed: false
      }
      this.setState({
        ...this.state,
        todos: [...this.state.todos, newTodo]
      })
    }
  render() {
    return (
      <>
        <div>
          <h2>Todo List:</h2>
          <TodoList markCompleted={this.markCompleted} todos={this.state.todos}/>
          <Form submit={this.onSubmit} />
        </div>
        <br></br>
        <div>
          <button onClick={this.onClear}>Hide Complete</button>
        </div>
      </>
    )
  }
}
