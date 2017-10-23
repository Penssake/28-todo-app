import React from 'react'
import NoteForm from '../note-form'
import Modal from '../modal'


class NoteItem extends React.Component {
  render() {
    let {note, removeNote, updateNote} = this.props
    return (
      <div>
      <Modal hide={false} >
        <ul className='note-item'>
          <li> <strong> {note.title} </strong> </li>
          <li> {note.content} </li>
        </ul>
        </Modal>
        <button className='remove' onClick={() => removeNote(note)}> remove </button>
        <NoteForm onComplete={updateNote} />
      </div>
    )
  }
}

export default NoteItem
