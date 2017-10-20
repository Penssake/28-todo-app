import React from 'react'
import NoteForm from '../note-form'

class NoteItem extends React.Component {
  render() {
    let {title} = this.props
    let {content} = this.props
    return (

      <ul className='note-item'>
        <h3>{title}</h3>
        <p>{content}</p>
        <button onClick={() => removeNote(note) }> remove task </button>
      </ul>
    )
  }
}

export default NoteItem
