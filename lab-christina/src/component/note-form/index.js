import React from 'react'

let clearState = {
  title: '',
  content: '',
}

class NoteForm extends React.Component {
  constructor(props) {
    super(props)
    let {note} = props
    this.state = note ? note : clearState

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onComplete(this.state)
    this.setState(clearState)
  }

  handleChange(event) {
    let {name, value} = event.target
    this.setState({[name]: value})
  }

  render() {
    let buttonText = this.props.note ? 'update' : 'create'
    return (
      <form
        className='note-form'
        onSubmit={this.handleSubmit}
      >
        <label> Task </label>
        <input
          type='text'
          name='title'
          placeholder='task'
          value={this.state.title}
          onChange={this.handleChange}
        />

        <label> Task description </label>
        <input
          type='text'
          name='content'
          placeholder='content'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type='submit'> {buttonText} </button>
      </form>
    )
  }
}

export default NoteForm
