import React from 'react'
import NoteForm from '../note-form'
import Modal from '../modal'


class NoteItem extends React.Component {
  render() {
    let {note, removeNote} = this.props
    return (
      <div>
      <Modal hide={false} >
        <ul className='note-item'>
          <li> Faker title {note.title} </li>
          <li> Faker content faker content faker content {note.content} </li>
        </ul>
        </Modal>
        <button className='remove' onClick={() => removeNote(note)}> remove </button>
        <button className='update' onClick={() => updateNote(note)}> update </button>
      </div>
    )
  }
}

export default NoteItem
