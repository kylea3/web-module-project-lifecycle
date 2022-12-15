import React from 'react'

export default class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      input: ''
    }
  }
  onChange = (evt) => {
  this.setState({
    ...this.state,
    input: evt.target.value
  })
  }
  onSubmit = () => {
    
  }
  render() {
    return(
      <form onSubmit={this.onSubmit}>
        <input onChange={this.onChange} placeholder="Type Todo" />
        <button>Submit</button>
      </form>
    )
  }
}