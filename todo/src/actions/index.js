export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const TOGGLE_TODO_LIST = "TOGGLE_TODO_LIST";

export const toggleTodo = index => {
  return {
    type: TOGGLE_TODO_LIST,
    payload: index
  };
};

export const addNewTodo = newTodo => {
  return {
    type: ADD_NEW_TODO,
    payload: newTodo
  };
};
