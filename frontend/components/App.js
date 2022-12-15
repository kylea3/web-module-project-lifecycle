import React from 'react'
import Form from './Form';

const URL = 'http://localhost:9000/api/todos'



export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: ''
    }
    }
  render() {
    return (
      <>
        <div>
          <h2>Todo List:</h2>
          <ul>
            <li>Walk the Dog</li>
            <li>Learn React</li>
            <li>Have Fun</li>
          </ul>

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
