import React from 'react'

let modalStyles = (props) => ({
  background: 'green',
})

let modalMainStyles = {
  background: 'blue',
}

class Modal extends React.Component {
  render() {
    return (
      <div style={modalStyles(this.props)} className='modal'>
        <main style={modalMainStyles} >
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Modal
