import React from "react";
import './task.css'

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.name,
      active: false,
    };
  }

  handleDelete = () => {
    this.props.handleDeletion(this.props.name)
  }

  handleEdit = (e, prevTask) => {
    e.preventDefault();
    this.props.handleEdit(this.state.task, prevTask);
    this.setState({ ...this.state, active: false });
  }

  handleEditChange = (e) => {
    this.setState({ task: e.target.value });
  }

  editClicked = () => {
    this.setState({ ...this.state, active: !this.state.active });
  }

  render() {
    return (
      <div className="task-container">
        <section className="task-item">
          <span className="task-section">
            <h1>{this.state.task}</h1>
          </span>
          <span className="task-btn-section">
            <button
              className="btn-task"
              onClick={this.handleDelete}
            >Delete</button>
            <button
              className="btn-task"
              onClick={this.editClicked}
            >Edit</button>
          </span>
        </section>


        <section className="edit-task">
          {this.state.active &&
            <form onSubmit={(e) => this.handleEdit(e, this.props.name)}>
              <input 
                type='text' 
                value={this.state.task} 
                onChange={this.handleEditChange} 
              />
              <input 
                type='submit' 
                value='Done'
              />
            </form>
          }
        </section>
      </div>
    );
  }
}

export default Task;