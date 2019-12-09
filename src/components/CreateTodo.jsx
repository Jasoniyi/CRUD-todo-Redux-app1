import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "./action";

class CreateTodo extends Component {
  state = {
    todoText: ""
  };

  onChangeTodoText = e => {
    this.setState({
      todoText: e.target.value
    });
  };

  render() {
    return (
      <div className="form-group row">
        <div className="col-sm-10">
          <input
            type="text"
            value={this.state.todoText}
            onChange={this.onChangeTodoText}
          />
          <button
            type="button"
            onClick={() => this.setState({ todoText: "" })}
            style={{ marginTop: "25px", marginRight: "15px" }}
            className="btn btn-danger"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              this.props.addTodo(this.state.todoText);
              this.setState({ todoText: "" });
            }}
            style={{ marginTop: "25px" }}
            className="btn btn-success"
          >
            Add Todo
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, { addTodo })(CreateTodo);
