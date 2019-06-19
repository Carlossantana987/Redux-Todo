import { ADD_NEW_TODO, TOGGLE_TODO_LIST } from "../actions";

const defaultState = {
  todos: []
};

export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      const newTodo = { item: action.payload, completed: false };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case TOGGLE_TODO_LIST:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (action.payload === index) {
            return {
              ...todo,
              completed: !todo.completed
            };
          } else {
            return todo;
          }
        })
      };
    default:
      return state;
  }
};
