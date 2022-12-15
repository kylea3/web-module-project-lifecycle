import React from 'react'

export default class Todo extends React.Component {
  markCompleted = (evt) => {
    this.props.markCompleted(this.props.todos.id);
  }
  render() {
    return (
        <li onClick={this.markCompleted}>{this.props.todos.name}{this.props.todos.completed ? " ✔" : <span></span> }</li>
    )
  }
}