import React from 'react'
import NoteForm from '../note-form'


class NoteItem extends React.Component {
  render() {
    let {note, removeNote} = this.props
    return (
      <ul className='note-item'>
        <li>Task: {this.props.note.title} </li>
        <li>{this.props.note.content} </li>
        <button onClick={() => removeNote(note)}> remove task </button>
      </ul>
    )
  }
}

export default NoteItem
