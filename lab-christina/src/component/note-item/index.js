import React from 'react'

class NoteItem extends React.Component {
  render() {
    let {note, removeNote} = this.props
    return (
      <ul className='note-item'>
        <li>Task: {this.props.note.title} </li>
        <li>{this.props.note.content} </li>
      </ul>
    )
  }
}

export default NoteItem
