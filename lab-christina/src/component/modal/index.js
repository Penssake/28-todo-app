import React from 'react'

class Modal extends React.Component {
  render(){
    return(
      <div
        style={{
          position: 'inline-block',
          display: this.props.hide ? 'none' : 'block',
          width: '100%',
          height: '100%',
        }}
        className='modal'>
        <main>
          <button onClick={ this.props.onClose }> done </button>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Modal
