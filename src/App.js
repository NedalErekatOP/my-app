import React from 'react';
import Task from "./components/task/task.component";
import AddTask from "./components/addTask/addTask.component";
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    }
  }

  deleteTask = (taskName) => {
    const updated = this.state.tasks.filter(ele => ele !== taskName);
    this.setState({ tasks: [...updated] });
  }

  EditTask = (newTask, prevTask) => {
    const updatedTasks = this.state.tasks.map(ele => {
      if (ele === prevTask) {
        return newTask;
      }
      return ele;
    })
    this.setState({ tasks: updatedTasks })
    console.log(this.state.tasks);
  }

  buildTasks = () => {
    return this.state.tasks.map((name, i) => <Task key={i} name={name} handleDeletion={this.deleteTask} handleEdit={this.EditTask} />);
  }

  handleSubmitNewTask = (n) => {
    this.setState({ tasks: [...this.state.tasks, n] })
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to our React App</h1>
        <AddTask submitNewTask={this.handleSubmitNewTask} />
        {!this.state.tasks.length ? <h2>No tasks to show</h2> : this.buildTasks()}
      </div>
    )
  };
}

export default App;
