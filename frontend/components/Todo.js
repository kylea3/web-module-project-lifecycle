import React from 'react'

export default class Todo extends React.Component {
  markCompleted = () => {

  }
  render() {
    return (
        <li onClick={this.markCompleted}>{this.props.todos.name}</li>
    )
  }
}