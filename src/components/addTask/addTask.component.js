import React from "react";
import './addTask.css';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitNewTask(this.state.name);
    this.setState({ name: '' })
  }

  handleOnChange = (e) => {
    this.setState({ name: e.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Add New Task:
          <input
            value={this.state.name}
            className="add-task-field"
            type="text"
            name="name"
            onChange={this.handleOnChange} />
        </label>
        <input
          className="btn"
          type="submit"
          value="Submit" />
      </form>
    )
  }
}

export default AddTask;