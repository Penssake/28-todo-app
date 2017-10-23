import React from 'react'
import NoteForm from '../note-form'
import NoteList from '../note-list'
import uuidv1 from 'uuid/v1'

class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      notes: [],
    }
    this.addNote = this.addNote.bind(this)
    this.removeNote = this.removeNote.bind(this)
    this.updateNote = this.updateNote.bind(this)
  }

  addNote(note){
    let result = {
      ...note,
      id: uuidv1(),
      created: new Date(),
      editing: false,
      completed: false,
  }
  this.setState(prevState => ({
      notes: [...prevState.notes, result],
    }))
  }

  removeNote(note){
    this.setState(prevState => ({
      notes: prevState.notes.filter((item) => {
        return item.id !== note.id
      }),
    }))
  }

  updateNote(note){
    this.setState(prevState => ({
      expenses: prevState.expenses.map(item => item.id == expense.id ? expense : item)
    }))
  }

  render() {
    return (
      <div>
        <NoteForm onComplete={this.addNote} />
        <NoteList notes={this.state.notes} removeNote={this.removeNote} />
      </div>
    )
  }
}

export default Dashboard
