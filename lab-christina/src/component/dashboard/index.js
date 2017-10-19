import React from 'react'

class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      toDoList: [],
    }
    this.pushtoDoItem = this.pushtoDoItem.bind(this)
    this.removetoDoItem = this.removetoDoItem.bind(this)
  }

  pushtoDoItem(toDoItem){
    this.setState(prevState => ({
      toDoList: [...prevState.toDoLIst, toDoItem],
    }))
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state)
  }

  componentDidMount() {
    return this.pushtoDoItem({title: 'laundry'})
  }

  removetoDoItem(toDoItem){

  }

  render() {
    return (
      <div>
        <h1>Task List</h1>
      </div>
    )
  }
}

export default Dashboard
