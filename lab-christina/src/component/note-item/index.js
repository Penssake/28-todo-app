import React from 'react';
import Modal from '../modal'
import NoteForm from '../note-form';

class NoteItem extends React.Component {
 render(){
   let { note, removeNote, updateNote } = this.props;

   let showEdit = () => updateNote({ ...note, editing: true });
   let hideEdit = () => updateNote({ ...note, editing: false });

   let updateAndClose = (note) => {
     updateNote({ ...note, editing: false });
   }

   return (
     <li className='note-item'>
       <h1>{ note.title }</h1>
       <p>{ note.content }</p>

       <button onClick={ showEdit }> edit </button>
       <button onClick={() => removeNote(note) }> remove </button>

       <Modal onClose={ hideEdit } show={ note.editing }>
         <NoteForm onComplete={ updateAndClose } note={ note }/>
       </Modal>
     </li>
    )
  }
}

export default NoteItem;
