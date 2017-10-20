import React from 'react'
import NoteForm from '../note-form'
import uuidv1 from 'uuid/v1'

class Dashboard extends React.Component {
  constructor(props){
    super(props)
    console.log({props})
    this.state = {
      notes: [],
    }
    this.addNote = this.addNote.bind(this)
  }

  addNote(note){
    note = {...note}
    note.id = uuidv1()
    note.editing = false
    note.completed = false
    this.setState(prevState => ({
      notes: [...prevState.notes, note],
    }))
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state)
  }
  removeNote(note){
    console.log(note.id)
  }

  render() {
    return (
      <div>
        <h1>Task List</h1>
        <NoteForm onComplete={this.addNote} />
      </div>
    )
  }
}

export default Dashboard
