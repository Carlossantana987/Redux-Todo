import { ADD_NEW_TODO, TOGGLE_TODO } from "../actions";

export const todoReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      const newTodo = { name: action.payload, completed: false };
      return {
        ...state,
        todo: [...state.todo, newTodo]
      };
  }
};
