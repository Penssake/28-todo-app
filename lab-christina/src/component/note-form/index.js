import React from 'react'

class NoteForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onComplete(this.state)
    this.setState({title: '', content: ''})
  }

  handleChange(event) {
    let {name, value, type} = event.target
    this.setState({[name]: value})
  }

  render() {
    return (
      <div>
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
          <button type='submit'>create task</button>
        </form>
      </div>
    )
  }
}

export default NoteForm
