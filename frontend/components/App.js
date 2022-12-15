import React from 'react'
import Form from './Form';
import TodoList from './TodoList'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
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
  render() {
    return (
      <>
        <div>
          <h2>Todo List:</h2>
          <TodoList markCompleted={this.markCompleted} todos={this.state.todos}/>
          <Form />
        </div>
        <br></br>
        <div>
          <button>Hide Complete</button>
        </div>
      </>
    )
  }
}
