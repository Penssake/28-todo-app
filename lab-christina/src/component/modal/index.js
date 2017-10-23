import React from 'react'

class Modal extends React.Component {
  render(){
    return(
      <div
        style={{
          position: 'inline-block',
          display: this.props.hide ? 'none' : 'block',
        }}
        className='modal'>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Modal
