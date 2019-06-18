import React from "react";

class TodoList extends React.Component {
  render() {
    return (
      <div className="TodoList Container">
        <h1>TodoList</h1>

        <Form>
          <input type="text" placeholder="add todo" />
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default TodoList;
