import React from 'react'
import NoteList from '../note-list'

class NoteItem extends React.Component {
  render() {
    let {note, title, content, removeNote } = this.props
    return (
      <ul className='note-item'>
        <h3>{title}</h3>
        <p>{content}</p>
        <button onClick={() => { removeNote(note) }}> remove task </button>
      </ul>
    )
  }
}

export default NoteItem
