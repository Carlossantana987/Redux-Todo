import React from "react";
import { connect } from "react-redux";

import { addNewTodo, toggleTodo } from "../actions";

class TodoList extends React.Component {
  state = {
    newTodo: ""
  };

  handleChanges = e => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addNewTodo(this.state.newTodo);
    this.setState({ newTodo: " " });
  };

  toggleTodo = (e, index) => {
    e.preventDefault();
    this.props.toggleTodo(index);
  };

  render() {
    return (
      <React.Fragment>
        <h1> Todo List </h1>
        <div className="todoDiv">
          {this.props.todos.map((todo, index) => (
            <h4 onClick={e => this.toggleTodo(e, index)} key={index}>
              {todo.item}
              {todo.completed && todo.completed
                ? "  (Completed)"
                : "  (inCompleted) "}
            </h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleChanges}
          placeholder="Add new member"
        />
        <button onClick={this.addTodo}>Add Todo</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todolist_R.todos
  };
};

export default connect(
  mapStateToProps,
  { addNewTodo, toggleTodo }
)(TodoList);
